#!/bin/bash

# Build script for GitHub Pages deployment

echo "🚀 Building portfolio for GitHub Pages..."

# Install dependencies
echo "📦 Installing dependencies..."
npm install

# Build for GitHub Pages
echo "🏗️  Building static site..."
VITE_CONFIG_FILE=vite.config.github.ts npm run build

# Check if build was successful
if [ -d "dist/public" ]; then
    echo "✅ Build successful!"
    echo "📁 Static files ready in: dist/public/"
    echo "🌐 Upload this folder to GitHub Pages"
    echo "🔗 Your site will be available at: https://agmohini.github.io/portfolio/"
else
    echo "❌ Build failed!"
    exit 1
fi

echo "📋 Next steps:"
echo "1. Commit and push all files to GitHub"
echo "2. Enable GitHub Pages in repository settings"
echo "3. Your portfolio will be live at the URL above"