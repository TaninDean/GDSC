import Task from "./Task"
import ActivityDetail from "./ActivityDetail"
import { useContext, useEffect, useState } from 'react'
import { todoModel } from "../models/todo"
import {observer} from 'mobx-react'
import ModificationStoresContext from "../stores/ModificationStores"

interface props {
  data: todoModel[]
}

const ActivityList = observer(({ data }: props) => {
  const [showDetail, setShowDetail] = useState<boolean>(false)
  const [taskDetail, setTaskDetail] = useState<todoModel>()
  const modification = useContext(ModificationStoresContext)

  function showDetailHandler() {
    setShowDetail(!showDetail)
  }

  return (
    <div className={`relative w-full h-full grid ${showDetail ? `grid-cols-[70%,30%]` : ``}`}>
      <div className="h-full gap-2">
        <div className='p-3 text-3xl font-bold'>
          Activity list
        </div>
        {data?.map((todo, id) => {
          return <Task key={id} todo={todo} showDetail={showDetailHandler} taskDetailSet={setTaskDetail} />
        })}
      </div>
      <div className={`relative p-3 transform transition-all duration-500 ease-out ${showDetail ? 'block translate-x-[0%]' : 'translate-x-[120%] absolute'}`} >
        {modification.open?<ActivityDetail todo={modification.data} showDetail={()=>{modification.changeOpenState(false)}}/>:taskDetail && <ActivityDetail todo={taskDetail} showDetail={showDetailHandler}/> }
      </div>
    </div>
  )
})

export default ActivityList