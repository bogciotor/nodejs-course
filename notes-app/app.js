const validator = require('validator')
const getNotes = require('./notes')
const chalk = require('chalk')
console.log(getNotes())
console.log(
  validator.isURL(
    'https:/ww.udemy.com/course/the-complete-nodejs-developer-course-2/learn/lecture/13728848#questions'
  )
)
console.log(chalk.green.bold('Success!'))
