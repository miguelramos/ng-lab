#!/bin/bash
set -e
echo "$PWD"
echo "☢ Starting publishing process, Hendrix! 🎸"

publish() {
  (
    cd $1
    local name=$(cat package.json | grep name | head -n 1 | cut -d'"' -f 4)
    local private=$(cat package.json | grep private | head -n 1 | cut -d',' -f1 | cut -d':' -f2)
    #local targetVersion=$(cat package.json | grep version | head -n 1 | cut -d'"' -f 4)
    #local currentVersion=$(npm info $name | grep latest | cut -d':' -f2 | tr -d '[:space:]')
    #if [ -z "$currentVersion" ]; then currentVersion="0.0.0"; fi
    if [ -z "$private" ]; then private="true"; fi
    echo "⚠️  $name"
    if [ "$private" != "true" ]; then
    echo "📦  Publishing: $name";
    #$(npm bin)/automatic-release
    npx automatic-release
    fi
  )
}

for i in ./dist/libs/*; do publish $i; done