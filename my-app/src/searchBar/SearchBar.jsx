import './searchBar.css'
import { useNavigate } from 'react-router-dom'
import React, { useEffect, useState } from "react";
import { axiosInstance } from '../config';


const SearchBar = () => {

    const navigate = useNavigate()
    const [q, setQ] = useState("")
    const [isActive, setIsActive] = useState(false)
    const [results, setResults] = useState([]);
  
    useEffect(() => {
      const fetchSearch = async () => {
        const res = await axiosInstance.get(`/search/${q}`);
        setResults(res.data.result);
      };
      if (q.length === 1 || q.length > 2) fetchSearch();
    }, [q]);

//  console.log(results)

const errorHandling = {
    required: true,
    errorMessage: "Input should be only letters icluding space and up to 35 characters.",
     pattern: "^[a-zA-Z ]*$"
}


// function lettersAndSpaceCheck(name)
// {
//    var regEx = /^[a-zA-Z ]*$/;
//    if(name.match(regEx))
//      {
//       return true;
//      }
//    else
//      {
//      console.log("Please enter letters and space only.")
//      return false;
//      }
// }

// lettersAndSpaceCheck(q)

const {errorMessage} = errorHandling
  


  return (
    <div className='w-full relative'>
    <form className=''>   
    {/* <span className='errorSpan'>{errorMessage}</span> */}
        <label for="default-search" class="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-gray-300">Search</label>
        <div class="relative flex flex-col-reverse">
            {/* <div class="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
                <svg aria-hidden="true" class="w-5 h-5 text-gray-500 dark:text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
            </div> */}
            <input {...errorHandling} focused={isActive.toString()} type="search" id="default-search" class="block  p-2 pl-10 w-full text-sm text-gray-900 bg-[#EFEFEF] rounded-lg  focus:ring-[#27D17F] focus:border-[#27D17F]" onFocus={()=> setIsActive(true)} onBlur={()=>setTimeout( () => setIsActive(false), 300 )}   placeholder="Search stock.." autocomplete="off" name="search" onChange={(e) => setQ(e.target.value)}  />
            {/* <button type="submit" onClick={()=>navigate(`/searchPage/${q}`)} class="text-white absolute right-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-1 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Search</button> */}
            <span className='errorSpan'>{errorMessage}</span>
        </div>
        {/* <span className='errorSpan'>{errorMessage}</span> */}
    </form>

{isActive && q.length >= 1 && (
      <ul className="absolute bg-[#fff] z-50  p-4  w-full text-sm text-gray-900  rounded-lg border border-gray-300 focus:ring-[#27D17F] focus:border-[#27D17F] mt-1.5 ">
      {results.map(result=>(
        // <li  style={{cursor: "pointer"}}><button onClick={()=>navigate(`/course/${video._id}`)}>{video.name}</button></li>
        <li className='bg-[#EFEFEF] mb-1 py-2' onClick={()=>navigate(`/stock/${result.symbol}`)}  style={{cursor: "pointer"}}>
          {/* <SearchImage code={video.symbol}/>  */}
          <h2 className='mx-2'>{result.description} - {result.symbol}</h2>
        </li>    
      ))}
          </ul>
    )}   
    </div>
  )
}

export default SearchBar
// onChange={(e) => setQ(e.target.value)}