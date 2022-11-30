#!/usr/bin/env node

// const fs = require('fs')
const {db, Book, Author} = require('../server/db')

const seed = async () => {
  await db.sync({force: true})

  // authors
  const king = await Author.create({name: 'Steven King'})
  const jk = await Author.create({name: 'JK Rowling'})

  // books
   await Book.create({
    name: 'IT',
    authorId: king.id,
  })
  await Book.create({
    name: 'Misery',
    authorId: king.id,

  })
  await Book.create({
    name: 'HP 1',
    authorId: jk.id,

  })
  await Book.create({
    name: 'HP 2',
    authorId: jk.id,

  })

  const authors = await Author.findAll()

  const books = await Book.findAll()


  db.close()
  console.log(`

    Seeding successful!
    # of Books in DB: ${books.length}
    # of Authors in DB: ${authors.length}
    Amayoz is now ready to read!

  `)
}

seed().catch(err => {
  db.close()
  console.log(`

    Error seeding:

    ${err.message}

    ${err.stack}

  `)
})
