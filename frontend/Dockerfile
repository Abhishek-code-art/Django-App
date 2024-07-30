# Use the official Node.js image
FROM node:14

# Set the working directory
WORKDIR /app

# Install dependencies
COPY package*.json /app/
RUN npm install

# Copy the React project
COPY . /app/

# Build the React application
RUN npm run build

# Expose port 3000 and serve the app
EXPOSE 3000
CMD ["npx", "serve", "-s", "build"]
