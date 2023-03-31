import axios from "axios";
import { useContext, useEffect, useState } from "react";
import ActivityList from "../components/ActivityList";
import { mockdata } from "../mocks/TodoMock";
import { todoModel } from "../models/todo"

const Activity = () => {

    const [data, setData] = useState<todoModel[]>(mockdata);
    const getData = async () => {
        try {
            const res = await axios.get("http://127.0.0.1:8080/todo");
            console.log(res)
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
            <ActivityList data={data} />
        </div>
    )
}

export default Activity