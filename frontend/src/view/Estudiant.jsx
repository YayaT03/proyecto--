import axios from  "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const Estudiant = () => {
  const { id } = useParams();
  const [estudiantes, setEstudiantes] = useState();


useEffect(()=>{
  const getestudiantesByid = async (id) => {
    try {
      const { data } = await axios.get("http://localhost:4000/api/estudiantes/listid/" + id)
      setEstudiantes(data.estudiantes)
    } catch (error) {
      if (!error.response.data.ok) {
        return alert(error.response.data.message);
      }
      console.log("error en getidEstudiate", error.message);
    }
  };
  getestudiantesByid(id)
},[id])

  return (
    <div className='container'>
      <div className="d-flex justify-content-center">
        <div className="col-12  col-md-8">
          <div className="card">
            <h3 className="card-title">{estudiantes.name1}</h3>
            <div className="card-body">
              <p>Primer Apellido{estudiantes.lastname1}</p>

            </div>

          </div>

        </div>

      </div>
    </div>

  )
}

export default Estudiant