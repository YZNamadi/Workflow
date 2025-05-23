



# HelloDocker

A simple Node.js app containerized with Docker and deployed on Render to practice backend deployment and DevOps fundamentals.

## Features

* Dockerized Node.js backend
* Uses Mocha for testing (with lessons learned on permission fixes!)
* Deployment-ready with PM2 process management
* Automated CI/CD pipeline setup (GitHub Actions)
* Basic Terraform infrastructure as code experience

## Getting Started

### Prerequisites

* Node.js and npm installed
* Docker and Docker Compose installed

### Running Locally with Docker

1. Clone the repo
2. Build the Docker image

   ```bash
   docker build -t hellodocker .  
   ```
3. Run the container

   ```bash
   docker run -p 3000:3000 hellodocker  
   ```
4. Open `http://localhost:3000` in your browser

### Running Tests

```bash
npm test
```

## Deployment

This app is deployed on [Render](https://render.com) using Docker.

## Notes

* Faced a common Mocha permission error during testing, which was resolved by adjusting file permissions inside the container.
* Future plans include automating AWS deployments with Terraform.


