import React, { useEffect, useState } from "react";
import Quote from './Quote';
import {axiosInstance} from '../config.js'



const CompanyInfo = ({code}) => {

    const [company, setCompany] = useState([]);

    useEffect(() => {
      const fetchCompany = async () => {
        const res = await axiosInstance.get(`/company/${code}`);
        setCompany(res.data);
      };
       fetchCompany();
      
    }, [code]);

//  console.log(company)


  return (
    <div className=' mb-14 mt-8'>
        <div className=' mx-8 flex flex-col md:flex-row justify-between'>
          <div className='flex items-center  '>
              <div className='bg-[#fff] rounded-full h-16 w-16 flex justify-center items-center' >
                <img alt='logo' src={company.logo} class=" object-cover rounded-full h-14 w-14 "/>
              </div>  
              <div className='flex flex-col ml-2'>
                <a href={company.weburl}><h1 className='text-2xl font-semibold'>{company.name}</h1></a>
                <h2>{code}</h2>   
              </div>      
          </div>        
          <div className='mt-8'>
            <Quote code={code}/>
          </div>          
        </div>       
    </div>
  )
}

export default CompanyInfo