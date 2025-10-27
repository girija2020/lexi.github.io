FROM node:lts

# Use a working directory (avoid root)
WORKDIR /usr/src/app

# Install deps first for layer caching
COPY package*.json ./
RUN npm ci

# Install small runtime deps and dotenvx CLI
RUN apt-get update && apt-get install -y --no-install-recommends \
    curl ca-certificates \
  && rm -rf /var/lib/apt/lists/*

# Install dotenvx CLI (this installs the CLI globally)
RUN curl -sfS https://dotenvx.sh/install.sh | sh

# Copy app source (do NOT copy .env.keys or plaintext .env)
COPY . .

# Expose port
EXPOSE 5000

# Run via dotenvx at runtime so the DOTENV_PRIVATE_KEY provided at runtime is used to decrypt env
# If you didn't install dotenvx globally, use: npx @dotenvx/dotenvx run -- node server.js
CMD ["sh", "-c", "dotenvx run -- node server.js"]
