import React, { useEffect, useState } from "react";
import { axiosInstance } from "../config";



const Quote = ({code}) => {

    const [quote, setQuote] = useState([]);
  
    useEffect(() => {
      const fetchQuote = async () => {
        const res = await axiosInstance.get(`/quote/${code}`);
        setQuote(res.data);
        console.log(res)
      };
       fetchQuote();
      
    }, [code]);

//  console.log(code)


 // JavaScript program to get the current date. 
let months = ['jan','feb','mar','apr','may','jun','jul', 'aug', 'sep', 'oct', 'now', 'dec'];
let now = new Date();
let day = now.getDate();
let month = months[now.getMonth()];
let year = now.getFullYear();
// console.log(month)
// console.log(`${month}/${day}/${year}`)


// pc - price now
// d - change
// dp - change in %

  return (
    <div className="flex flex-col">
        <span className="text-3xl font-bold">${quote.pc}</span>
        <div className="flex items-end mt-2">
            <span className={`text-lg font-medium ${quote.d >= 0 ? 'text-[#35a77c]' : 'text-[#AA4A44]'}`}>${quote.d} {`(${quote.dp?.toFixed(2)})`}%</span>
            <span className=" font-medium text-[#282828] ml-2">{day} {month}</span>
        </div>
    </div>
  )
}

export default Quote