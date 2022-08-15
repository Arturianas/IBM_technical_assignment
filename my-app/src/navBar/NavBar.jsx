import SearchBar from '../searchBar/SearchBar'

const NavBar = () => {
  return (
    <div className=" max-w-full w-full  shadow-sm  bg-[#fff] md:py-3">
        <div className='w-full flex items-center justify-center    py-1'>
          <div className='hidden md:block md:w-1/2 md:ml-8'>
            <h1>FICUS</h1>
          </div>
          <div className='w-full md:w-1/2 ml-4 mr-16  h-full flex items-center justify-center'>
              <SearchBar/>
          </div>   
        </div>     
    </div>
    // border-2 border-green-400 border-solid
  )
}

export default NavBar