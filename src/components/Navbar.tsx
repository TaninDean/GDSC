import ReorderIcon from '@mui/icons-material/Reorder';
import SortIcon from '@mui/icons-material/Sort';
import SearchIcon from '@mui/icons-material/Search';
// todo create navbar components 

const Navbar = () => {
    // todo search bar

    //todo icon

    //todo side nav bar 

    //todo ??
    return (
        <div className="h-[5vh] items-center grid grid-cols-[10%,80%,10%]">
            <div className='ml-3 flex items-center'>
                <div>
                    <ReorderIcon />
                </div>
                <div className='ml-1'>
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