# 1. Use a lightweight base image
FROM node:18-alpine AS base

# 2. Set working directory
WORKDIR /app

# 3. Install dependencies separately to cache them
COPY package*.json ./
RUN npm install --production

# 4. Copy source code
COPY . .

# 5. Set environment variables
ENV NODE_ENV=production

# 6. Expose the port your app runs on (optional for local dev)
EXPOSE 3000



# Add this near the end
RUN npm install pm2 -g

# Use PM2 to run the app
CMD ["pm2-runtime", "ecosystem.config.js"]
