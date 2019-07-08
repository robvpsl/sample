#!/bin/bash
cd ../backend/
npm start
yes "" | command
cd ../frontend/
node server.js
yes "" | command
exit 0