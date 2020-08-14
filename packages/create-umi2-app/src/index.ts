import { yargs } from '@lzdata/utils';
import AppGenerator from './AppGenerator';
debugger
export default async ({
  cwd,
  args,
}: {
  cwd: string;
  args: yargs.Arguments;
}) => {
  const generator = new AppGenerator({
    cwd,
    args,
  });
  await generator.run();
};