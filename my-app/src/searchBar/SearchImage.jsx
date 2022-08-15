// import axios from "axios";
// import React, { useEffect, useState } from "react";

// const SearchImage = ({code}) => {

//     const [company, setCompany] = useState([]);
//     // const query = useLocation().search;
  
//     useEffect(() => {
//       const fetchVideos = async () => {
//         const res = await axios.get(`http://localhost:5000/company/${code}`);
//         setCompany(res.data);
//       };
//        fetchVideos();
//       // if (q.length === 0) fetchVideos();
//     }, [code]);

//  console.log(company)


//   return (
//     <div className='bg-[#fff] rounded-full h-14 w-14 flex justify-center items-center' >
//                 <img alt='logo' src={company.logo} class=" object-cover rounded-full h-11 w-11 "/>
//           </div> 
//   )
// }

// export default SearchImage