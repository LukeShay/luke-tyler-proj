const fs = require('fs')
const cp = require('child_process')
const { exit } = require('process')
const { getFileOrDefault } = require('./common')

const runScriptInDirectory = (script, path) => {
  if (!fs.lstatSync(path).isDirectory()) return

  console.log(`\nRunning 'yarn ${script}' on ${path}`)

  try {
    cp.execSync(`cd ${path} && yarn ${script}`)
    console.log(`Successfully build ${path}`)
  } catch (error) {
    if (error.status !== 1) {
      console.error(`
      Package: ${path}
      Status: ${error.status}
      Message: ${error.message}
    `)
      exit(1)
    }
  }
}

const runScriptInDirectoryPackages = (script, directory) =>
  fs
    .readdirSync(directory)
    .forEach((package) => runScriptInDirectory(script, `${directory}/${package}`))

const runScriptOnWorkspaces = (script) => {
  const package = JSON.parse(getFileOrDefault('package.json'))

  package.workspaces.forEach(
    (workspace) =>
      workspace.includes('/*') && runScriptInDirectoryPackages(script, workspace.replace('/*', ''))
  )
}

module.exports = {
  runScriptInDirectory,
  runScriptInDirectoryPackages,
  runScriptOnWorkspaces,
}
