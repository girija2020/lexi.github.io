# Use a lightweight Node.js image
FROM node:22-alpine

# Set the working directory inside the container
WORKDIR /

# Copy package files and install dependencies
COPY package.json package-lock.json ./
RUN npm install

# Copy the rest of the application source code
COPY . .

# Expose the port your backend listens on (e.g., 5000)
EXPOSE 5000
EXPOSE 3000

COPY start.sh /app/start.sh

# Make the script executable
RUN chmod +x /app/start.sh

# Use the script to start the application
CMD ["sh", "/app/start.sh"]
