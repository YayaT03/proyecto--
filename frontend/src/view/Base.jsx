import axios from 'axios'
import React, { useEffect, useState } from 'react';


export const Base = () => {

  const [estudiante, setEstudiante] = useState([]);
  const [name1, setName1] = useState(``)
  const [name2, setName2] = useState(``)
  const [lastname1, setLastname1] = useState(``)
  const [lastname2, setLastname2] = useState(``)
  const [email, setEmail] = useState(``)



  useEffect(() => {
    getData();

  }, []);


  const getData = async () => {
    const { data } = await axios.get("http://localhost:4000/")
    setEstudiante(data.estudiante)
  };
  
  const saveEstudiante=async()=>{
   try{
    const newEstudiante={
      name1,
      name2,
      lastname1,
      lastname2,
      email,
    }
    await axios.post("http://localhost:4000/",newEstudiante)

   }catch (error){
      if(!error.response.data.ok){
         return alert(error.response.data.message);
      }
      console.log("error en saveEstudiante",error.message);
   }
  };

  return (
    <div className='container'>
      {/*formulario*/}
      <div className='d-flex justify-content-center mt-5'>
        <div className='col-12 col md-8'>
          <div className='card'>
            <h1 className='card-title text-center'>INGRESO </h1>
            <div className='card-body'>
              <form>
                <div className='mb-3'>
                  <input
                    type="text"
                    placeholder="name1"
                    className='form-control'
                    value={name1}
                    required
                    onChange={(e) => setName1(e.target.value)}
                  />
                </div>
                <div className='mb-3'>
                  <input
                    type="text"
                    placeholder="name2"
                    className='form-control'
                    value={name2}
                    required
                    onChange={(e) => setName2(e.target.value)}
                  />
                </div>
                <div className='mb-3'>
                  <input
                    type="text"
                    placeholder="lastname1"
                    className='form-control'
                    value={lastname1}
                    required
                    onChange={(e) => setLastname1(e.target.value)}
                  />
                </div>
                <div className='mb-3'>
                  <input
                    type="text"
                    placeholder="lastname2"
                    className='form-control'
                    value={lastname2}
                    required
                    onChange={(e) => setLastname2(e.target.value)}
                  />
                </div>
                <div className='mb-3'>
                  <input
                    type="text"
                    placeholder="email"
                    className='form-control'
                    value={email}
                    required
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
                <button className='btn btn-primary full-control'>Enviar</button>
              </form>
            </div>
          </div>
        </div>
      </div>
      {/*fin */}

      {/*tablas */}
      <table className='table mt-5 table-hover'>
        <thead className='table-dark'>
          <tr>
            <th>#</th>
            <th>Name1</th>
            <th>Name2</th>
            <th>Lastname1</th>
            <th>Lastname2</th>
            <th>Email</th>
            <th>Acciones</th>
          </tr>
        </thead>

        <tbody>
          {
            estudiante.map((item, i) => (
              <tr key={item._id}>
                <td>{i + 1}</td>
                <td>{item.name1}</td>
                <td>{item.Name2}</td>
                <td>{item.lastname1}</td>
                <td>{item.lastname2}</td>
                <td>{item.email}</td>
                <td>
                  <i className="fa-solid fa-trash me-2"></i>
                  <i className="fa-solid fa-edit"></i>
                  <i className="fa-solid fa- "></i>

                </td>




              </tr>
            ))
          }

        </tbody>




      </table>

    </div>
  );
};

export default Base