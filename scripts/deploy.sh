#!/bin/bash
echo ""
echo "=== Preparing 📦..."
echo ""
npm run build

echo ""
echo "=== Delivering 🚛..."
echo ""
pushd dist > /dev/null # Silence output
npm publish --access public
popd > /dev/null # Silence output
