const express = require("express")
const router = express.Router()

//importing node-fetch for fetching data from public-api
const fetch = require("node-fetch")

router.get("/", async (req, res) => {
  const url = "https://jsonplaceholder.typicode.com/todos"
  const options = {
    method: "GET",
  }

  const response = await fetch(url, options)
    .then((res) => res.json())
    .catch((err) => console.log(err))

  let todos = []
  for (var todo of response) {
    todos.push({
      id: todo.id,
      title: todo.title,
      completed: todo.completed,
    })
  }

  res.status(200).send(todos)
})

module.exports = router
