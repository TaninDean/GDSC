import ReorderIcon from '@mui/icons-material/Reorder';
import SortIcon from '@mui/icons-material/Sort';

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
            <div></div>
            <div className="text-right mr-3">
                <SortIcon />
            </div>
        </div>
    )
}

export default Navbar