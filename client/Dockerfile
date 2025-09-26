# Use an official lightweight Node.js image
FROM node:20-alpine

# Set the working directory inside the container
WORKDIR /app

# Copy package.json and lock files first to leverage Docker's cache
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of your application code into the container
COPY . .

# Tell Docker that the container will listen on port 3000
EXPOSE 3000

# The command to run when the container starts
CMD ["npm", "run", "dev"]