#!/bin/bash
cd /home/ec2-user/sample/backend/
nohup npm start
yes "" | command
yes "" | command
cd /home/ec2-user/sample/frontend
nohup node server.js
yes "" | command
yes "" | command
exit 0
