#!/bin/bash

ROOT_DIR="$( cd "$( dirname "${BASH_SOURCE[0]}" )/.." && pwd )"

# Delete /dist
echo "=== Cleaning 🍽 ..."
rm -rf ${ROOT_DIR}/dist

# Transpile recipes
echo "=== Making new recipes 📖 ..."
babel ./recipes --out-dir ./dist/recipes -s inline
babel ./utils --out-dir ./dist/utils -s inline
