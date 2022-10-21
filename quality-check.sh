#!/usr/bin/env bash

APP_ROOT=./

cd $APP_ROOT || exit;

npm audit
npm run lint
npm run test
npm run test:e2e
./sonarqube.sh

echo 'Quality check finished'