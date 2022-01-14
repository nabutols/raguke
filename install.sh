#!/usr/bin/bash
PURPLE='\033[0;35m'

apt-get install -y libwebp ffmpeg wget tesseract
wget -O ~/../usr/share/tessdata/ind.traineddata "https://github.com/tesseract-ocr/tessdata/blob/master/ind.traineddata?raw=true"
clear
echo ${PURPLE}"GERANDO QR"
node index.js
