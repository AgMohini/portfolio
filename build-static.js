#!/usr/bin/env node

// Simple static build script for portfolio deployment
import { execSync } from 'child_process';
import { existsSync, mkdirSync, copyFileSync, writeFileSync } from 'fs';
import path from 'path';

console.log('🚀 Building static portfolio for deployment...');

try {
  // Build the frontend
  console.log('📦 Building frontend...');
  execSync('npm run build', { stdio: 'inherit' });
  
  // Create deployment package info
  const deploymentInfo = {
    name: "Mohini Agarwal - Portfolio",
    description: "Professional portfolio for PhD in Operations Research transitioning to corporate data science",
    version: "1.0.0",
    built: new Date().toISOString(),
    deploymentOptions: [
      "Vercel: Connect GitHub repo and deploy",
      "Netlify: Drag dist/public folder to netlify.com",
      "Railway: Full-stack deployment with backend",
      "GitHub Pages: Push to repo and enable Pages"
    ]
  };
  
  // Write deployment info
  writeFileSync(
    path.join('dist', 'deployment-info.json'), 
    JSON.stringify(deploymentInfo, null, 2)
  );
  
  console.log('✅ Build complete!');
  console.log('📁 Static files ready in: dist/public/');
  console.log('🌐 Deploy the dist/public folder to any static hosting service');
  console.log('📋 Check static-deploy.md for detailed deployment instructions');
  
} catch (error) {
  console.error('❌ Build failed:', error.message);
  process.exit(1);
}