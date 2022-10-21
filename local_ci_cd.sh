#!/usr/bin/env bash

APP_ROOT=./
BUILD_DIR=dist

cd $APP_ROOT || exit;

npm install
npm audit
npm run lint
npm run test
#npm run test:e2e

if [ -d $BUILD_DIR ]; then
	echo 'Delete exist build version'
	rm -R $BUILD_DIR
fi

npm run build --configuration=production

#zip -r client-app.zip $BUILD_DIR
