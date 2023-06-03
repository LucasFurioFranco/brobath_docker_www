const router = require("express").Router()
const model_method  = require("../model/db.js").method

router.get("*", (req, res) => {
  res.status(200).render("home.ejs", {
    shelfs: {
      slot_1: model_method.product.search_by_name("") //Returns all products in "db"
    }
  })
})

module.exports = router
