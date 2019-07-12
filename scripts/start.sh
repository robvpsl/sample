#!/bin/bash
cd ../backend/
nohup npm start
yes "" | command
cd ../frontend/
nohup node server.js
yes "" | command
exit 0