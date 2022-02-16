const { spawn } = require("child_process");
const startServer = ("cd", ["server", "&&", "node", "server.js"]);
const startReact = ("cd", ["client", "&&", "yarn", "start"]);
