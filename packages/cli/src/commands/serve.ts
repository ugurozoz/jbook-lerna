import path from 'path';
import { Command } from 'commander';
import { serve } from 'local-api';

const isProduciton = process.env.NODE_ENV === 'production'


export const serveCommand = new Command()
  .command('serve [filename]')
  .description('Open a file for editing')
  .option('-p --port <number>', 'port to run server on', '4005')
  .action(async (filename = 'notebook.js', options: { port: string }) => {
    // we can take arguments here

    try {
      const dir = path.join(process.cwd(), path.dirname(filename));
      await serve(parseInt(options.port), path.basename(filename), dir,!isProduciton);
      console.log(
        `Opened ${filename}. Navigate to http://localhost:${options.port}`
      );
    } catch (err) {
      if (err.code === 'EADDRINUSE') {
        console.error('Port is in use. Try running on a different port.');
      } else {
        console.log('Error:', err.message);
      }
      process.exit(1);
    }
  });

// <> angle brackets point at required values, [] square brackets point at optional values
