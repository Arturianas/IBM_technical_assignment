// const finnhub = require('finnhub');
// //  import finnhub from 'finnhub'
//  require('dotenv').config()
// // import dotenv from "dotenv"


// // @desc GET Stock Candles
// //  @route GET /candles/v2/email/
// // @access Public
//    const getStockCandles = async (req,res,next)=>{
//     try {
//         // res.send('Hello, Arturas!')
//         // const finnhub = require('finnhub');
   
//         const api_key = finnhub.ApiClient.instance.authentications['api_key'];
//         api_key.apiKey = process.env.API_KEY
//         const finnhubClient = new finnhub.DefaultApi()
        
//         finnhubClient.stockCandles("AAPL", "D", 1590988249, 1591852249, (error, data, response) => {
//             res.send(data)
//           console.log(data)
//         });
//      } catch (error) {
//     //    throw error;
//     console.log(error)
//      }
//   }



//   module.exports = getStockCandles;