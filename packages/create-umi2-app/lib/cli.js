"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const utils_1 = require("@lzdata/utils");
const fs_1 = require("fs");
const path_1 = require("path");
const args = utils_1.yParser(process.argv.slice(2), {
    alias: {
        version: ['v'],
        help: ['h'],
    },
    boolean: ['version'],
});
if (args.version && !args._[0]) {
    args._[0] = 'version';
    const local = fs_1.existsSync(path_1.join(__dirname, '../.local'))
        ? utils_1.chalk.cyan('@local')
        : '';
    const { name, version } = require('../package.json');
    console.log(`${name}@${version}${local}`);
}
else {
    require('./')
        .default({
        cwd: process.cwd(),
        args,
    })
        .catch((err) => {
        console.error(`Create failed, ${err.message}`);
        console.error(err);
    });
}
