import ReorderIcon from '@mui/icons-material/Reorder';
import SortIcon from '@mui/icons-material/Sort';
import logo from './logo.jpg'
interface props {
    setShowNavbar: Function;
}

const Navbar = ({ setShowNavbar }: props) => {
    return (
        <div className="h-[5vh] items-center grid grid-cols-[10%,80%,10%] w-full bg-white font-poppins text-[#515153]">
            <div className='ml-3 flex items-center'>
                <div className='flex cursor-pointer items-center' onClick={() => { setShowNavbar() }}>
                   <img src='/list.jpg' width='30vh'/>
                </div>
                <div className='ml-1 cursor-pointer flex h-full items-center justify-center'>
                    <img src={'/logo.jpg'} className="h-[5vh]" alt='logo'/>
                    <p className='h-full ml-1 font-bold'> GooDo </p>
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