const express = require("express")
const router = express.Router()

//importing node-fetch for fetching data from public-api
const fetch = require("node-fetch")

router.get("/:id", async (req, res) => {
  const userId = req.params.id

  //url of public apis
  const TodosURL = "https://jsonplaceholder.typicode.com/todos"
  const DetailsURL = `https://jsonplaceholder.typicode.com/users/${userId}`

  const options = {
    method: "GET",
  }

  const userDetails = await fetch(DetailsURL, options)
    .then((res) => res.json())
    .catch((err) => console.log(err))

  const response = await fetch(TodosURL, options)
    .then((res) => res.json())
    .catch((err) => console.log(err))

  let todos = []
  for (var todo of response) {
    if (todo.userId == userId) {
      todos.push(todo)
    }
  }

  const userData = {
    ...userDetails,
    todos: todos,
  }

  res.status(200).send(userData)
})

module.exports = router
