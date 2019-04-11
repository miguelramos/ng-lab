#!/bin/bash
set -e
BASEDIR=$PWD
echo "☢ Starting publishing process, Hendrix! 🎸"

VERSION=$(cat package.json | grep version | head -n 1 | cut -d'"' -f 4)

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
    echo "List directory"
    ls -la
    (ls package.json && echo "Package present") || echo "Package missing"
    sed -i "" "s/${search}/${VERSION}/g" $PWD/package.json
    #$(npm bin)/automatic-release
    #npx automatic-release -f
    npm publish --access public
    fi
  )
}

for i in ./dist/libs/*; do publish $i; done
