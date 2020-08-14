import { Generator } from '@lzdata/utils';
import { join } from 'path';

export default class AppGenerator extends Generator {
  async writing() {
    this.copyDirectory({
      context: {
        version: require('../package').version,
        conventionRoutes: this.args.conventionRoutes,
      },
      path: join(__dirname, '../templates'),
      target: this.cwd,
    });
  }
}