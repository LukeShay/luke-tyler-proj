#!/usr/bin/env node

let command = ''

process.argv.slice(2).forEach((arg) => (command += ` ${arg}`))

require('./yarn').runScriptOnWorkspaces(command)
