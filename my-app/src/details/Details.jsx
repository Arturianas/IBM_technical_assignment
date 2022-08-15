import React, { useEffect, useState } from "react";
import {axiosInstance} from '../config.js'


const Details = ({code}) => {

  const [company, setCompany] = useState([]);

  useEffect(() => {
    const fetchCompany = async () => {
      const res = await axiosInstance.get(`/company/${code}`);
      setCompany(res.data);
    };
     fetchCompany();
  }, [code]);

// console.log(company)


  return (
    <div className="bg-[#fff] shadow-md rounded-lg  mx-8 mt-4  px-2 h-max py-1 flex flex-col mb-14">
        <span className=''>Country: {company.country}</span>
        <span className=''>Currency: {company.currency}</span>
        <span className=''>Web url: <a href={company.weburl} rel="noreferrer" target="_blank">{company.weburl}</a></span>
    </div>
  )
}

export default Details