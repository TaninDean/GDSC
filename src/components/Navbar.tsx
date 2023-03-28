import ReorderIcon from '@mui/icons-material/Reorder';
import SortIcon from '@mui/icons-material/Sort';
import SearchIcon from '@mui/icons-material/Search';

interface props {
    setShowNavbar: Function;
}

const Navbar = ({setShowNavbar}: props) => {
    return (
        <div className="h-[5vh] items-center grid grid-cols-[10%,80%,10%] w-full bg-white">
            <div className='ml-3 flex items-center'>
                <div className='cursor-pointer' onClick={()=>{setShowNavbar()}}>
                    <ReorderIcon />
                </div>
                <div className='ml-1 cursor-pointer'>
                    GooDo
                </div>
            </div>
            <div className='w-full h-[80%] rounded flex gap-2 bg-[#F8F8F8] items-center p-2'>
                <div>
                    <SearchIcon />
                </div>
                <div className='w-full '>
                    <input className='w-full outline-none bg-[#F8F8F8]' type='text' placeholder='Searh Todo' />
                </div>
            </div>
            <div className="text-right mr-3">
                <SortIcon />
            </div>
        </div>
    )
}

export default Navbar