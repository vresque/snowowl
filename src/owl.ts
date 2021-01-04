#!/usr/bin/env node
const commander = require("commander");
const program = new commander.Command();

function main(argv: string[]) {
  program
    // Options
    .option("-d, --debug", "Use debugging mode (not recommended)")
    .option("-f, --force", "Force the operation")
    .option("-v, --verbose", "Get a verbose output (More warnings!)")
    .option("-nc, --nocolor", "Display the owl messages without colors")
    .option(
      "-rgcb, --redGreenColorBlindness",
      "Use the Red-Green-Color-Blindness mode to experience the full owl experience while experiencing color blindness"
    )
    .option(
      "-bycb, --blueYellowColorBlindness",
      "Use the Blue-Yellow-Color-Blindness mode to experience the full owl experience while experiencing color blindness"
    )
    .option(
      "-ccb, --completeColorBlindness",
      "Use the complete-Color-Blindness mode to experience the full owl experience while experiencing color blindness"
    )

    .option("-");

  program
    .command("init")
    .description("Initialize a folder with a template")
    .action(() => {
      console.log("build");
    });

  // THE MAIN CALL
  program.parse(argv);
  if (program.debug) console.log(program.opts());
  console.log("Things: ");
  if (program.force) console.log("Hi");
}

main(process.argv.slice(2));
