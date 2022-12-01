const router = require("express").Router();
const { Author, Book } = require("../db");

// get => '/api/authors
router.get("/", async (req, res, next) => {
  try {
    //i will get authors which is a psql request using sequelize
    const authors = await Author.findAll();
    res.json(authors);
  } catch (error) {
    next(error);
  }
});

// get => '/api/authors by id
router.get("/:id", async (req, res, next) => {
  console.log("------------");
  console.log("yo a get => api/authors/:id request was made");
  console.log("------------");
  try{
  let id = req.params.id;
  const author = await Author.findByPk(id)
  res.json(author)
  } catch(error){
    next(error)
  }
});
module.exports = router;
