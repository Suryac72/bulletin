#!/bin/bash

# Echo message before executing the commands
echo "Installing npm dependencies with legacy peer dependencies support..."

# Execute the npm install command with legacy peer dependencies flag
npm i --legacy-peer-deps

# Execute Prisma schema generation
echo "Generating Prisma schema..."
npx prisma generate

# Run tests
echo "Running tests..."
npm run test


# Start the application
echo "Starting the application..."
npm run dev

# Check if the npm install command was successful
if [ $? -eq 0 ]; then
  # Echo message if the command was successful
  echo "npm dependencies installed successfully and application started!"
else
  # Echo error message if the command failed
  echo "Error: Failed to install npm dependencies or start the application."
