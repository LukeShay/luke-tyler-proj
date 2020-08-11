#! /bin/bash

brew upgrade && brew update

brew install nvm

npx pnpm i -g pnpm

pnpm install --recursive
