const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World! 2')
})

app.get('/test', (req, res) => {
  axios.get('https://jsonplaceholder.typicode.com/todos/1')
    .then((response) => {
      return response;
    })
    .catch((error) => {
      console.log(error);
    });
  }
)


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
