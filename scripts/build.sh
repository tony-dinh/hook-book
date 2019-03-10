#!/bin/bash

ROOT_DIR="$( cd "$( dirname "${BASH_SOURCE[0]}" )/.." && pwd )"

# Delete /dist
echo ""
echo "=== Cleaning 🍽 ..."
echo ""
rm -rf ${ROOT_DIR}/dist
echo "Removed '/dist'"

# Transpile recipes
echo ""
echo "=== Making new recipes 📖 ..."
echo ""
babel ./recipes --out-dir ./dist -s inline
cp package.json ./dist
