#!/usr/bin/env node   //让终端知道用node执行

const program = require('commander'); //处理终端输入的库
const package = require('./package.json'); 


program
  .version(package.version, '-v,--version')
  .option('-C, --chdir <path>', '改变工作目录')
  .option('-c, --config <path>', '设置配置文件')

program
  .command('create <name>')
  .description('创建一个新项目')
  .action(name=>{
      console.log(`初始化${name}成功`)
  })

program
  .command('start <name>')
  .description('启动创建的项目')
  .action(name=>{
      console.log(`启动${name}成功`)
  })

program.parse(process.argv);