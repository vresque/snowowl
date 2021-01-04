#!/usr/bin/env node
const commander = require("commander");
const program = new commander.Command();

program
  .command("init")
  .description("Initialize a folder with a template")
  .action(() => {
    console.log("build");
  });
