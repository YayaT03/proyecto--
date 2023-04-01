import React from 'react'
import { Link } from 'react-router-dom'

const Grupos = () => {
  return (
    <div>
      <em>
     <h1 className="display-4">Nuestros Grupos</h1>
     </em>
     <br></br>
     <p>
      Una academia es nutrida gracias a nuestros bailarines,<br></br>para ello se han creado diversos grupos para que cada persona sea capaz 
      de adaptarse a sus diversos gustos, pasiones y técnicas.<br></br>
      Las divisiones han sido creadas apartir de los generos y tendencias de las que mas se habla.<br></br>
     </p>
     <p>

      Desde cada uno de los grupos se llevan a cabo procesos de aprendizaje teniendo en cuenta el nivel <br></br>
      y la capacidad de cada uno de losintegrantes, es importante resaltar que el desarrollo de la disciplina <br></br>
      y el trabajo en equipo es la base para llevar a cabo presentaciones exitosas. 
     </p>
     <p>
      Contamos con el grupo de competencia que ha sido elegido desde cada uno de los procesos de clase, este grupo cuenta <br></br> 
      con el expreso concentimiento de los estudiantes y sus esfuerzos, algunos de nuestros estudiantes disfrutan de los procesos y las muestras <br></br>
      artisticas sin la responsabilidad y presion de una competencia, en otro de los casos tenemos estudiantes a quienes les <br></br>
      les gustan los retos y la adrernalina de competir.
      </p>
      <p className='lead'>
      <strong>
        Sin mas bienvenidos a conocer cada uno de los generos y procesos de nuestra academia para que la intriga te lleve <br></br>
      a vivir exprencias que no creias posible. 
      </strong>
      </p>


      
                <Link to="Covers"> Covers</Link>
             <br></br>
                <Link to="Urbano">Urbano</Link>
             
              <br></br>
                <Link to="Contemporaneo" >Contemporaneo</Link>
              <br></br>
                <Link to="Nuestrosgrupos">Competencia</Link>
             











                <footer >
   

   <div className="container-md - aligin-items-center">

   <i className="fa-brands fa-facebook fa-2xl me-3" ></i> 
   <Link to="https://www.facebook.com">Facebook </Link> <br></br> <br></br>

   <i className="fa-brands fa-instagram fa-2xl me-3 "> </i>  
   <Link to="https://www.instagram.com">Instagram</Link> <br></br> <br></br>

   <i className="fa-brands fa-tiktok fa-2xl me-3"></i> 
   <Link to="https://www.tiktok.com/es/">TikTok</Link>
   <br></br>
   <br></br>


   <p1>Dance World Academy, Copyright &copy; 2023</p1>
   <br></br>
   
   </div>
</footer>
 


     













        
        
        </div>
  )
}

export default Grupos