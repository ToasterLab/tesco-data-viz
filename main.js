import packageJson from './package.json'
import { program } from 'commander'
import analyseFile from './analyseFile'

program.version(packageJson.version)

program
  .arguments(`[file]`)
  .description(`analyse your Tesco data`, {
    file: `the JSON file you downloaded (e.g. ./Tesco-Customer-Data.json)`
  })
  .action(analyseFile)

program.parse(process.argv)