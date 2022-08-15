// import { useLocation } from "react-router-dom";
// import React, { useState, useEffect, useMemo } from "react";
// import axios from "axios";
// import { useNavigate } from 'react-router-dom'
// import { Routes, Route, useParams } from 'react-router-dom';
// import { axiosInstance } from "../config";

// const SearchPage = () => {


//   const query = useLocation().search;
//   const navigate = useNavigate()
//   let { q } = useParams();

//   console.log(q)


//   const [stocks, setStocks] = useState([]);
//   // const query = useLocation().search;

//   useEffect(() => {
//     const fetchVideos = async () => {
//       const res = await axiosInstance.get(`https://finnhub.io/api/v1/search?q=${q}&token=cbofoi2ad3i6ndrm853g`);
//       setStocks(res.data.result);
//     };
//     if (q.length === 1 || q.length > 2) fetchVideos();
//     // if (q.length === 0) fetchVideos();
//   }, [q]);


//   return (
//     <>
//        <ul className="fastSearchResults">
//       {stocks.map(video=>(
        
//         // <li  style={{cursor: "pointer"}}><button onClick={()=>navigate(`/course/${video._id}`)}>{video.name}</button></li>
//         <li onClick={()=>navigate(`/stock/${video.symbol}`)}  style={{cursor: "pointer"}}><h2>{video.description} - {video.symbol}</h2></li>
        
        
        
//       ))}
//           </ul>
//     </>
//   )
// }

// export default SearchPage