import DeleteIcon from '@mui/icons-material/Delete';
import SaveIcon from '@mui/icons-material/Save';
import CloseIcon from '@mui/icons-material/Close';
import CheckIcon from '@mui/icons-material/Check';
import { todoModel } from '../models/todo';

interface props {
  todo: todoModel | undefined
  showDetail: Function
}

const ActivityDetail = ({ todo, showDetail }: props) => {
  return (
    <div className="p-3 w-ful h-full bg-[#F4F4F4] rounded-lg relative">
      <div className='absolute top-1 right-1 cursor-pointer' onClick={() => { showDetail() }}>
        <CloseIcon style={{ fontSize: 20 }} />
      </div>
      <div className="text-4xl">
        {todo!.name}
      </div>
      <hr className="border-2 mt-4 mb-4" />
      <div className='relative '>
        <p>Description</p>
        <textarea defaultValue={"dasjdhsduhfuishoud"} className="outline-none rounded-lg w-full h-[30vh] p-3 mt-3" />
        <div className='absolute h-[110%] w-full grid grid-cols-3 p-3 gap-2 items-end justify-center'>
          <button className="rounded-md buttom-0 justify-center items-center h-[3rem]">
            <CheckIcon />
            <p>Completed</p>
          </button>
          <button className="rounded-md justify-center items-center h-[3rem]">
            <DeleteIcon />
            <p>Delete</p>
          </button>
          <button className="rounded-md justify-center items-center h-[3rem]">
            <SaveIcon />
            <p>save</p>
          </button>
        </div>
      </div>
    </div>
  )
}

export default ActivityDetail