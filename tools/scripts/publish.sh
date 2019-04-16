#!/bin/bash
set -e
BASEDIR=$PWD
echo "☢ Starting publishing process, Hendrix! 🎸"

conventional-changelog -p angular -i CHANGELOG.md -s -r 0

rm -rf dist/libs
npm run build

PKG_VERSION=$(cat package.json | grep version | head -n 1 | cut -d'"' -f 4)

VERSION=$1

publish() {
  (
    cd $1
    local search="0.0.0-PLACEHOLDER"
    local name=$(cat package.json | grep name | head -n 1 | cut -d'"' -f 4)
    local private=$(cat package.json | grep private | head -n 1 | cut -d',' -f1 | cut -d':' -f2)
    #local targetVersion=$(cat package.json | grep version | head -n 1 | cut -d'"' -f 4)
    #local currentVersion=$(npm info $name | grep latest | cut -d':' -f2 | tr -d '[:space:]')
    #if [ -z "$currentVersion" ]; then currentVersion="0.0.0"; fi
    if [ -z "$private" ]; then private="true"; fi
    echo "⚠️  $name"
    if [ "$private" != "true" ]; then
    echo "📦  Publishing: $name";
    echo "Copy $BASEDIR/.npmrc to $1"
    cp "$BASEDIR"/.npmrc $PWD/
    cp "$BASEDIR"/CHANGELOG.md $PWD/
    cp "$BASEDIR"/README.md $PWD/
    cp "$BASEDIR"/LICENSE $PWD/

    # For linux
    #sed -i package.json -e "s/${search}/${VERSION}/g" package.json
    # For OSX
    sed -i "" "s/${search}/${VERSION}/g" package.json
    npm pack
    #$(npm bin)/automatic-release
    #npx automatic-release -f
    #npm publish --access public
    fi
  )
}

for i in ./dist/libs/*; do publish $i; done

sed -i "" "s/${PKG_VERSION}/${VERSION}/g" package.json
