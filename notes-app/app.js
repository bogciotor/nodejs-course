const validator = require('validator')
const { describe, demandOption } = require('yargs')
const yargs = require('yargs')
const getNotes = require('./notes')

// const chalk = require('chalk')
// console.log(getNotes())
// console.log(
//   validator.isURL(
//     'https:/ww.udemy.com/course/the-complete-nodejs-developer-course-2/learn/lecture/13728848#questions'
//   )
// )
// console.log(chalk.green.bold('Success!'))
// console.log(chalk.green.inverse.green('Success!'))
// const greenMsg = chalk.green.inverse.green('Success!')
// console.log(greenMsg)
// console.log(process.argv[2])

// const comand = process.argv[2]
// console.log(process.argv)
// // if (comand === 'add') {
// //   console.log('Adding note!')
// // } else if (comand === 'remove') {
// //   console.log('Removing note')
// }
// console.log(process.argv)

// Customize yargs version

yargs.version('1.1.0')

// Create add comand
yargs.command({
  command: 'add',
  builder: {
    title: {
      describe: 'Note title',
      demandOption: true,
      type: 'string',
    },
    body: {
      describe: 'Note body',
      demandOption: true,
      type: 'string',
    },
  },
  describe: 'add a new note',
  handler: function (argv) {
    console.log('Title: ' + argv.title)
    console.log('Body: ' + argv.body)
  },
})
// create remove command

yargs.command({
  command: 'remove',
  describe: 'Remove a note',
  handler: function () {
    console.log('remove a note')
  },
})

// Create Read command
yargs.command({
  command: 'Read',
  describe: 'Read the list',
  handler: function () {
    console.log('Read list')
  },
})

// Create list command

yargs.command({
  command: 'List',
  describe: 'List the items',
  handler: function () {
    console.log('list the items')
  },
})
// add, rempve, read, list
yargs.parse()
// console.log(yargs.argv)
