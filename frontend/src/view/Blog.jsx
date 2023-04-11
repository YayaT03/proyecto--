import React from 'react'
import { Link } from 'react-router-dom'
import histodance from '../Imagenes/histodance.jpg'
import chica from '../Imagenes/chica.png'

const Blog = () => {
  return (
    <div>
    <em>
      <h1 className="display-4"> Blog </h1>
      </em>
      <br></br>
      <div>
      <header className="bg-ligth 'Cabin', sans-serif"></header>
       <strong className='display-6'> Aquí compartimos informaciones, curiosidades, eventos y mucho más acerca de nosotros. ¡Disfruta de este espacio!  </strong>
      </div>
      <br></br>
      <br></br>
      <div classname="container md">
  <div class="row">
    <div className="col-4">
      <h1>Historia de la danza</h1>
      <p>
      La danza nos ha acompañado a lo largo de la historia haciendo parte de grandes momentos para la humanidad, llegando a considerarse como el arte donde el cuerpo se convierte en símbolos.<br></br>
      Los primeros en comprender la danza como una forma artística fueron los griegos de la Antigüedad, quienes le dedicaron una de sus musas: Terpsícore. La danza en la Antigua Grecia se vinculaba con el culto a Dionisos, y formaba parte de las prácticas teatrales, junto con la música y la poesía.<br></br>
El principal objetivo de la danza, en general, es el de servir como un medio para simplemente “bailar y sentir mediante el cuerpo”. Su amplitud de aplicación hace que se divida en distintos estilos.
      </p>
    </div>
    <div className="col-4">
      <h1>¡Empieza a bailar!</h1>
      <li>Escucha mucha música:
       La danza y música son amantes, tu oído juega un papel importante a la hora de conseguir coordinación. Si sientes la música, podrás transmitirla con tus pasos en una coreografía.</li>
     <li>
     Atención con la postura:
      Según el estilo de baile, será necesario ser más estrict@ o menos con la postura.
     </li>
     <li>
     Cuida tu calzado y ropa:
    La ejecución del baile mejora cuando tu outfit se ha pensado para desarrollar ese tipo de baile. Calzado cómodo, flexible y de buena calidad son indispensables para pasar unas cuantas horas practicando
     </li>
     <li>
     Trabaja la improvisación:
       Seguir coreografías está bien, pero al improvisar te permite aprender nuevos movimientos, y al mismo tiempo y acelerar tu curva de aprendizaje.
     </li>
    </div>
    <div className="col-4">
    <blockquote className="blockquote">
    <h1>“Hay atajos para la felicidad, y el baile es uno de ellos ”</h1>
  </blockquote>
  <figcaption className="blockquote-footer">
  "Vicki Baum"
  </figcaption>
  <img src={histodance} alt="histodance"  className=" img-fluid"></img>
    </div>
  </div>
</div>


            <div className="container-md-2">
            <div class="clearfix">
            <img src={chica} className="col-md-6 float-md-end mb-3 ms-md-3 " alt="chica"></img>
             </div>
            
      
    

<footer >
   

  

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
   </footer>
   </div>
   </div>



  )
}
export default Blog