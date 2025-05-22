module.exports = {
    apps: [
      {
        name: 'hello-app',
        script: 'index.js',
        instances: 'max',         // All available CPU cores
        exec_mode: 'cluster',     // Enables load balancing
        watch: false,
        env: {
          NODE_ENV: 'production',
        },
      },
    ],
  };
  