#!/usr/bin/env node

const version = require("./package").version; // 版本号

/* = package import
-------------------------------------------------------------- */

const program = require("commander"); // 命令行解析

/* = task events
-------------------------------------------------------------- */
const createProgramFs = require("./lib/create-program-fs"); // 创建项目文件

/* = config
-------------------------------------------------------------- */

// 设置版本号
program.version(version, "-v, --version");

/* = deal receive command
-------------------------------------------------------------- */

program
  .command("create")
  .description("创建页面或组件")
  .action((cmd, options) => createProgramFs(cmd));

/* 后续可以根据不同的命令进行不同的处理，可以简单的理解为路由 */
// program
//     .command('build [cli]')
//     .description('执行打包构建')
//     .action((cmd, env) => callback);

/* = main entrance
-------------------------------------------------------------- */
program.parse(process.argv);
