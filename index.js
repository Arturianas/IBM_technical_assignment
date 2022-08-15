const PORT = 5000
const port = 3000

const express = require('express')
const cors = require('cors')
const app = express()
app.use(cors())
app.use(express.json())

require('dotenv').config()
require('./models/console-log-interceptor.js')('http_server_1');


// candles
app.get('/candles/:symbol/:resolution/:from/:to', (req, res) => {
  try {
     // res.send('Hello, Arturas!')
     const finnhub = require('finnhub');
     const symbol = req.params.symbol;
     const resolution = req.params.resolution;
     const from = req.params.from;
     const to = req.params.to;
     const api_key = finnhub.ApiClient.instance.authentications['api_key'];
     api_key.apiKey = process.env.API_KEY
     const finnhubClient = new finnhub.DefaultApi()
     
     finnhubClient.stockCandles(symbol, resolution, from, to, (error, data, response) => {
         res.send(data)
       console.log(data)
     });
  } catch (error) {
    throw error;
  }  
  })



// company
  app.get('/company/:symbol', (req, res) => {
    try {
        // res.send('Hello, Arturas!')
        const finnhub = require('finnhub');
        const symbol = req.params.symbol
        const api_key = finnhub.ApiClient.instance.authentications['api_key'];
        api_key.apiKey = process.env.API_KEY
        const finnhubClient = new finnhub.DefaultApi()  
        finnhubClient.companyProfile2({'symbol': symbol}, (error, data, response) => {
            res.send(data)
          console.log(data.name)
        //   console.log(symbol)
        });
     } catch (error) {
       throw error;
     }
    // res.send('Hello, Arturas!')
   
  })





  // Quote
  app.get('/quote/:symbol', (req, res) => {
    try {
      const finnhub = require('finnhub');
      const symbol = req.params.symbol
      const api_key = finnhub.ApiClient.instance.authentications['api_key'];
      api_key.apiKey = process.env.API_KEY
      const finnhubClient = new finnhub.DefaultApi()    
      finnhubClient.quote(symbol, (error, data, response) => {
        res.send(data)
        // console.log(data)
      });
     } catch (error) {
       throw error;
     }
    // res.send('Hello, Arturas!')
   
  })







  // Search
  app.get('/search/:symbol', (req, res) => {
    try {
      const finnhub = require('finnhub');
      const symbol = req.params.symbol
      const api_key = finnhub.ApiClient.instance.authentications['api_key'];
      api_key.apiKey = process.env.API_KEY
      const finnhubClient = new finnhub.DefaultApi()    
      finnhubClient.symbolSearch(symbol, (error, data, response) => {
        res.send(data)
        // console.log(data)
      });
     } catch (error) {
       throw error;
     }
    // res.send('Hello, Arturas!')
   
  })


  app.use(express.static(path.join(__dirname, "/my-app/build")));

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '/my-app/build', 'index.html'));
});

   
  app.listen(process.env.PORT || PORT, () => {
    console.log(`Stock app is running`)
  })
  