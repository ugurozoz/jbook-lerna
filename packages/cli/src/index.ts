import { program } from "commander";
import { serveCommand } from "./commands/serve";

program.addCommand(serveCommand);
//.addCommand(loginCommand)

program.parse(process.argv);
