import StarBorderIcon from '@mui/icons-material/StarBorder';
import StarIcon from '@mui/icons-material/Star';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { useState } from 'react';
const Task = () => {
    const [filled, setFilled] = useState<boolean>(false)
    return (
        <div>
            <div className='p-3 text-3xl font-bold'>
                Activity list
            </div>
            <div className="grid grid-cols-[2%,2%,91%,5%] border-2 rounded-lg p-3 ">
                <div className='flex items-center ml-1'><input type="checkbox" /></div>
                <div className='flex item-center justify-center mt-[0.05rem]' onClick={() => { setFilled(preFill => !preFill) }}>
                    {filled ? <StarIcon style={{ fill: '#F9BB07' }} /> : <StarBorderIcon />}
                </div>
                <div className="ml-3 flex items-center">Name</div>
                <div className="text-end"><ArrowForwardIosIcon /></div>
            </div>
        </div>
    )
}

export default Task