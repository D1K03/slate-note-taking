# Use an official lightweight Node.js image
FROM node:20-alpine3.22

# Update system packages to get the latest security patches
RUN apk update && apk upgrade

# Set the working directory inside the container
WORKDIR /app

# Copy package.json and lock files
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of your application code
COPY . .

# Generate the Prisma client based on your schema
RUN npx prisma generate

# Tell Docker that the container will listen on port 5000
EXPOSE 5000

# The command to run when the container starts
CMD ["npm", "run", "dev"]