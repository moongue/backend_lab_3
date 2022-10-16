#!/usr/bin/env bash

sonar-scanner \
  -Dsonar.projectKey=$SONAR_PROJECT \
  -Dsonar.sources=. \
  -Dsonar.host.url=http://localhost:9000 \
  -Dsonar.login=$SONAR_TOKEN
