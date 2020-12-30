#!/bin/bash

ROOT_DIR="$( cd "$( dirname "${BASH_SOURCE[0]}" )/.." && pwd )"

# Delete /dist
echo ""
echo "=== Cleaning 🧹 ..."
rm -rf ${ROOT_DIR}/dist
echo "Cleared build directory '/dist'"

# Transpile recipes
echo ""
echo "=== Creating recipes 👨‍🍳 ..."
babel --minified ./recipes --out-dir ./dist -s inline
cp README.md ./dist
cp package.json ./dist
