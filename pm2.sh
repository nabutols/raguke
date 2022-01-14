#!/usr/bin/bash

pkg install pm2
npm i -g pm2
pm2 start index.js
pm2 monit
