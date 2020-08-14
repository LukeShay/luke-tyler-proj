#!/usr/bin/env node
const fs = require('fs');
const common = require('./common');

const SHADOW_DIR = './.shadowroot';

const { getFileOrDefault, getPackages } = common;

const workspace = {
  extensions: JSON.parse(getFileOrDefault('./.vscode/extensions.json')),
  folders: [
    { name: 'Project Files', path: SHADOW_DIR },
    { name: 'Project Scripts', path: 'scripts' },
    { name: 'Github Settings', path: '.github' },
    { name: 'VS Code Settings', path: '.vscode' },
    { name: 'Documentation', path: 'docs' },
    { name: 'Configuration', path: 'configs' },
  ],
  launch: JSON.parse(getFileOrDefault('./.vscode/launch.json')),
  settings: JSON.parse(getFileOrDefault('./.vscode/settings.json')),
};

fs.readdirSync('packages').forEach((package) => {
  workspace.folders.push({
    name: `@package/${package}`,
    path: `packages/${package}`,
  });
});

fs.readdirSync('apps').forEach((package) => {
  workspace.folders.push({
    name: `@app/${package}`,
    path: `apps/${package}`,
  });
});


fs.writeFileSync('./code.code-workspace', JSON.stringify(workspace, null, 2));

if (!fs.existsSync(SHADOW_DIR)) {
  fs.mkdirSync(SHADOW_DIR);
}

fs.readdirSync('.').forEach((element) => {
  if (
    !fs.statSync(element).isDirectory() &&
    !fs.existsSync(`${SHADOW_DIR}/${element}`)
  ) {
    require('child_process').exec(
      `ln -s ../${element} ${SHADOW_DIR}/${element}`
    );
  }
});
