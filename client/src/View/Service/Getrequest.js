import { useEffect, useState } from "react"
import axios from "axios";
import './Getrequest.css';

import { Nav } from "../../Component/Navbar/Navbar";


export function Getrequest(){
    
    const [ allrequest , setAllrequest] = useState([]);

    const getallrequest =async()=>{
        const getissue = await axios.get("http://localhost:4000/requests")
        setAllrequest(getissue.data.data)
    }

    const deletedata=async(data)=>{
        const id=data._id;
        const deleteissue = await axios.delete(`http://localhost:4000/requests/${id}`)
        getallrequest(deleteissue.data.msg)
    }
   
      useEffect(
        ()=>{
            getallrequest();
            },[]
    )



    return(
        <>
        <>
        <Nav/>
            <table border={1} className="table">
                <thead className="thead">
                    <tr>
                        <th>name</th>
                        <th>mob</th>
                        <th>aadharno</th>
                        <th>age</th>
                        <th>bloodgroup</th>
                        <th>Address</th>
                        <th>gender</th>
                        <th>pincode</th>              
                       <th>state</th>

                    </tr>
                </thead>
                {allrequest.map((data) =>
                    <>
                        <tbody>
                            <tr>
                                <td>{data.name}</td>
                                <td>{data.mob}</td>
                                <td>{data.aadharno}</td>
                                <td>{data.age}</td>
                                <td>{data.bloodgroup}</td>
                                <td>{data.Address}</td>
                                <td>{data.Gender}</td>
                                <td>{data.pincode}</td>
                                <td>{data.State}</td>
                            </tr>
                        </tbody>

                    </>
                )
                }
            </table>

        </>
        <button onClick={deletedata} className="delete">delete</button>

    </>
    )
}


