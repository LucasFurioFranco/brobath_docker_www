const express    = require('express')

const app = express()
const port = 5002;
const sys_name = "www v0"


//################################################################


//MIddlewares

//For "understanding" URL query parameters less painfully
app.use(express.urlencoded({extended: true}))

//For "understanding" JSON payloads less painfully
app.use(express.json())

//We are using ejs to create page templates and render them
app.set("view engine", "ejs")


//################################################################



//################################################################

//Routes

app.use("*", (req, res) => {
  res.status(200).render("Olá mundo do WWW rodando a roda num container docker!")
})


//################################################################

//Sets the port to be listened
app.listen(port, () => {
  console.log(`${sys_name} listening at http://localhost:${port}`)
});
