#! /bin/bash

brew upgrade && brew update

brew install nvm

nvm install 12.18.3
nvm use 12.18.3

npm i -g yarn
