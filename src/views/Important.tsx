import axios from "axios";
import { useEffect, useState } from "react";
import ActivityList from "../components/ActivityList";
import { todoModel } from "../models/todo"

const mockdata: todoModel[] = [{
    entityId: '',
    name: 'Name',
    description: 'this is description',
    createdAt: new Date(),
    done: true,
    favorited: true
},{
    entityId: '',
    name: 'Name',
    description: 'this is description',
    createdAt: new Date(),
    done: true,
    favorited: true
},
{
    entityId: '',
    name: 'Name',
    description: 'this is description',
    createdAt: new Date(),
    done: true,
    favorited: true
}
]

const Important = () => {
    const [data, setData] = useState<todoModel[]>(mockdata);
    const getData = async () => {
        try {
            const res = await axios.get("replace your url");
            setData(res.data);
        }
        catch (e) {
            alert("Error When fetch data")
        }
    }
    useEffect(() => {
        // getData();
    }, [])
    return (
        <div className="p-3 w-full h-full">
            <ActivityList data={data}/>
        </div>
    )
}

export default Important