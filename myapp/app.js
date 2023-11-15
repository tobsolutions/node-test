const express = require('express');
const axios = require('axios');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('Hello World! 2')
})

app.get('/test', (req, res) => {
  axios.get('https://api.billbee.io/api/v1/orders',{
      headers: {
          'MyCustomHeader1': '1',
          'MyCustomHeader2': '2'
      }
    })
    .then((response) => {
      const { data } = response;
      res.json(data);
    })
    .catch((error) => {
      console.log(error);
    });
  }
)


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
