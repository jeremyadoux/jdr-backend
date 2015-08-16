#!/usr/bin/env bash

alias sails='docker run -p 443:1337 -p 3000:3000 --link mongodb:mongodb -v `pwd`:/var/www saleskapital/sailsjs sails'
alias npm='docker run -v `pwd`:/var/www saleskapital/sailsjs npm'
alias sailsDebug='docker run -p 443:1337 -p 3000:3000 -p 5858:5858 --link mongodb:mongodb -v `pwd`:/var/www saleskapital/sailsjs node debug app.js'

