const Sequelize = require('sequelize')
const db = require('./db')

const Book = db.define('book', {
name: Sequelize.STRING,
})

module.exports = Book
