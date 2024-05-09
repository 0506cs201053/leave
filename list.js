import React, { useState, useEffect } from 'react';
import axios from 'axios'
import '../css/list.css';
  
  
const List = () => {
    const [userData, setUSerData] = useState([]);
    useEffect(() => {
        fetchData();
    }, [])
  
    const fetchData = async () => {
        try {
            const result = await axios("http://localhost:3001/users");
            //console.log(result.data);
            setUSerData(result.data)
        } catch (err) {
            console.log("somthing Wrong");
        }
    }
  
    return(
        <div className="container">
        <h3>User Details</h3>
        <table className="table table-bordered">
            <thead>
                <tr>
                    <th>S No.</th>
                    <th>Full Name</th>
                    <th>Email</th>
                </tr>
            </thead>
            <tbody>
                {
                    userData.map((user, i) => {
                        return (
                            <tr key={i}>
                                <td>{i + 1}</td>
                                <td>{user.name} </td>
                                <td>{user.email} </td>
                            </tr>
                        )
                    })
                }
  
            </tbody>
        </table>
        </div>
    );
};
  
export default List;