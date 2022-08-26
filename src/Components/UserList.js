import { useEffect, useState } from "react";
import axios from "axios";
import moment from "moment";

const UserList = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:3000').then((res) => 
        setData(res.data)
    )
    .catch((err) => console.log('error-',err))
    },[data]);

    return (
        <div>
            <h1>User List</h1>
           <table className="main">
            <thead>
                <tr>
                <th>Name</th>
                <th>Task Name</th>
                <th>Task Description</th>
                <th>Date & Time</th>
                </tr>
            </thead>
            {data.map((user,index) => (
            <tbody key={index}>
                <tr>
                <td>{user.userName}</td>
                <td>{user.taskName}</td>
                <td>{user.taskDesc}</td>
                <td>{moment(user.formDateTime).format('DD/MM/YY hh:MM')}</td>
                </tr>
            </tbody>
            ))}
           </table>
           </div>
    )
}

export default UserList;