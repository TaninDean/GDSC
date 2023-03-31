import StarBorderIcon from '@mui/icons-material/StarBorder';
import StarIcon from '@mui/icons-material/Star';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { useState } from 'react';
import { todoModel } from '../models/todo';
import axios from 'axios';

interface props {
    todo: todoModel
    showDetail: Function
    taskDetailSet: Function
}

const Task = ({ todo, showDetail, taskDetailSet }: props) => {

    function clickHandler(job: string) {
        const data = {
            entityId: "0",
            name: todo!.name,
            description: todo!.description,
            createdAt: todo!.createdAt,
            done: (job === "done" ? !todo!.done : todo!.done),
            favorited: (job === "fav" ? !todo!.favorited : todo!.favorited)
        }

        try {
            axios({
                method: 'post',
                url: `http://127.0.0.1:8080/todo/edit/${todo!.entityId}`,
                data: data
            })
        } catch {
            alert(`Error can't ${job} ${data.name}Todo!!!.`)
        }
    }
    const [filled, setFilled] = useState<boolean>(todo!.favorited)
    return (
        <div className="grid grid-cols-[1.75rem,1.31rem,88%,5%] border-2 rounded-lg p-3 m-2 gap-2">
            <div className='flex items-center ml-1'><input type="checkbox" defaultChecked={todo!.done} onChange={() => { clickHandler('done') }} /></div>
            <div className='flex item-center justify-center mt-[0.05rem]' onClick={() => { setFilled(preFill => !preFill); clickHandler('fav') }}>
                {filled ? <StarIcon style={{ fill: '#F9BB07' }} /> : <StarBorderIcon />}
            </div>
            <div className="ml-3 flex items-center">{todo!.name}</div>
            <div className="text-end cursor-pointer" onClick={() => { showDetail(); taskDetailSet(todo) }}><ArrowForwardIosIcon /></div>
        </div>
    )
}

export default Task