import React, { useState, useEffect } from "react";
import queryString from "query-string";
import {
  LineChart,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  Line,
  ResponsiveContainer,
} from "recharts";
import './stockPage.css';

import 'react-date-range/dist/styles.css'; // main css file
import 'react-date-range/dist/theme/default.css'; // theme css file
import { DateRange } from 'react-date-range';
import NavBar from './../navBar/NavBar'
import CompanyInfo from "./../companyInfo/CompanyInfo";

import {useParams } from 'react-router-dom';
import Details from "../details/Details";
import { axiosInstance } from "../config";

// testing
// const STOCK_SYMBOLS = ["TSLA", "MSFT", "DIS", "SBUX", "SNAP"]
const INTERVAL_OPTIONS = [30, 60, 90, 120]
const RESOLUTION = "D"
const COLORS = ["blue", "green", "yellow", "coral"]



function getUnixTime(date) {
  return date.getTime() / 1000 | 0;
}

function transformData(data) {
  return data.c.map((item, index) => ({
    close: Number(item).toFixed(2),
    open: Number(data.o[index]).toFixed(2),
    timestamp: new Date(data.t[index] * 1000).toLocaleDateString()
  }))
}




const StockPage = () => {
    const [data, setData] = useState(null);
    const [interval, setInterval] = useState(INTERVAL_OPTIONS[0]);
    let { symbol } = useParams();
  
  
    const [date, setDate] = useState([
      {
        startDate: new Date(),
        endDate: new Date(),
        key: 'selection'
      }
    ]);
  
    const {startDate, endDate} = date
    const to =  getUnixTime(new Date(date[0].endDate))
    const from =   getUnixTime(new Date(date[0].startDate))
  
 


    useEffect(() => {


      const fetchVideos = async () => {
        const res = await axiosInstance.get(`/candles/${symbol}/${RESOLUTION}/${from}/${to}`);
        setData(transformData(res.data))
      };
       fetchVideos();
    }, [symbol, RESOLUTION, from, to]);

  
    
  

  const [openDate, setOpenDate] = useState(false)
  
    return (
     <div className="fixedplotis">
        <NavBar/>
        <CompanyInfo code={symbol}/>
      <div className=" ">
        
{/* header Date Range */}
        <div className="  max-w-full my-5 mx-8 relative">
            <span className="bg-[#1e1e1e] rounded cursor-pointer  mr-8 text-white px-2 h-max py-1" onClick={()=> setOpenDate(!openDate)}><span>{openDate ? <span className="border-[#27D17F] border-b-2">Close</span> : <span>Date Range</span>}</span></span>

          {openDate && <DateRange
            editableDateInputs={true}
            onChange={item => setDate([item.selection])}
            moveRangeOnFirstSelection={false}
            ranges={date}
            calendarWidth={300}
            rangeColors={['#00804F']}
            className='absolute z-50  left-0 top-12 shadow-lg max-w-full bg-black'
          />}
        </div>
        
        {/* Stock Chart */}
        <div className="mx-8  h-36 md:h-96 bg-[#fff] shadow-sm rounded-lg" >
          <ResponsiveContainer >
          <LineChart  data={data}
            margin={{ top: 25, right: 15, left: 15, bottom: 25 }}>
            <CartesianGrid strokeDasharray="2 5 "  vertical={false}/>
            <XAxis dataKey="timestamp" tick={{stroke: '#A9A9A9', strokeWidth: 0.1,}} dy={10} axisLine={false}/>
            <YAxis domain={['dataMin', 'dataMax + 0.5'] } allowDecimals={false}
                orientation='right'        allowDataOverflow={true} tickLine={false} axisLine={false}/>
            <Tooltip labelStyle={{border: "none"}} contentStyle={{backgroundColor: "transparent", border: "none"}} wrapperStyle={{backgroundColor: "transparent"}} itemStyle={{backgroundColor: "green", borderRadius: "5px"}}  offset={0} />
          
            <Line type="linear" dataKey="open" strokeWidth={2} stroke="#27D17F"  dot={false}/>
          </LineChart>
            </ResponsiveContainer>
        </div>


        <div className="">
          <h1 className="mx-8 mt-10">About {symbol}</h1>         
          <Details code={symbol}/>
        </div>

      </div>
     </div>
    );
}

export default StockPage

