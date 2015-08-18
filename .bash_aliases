#!/usr/bin/env bash

alias sails='docker run -p 443:1337 -p 3000:3000 --link mongodb:mongodb --link mailcatcher:mailcatcher -v `pwd`:/var/www jdr/sailsjs sails'
alias npm='docker run -v `pwd`:/var/www jdr/sailsjs npm'
alias sailsDebug='docker run -p 443:1337 -p 3000:3000 -p 5858:5858 --link mongodb:mongodb --link mailcatcher:mailcatcher -v `pwd`:/var/www jdr/sailsjs node debug app.js'
