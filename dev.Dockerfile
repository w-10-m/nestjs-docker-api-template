# Step 1: Use an official Node.js runtime as a parent image
FROM node:20-alpine

# Step 2: Set the working directory in the container
WORKDIR /app

# Step 3: Copy package.json and package-lock.json
COPY package*.json ./

# Step 4: Install project dependencies
RUN npm install

# Step 5: Bundle app source inside Docker image
COPY . .

# Assuming db/dist has been copied to a directory within the Docker context
# Adjust the COPY command to match the actual location within your project structure
# COPY ./temp/db/dist/ /app/node_modules/db/

# Step 7: Build your app
RUN npm run build



# Step 8: Define the network ports that this container will listen on at runtime
EXPOSE 3000

# Step 9: Define the command to run your app
CMD ["npm", "run", "start:dev"]