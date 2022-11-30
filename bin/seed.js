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
    name: 'Creative Commons Volume 2',
    authorId: king.id,
  })
  await Book.create({
    name: 'Zenith',
    authorId: king.id,

  })
  await Book.create({
    name: 'No Nations (Instrumentals)',
    authorId: jk.id,

  })

  db.close()
  console.log(`

    Seeding successful!
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
