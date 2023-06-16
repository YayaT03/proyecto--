import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Swal from 'sweetalert2'



const Datos = () => {
    const [estudiante, setEstudiante] = useState([]);
    const [name1, setName1] = useState("");
    const [name2, setName2] = useState("");
    const [lastname1, setLastname1] = useState("");
    const [lastname2, setLastname2] = useState("");
    const [email, setEmail] = useState("");
    const [edit, setEdit] = useState(false);


    useEffect(() => {
        getData();
    }, []);

    const cleanData = () => {
        setName1(""); 
        setName2("");
        setLastname1("");
        setLastname2("");
        setEmail("");
    };

    const getData = async () => {
        const { data } = await axios.get("htpp://localhost:4000/");
        setEstudiante(data.estudiante);
    };

    const saveEstudiante = async () => {
        try {
            const newEstudiante = {
                name1,
                name2,
                lastname1,
                lastname2,
                email,
            };
            await axios.post("http://localhost:4000/api/", newEstudiante);
            cleanData();
            getData();
        } catch (error) {
            if (!error.response.data.ok) {
                return alert(error.response.data.message);
            }
            console.log("error en saveEstudiate", error.message);
        }
    };
    const actions = (e) => {


    };
    return (
        <div className='container'>
            <div className='d-flex justify-content-center'>
                <div className='col-12 col-md-8'>
                    <div className='card'>
                        <h1 className='card-title text.center'>Base</h1>
                        <div className='card-body'>
                            <form>
                                <div className='mb-3'>
                                    <input
                                        type='text'
                                        placeholder='name1'
                                        className='form-control'
                                        required
                                    />
                                </div>
                                <div className='mb-3'>
                                    <input
                                        type='text'
                                        placeholder='name2'
                                        className='form-control'
                                        required
                                    />
                                </div>
                                <div className='mb-3'>
                                    <input
                                        type='text'
                                        placeholder='lastname1'
                                        className='form-control'
                                        required
                                    />
                                </div>
                                <div className='mb-3'>
                                    <input
                                        type='text'
                                        placeholder='lastname2'
                                        className='form-control'
                                        required
                                    />
                                </div>
                                <div className='mb-3'>
                                    <input
                                        type='text'
                                        placeholder='email'
                                        className='form-control'
                                        required
                                    />
                                </div>
                                <button className='btn  btnprimary form-control' type="submit">Save</button>









                            </form>

                        </div>



                    </div>

                </div>

            </div>









        </div>



























    )
};

export default Datos