const chalk = require("chalk");
const app = require("./app");
const { PORT } = require("./config/config");

app.listen(PORT, () => {
  console.info(`=====================================`);
  console.info(
    chalk.bgGreen(`  🚀 App listening on the port ${PORT} http://localhost:${PORT} `)
  );
  console.info(`=====================================`);
});