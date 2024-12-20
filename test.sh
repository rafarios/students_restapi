#!/bin/bash

curl -s http://localhost:3000/students
echo
curl -s http://localhost:3000/students/?id=1
echo
curl -s -X POST -H "Content-Type: application/json" -d "{\"name\":\"James Stuart\"}" http://localhost:3000/students
echo
