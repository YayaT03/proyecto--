import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router'

export const User = () => {
    const {id}=useParams();
    const [user, setUser] = useState({})

    useEffect(()=>{
        
        const getUserByid = async () => {
            try {
                const { data } = await axios.get("/userid/" + id)
                setUser(data.user)
            } catch (error) {
                if (!error.response.data.ok) {
                    return alert(error.response.data.message)
                }
                console.log('error en getUserByid', error.message);
            }
        };
        getUserByid(id);
    },[id]);

    

    return (
        <div className='container'>
            {/* inicio card usuario*/}
            <div className="d-flex justify-conten-center">
                <div className="col-12 col-md-8">
                    <div className="card">
                        <h3 className="card-title">{user.name}</h3>
                        <div className="card-body">
                            <p> ${user.salary}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}