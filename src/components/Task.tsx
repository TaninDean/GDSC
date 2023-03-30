import StarBorderIcon from '@mui/icons-material/StarBorder';
import StarIcon from '@mui/icons-material/Star';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { useState } from 'react';
import { todoModel } from '../models/todo';

interface props {
    todo: todoModel
    showDetail: Function
    taskDetailSet: Function
}

const Task = ({todo, showDetail, taskDetailSet}: props) => {
    const [filled, setFilled] = useState<boolean>(false)
    return (
    <div className="grid grid-cols-[2%,5%,88%,5%] border-2 rounded-lg p-3 m-2">
        <div className='flex items-center ml-1'><input type="checkbox" /></div>
        <div className='flex item-center justify-center mt-[0.05rem]' onClick={() => { setFilled(preFill => !preFill) }}>
            {filled ? <StarIcon style={{ fill: '#F9BB07' }} /> : <StarBorderIcon />}
        </div>
        <div className="ml-3 flex items-center">{todo!.name}</div>
        <div className="text-end cursor-pointer" onClick={()=>{showDetail(); taskDetailSet(todo)}}><ArrowForwardIosIcon /></div>
    </div>
    )
}

export default Task