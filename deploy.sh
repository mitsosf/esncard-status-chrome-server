#!/bin/bash
docker build --tag esncard-status-chrome-server:latest .
docker-compose down
docker-compose up -d