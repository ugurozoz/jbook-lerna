import path from 'path';
import { Command } from 'commander';
import { serve } from 'local-api';

export const serveCommand = new Command()
  .command('serve [filename]')
  .description('Open a file for editing')
  .option('-p --port <number>', 'port to run server on', '4005')
  .action((filename = 'notebook.js', options: { port: string }) => {
    // we can take arguments here

    const dir = path.join(process.cwd(), path.dirname(filename));
    serve(+options.port, path.basename(filename), dir);
  });

// <> angle brackets point at required values, [] square brackets point at optional values
