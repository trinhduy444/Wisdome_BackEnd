const app = require("./app");

const port = process.env.PORT || 5000;
const server = app.listen(port, () => {
  console.log('\x1b[32m%s\x1b[0m',`App Delivery listening on port ${port}`);
});

// When we click ctrl+C
process.on("SIGINT", () => {
  server.close(() => console.log("Exit Server Express"));
});
