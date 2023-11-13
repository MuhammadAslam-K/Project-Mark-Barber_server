module.exports = {
  apps: [
    {
      name: 'your-app',
      script: 'dist/adapters/index.js',
      interpreter: 'ts-node',
      env: {
        NODE_ENV: 'production',
        PORT: 8000,
        FRONT_END: "https://markbarber.in/",
        MONGO_URL: "mongodb+srv://markbarbercoin:markbarber@cluster0.cmxse7y.mongodb.net/markbarber?retryWrites=true&w=majority",
        ADMIN_EMAIL: "markbarber.co.in@gmail.com",
        ADMIN_PASSWORD: "Markbarber1998",
        SECRET_KEY: "JkChTjrw8N4z2D83h3geiNM7qfRtcZRU0isSgNgq",
      },
      exec_mode: 'fork',
      instances: 1
    },
  ],
};
