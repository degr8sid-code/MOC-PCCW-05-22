# Use an official Node.js runtime as a parent image
FROM node:14-alpine

# Set the working directory to /app
WORKDIR /app

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install the dependencies
RUN npm install --only=production

# Copy the rest of the application code to the working directory
COPY . .

# Expose port 1337 for the API
EXPOSE 3001

# Start the API
CMD [ "npm", "start" ]
