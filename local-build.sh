#!/bin/bash

# Ensure script stops on first error
set -e

rm -rf ./temp/db

mkdir -p ./temp/db/dist

# Step 1: Copy db/dist to a temporary location within your project
cp -r ../db/dist ./temp/db/

# Step 2: Build the Docker image
docker compose up --build

