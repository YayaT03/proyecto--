import React from 'react'
import { Link } from 'react-router-dom'
import histodance from '../Imagenes/histodance.jpg'
import chicas from '../Imagenes/chicas.jpg'
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

      <div className="container">
        <div className="accordion" id="accordionExample ">
          <div className="accordion-item">
            <h2 className="accordion-header" id="headingOne">
              <button className="accordion-button fw-bold  text-black" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                Historia de la danza
              </button>
            </h2>

            <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
              <div className="accordion-body ">
                <div class="container">
                  <div class="row">
                    <div class="col">

                      <p className=" container text-start">La danza nos ha acompañado a lo largo de la historia haciendo parte de grandes momentos para la humanidad, llegando a considerarse como el arte donde el cuerpo se convierte en símbolos. Si quieres conocer acerca de su origen, su historia y algunos tipos de danza te invitamos a dar click en la siguiente imagen. </p>

                    </div>

                    <div className="col">

                    <img src={histodance} alt="histodance" className=" img-fluid" />
                    </div>
                  </div>
                </div>



              </div>
            </div>
          </div>
          <div className="accordion-item ">
            <h2 className="accordion-header" id="headingTwo">
              <button className="accordion-button collapsed fw-bold  text-black" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                ¡Empieza a bailar!
              </button>
            </h2>
            <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
              <div className="accordion-body">
                <strong>Acá te dejamos unos tips para que te motives y con disciplina te conviertas en un gran bailarin
                </strong> <i class="fa-solid fa-face-smile"></i>
                <p>1. Escucha mucha música
                  Obviamente, el baile va ligado a la música, y tu oído juega un papel importante a la hora de conseguir coordinación y entender los ritmos. Si sientes la música, podrás transmitirla con tus pasos en una coreografía. </p>
                <p>2. Atención con la postura
                  Según el estilo de baile, será necesario ser más estrict@ o menos con la postura, pero en general, una buena postura con la espalda recta garantiza estabilidad y tener un buen estilo. Con una postura correcta, tu presencia en el escenario o la pista será mucho mejor.</p>
                <p>3. Cuida tu calzado y ropa
                  La ejecución del baile mejora cuando tu outfit se ha pensado para desarrollar ese tipo de baile. Calzado cómodo, flexible y de buena calidad son indispensables para pasar unas cuantas horas practicando tu estilo de baile favorito sin desistir por posibles dolores, roces o molestias. Con la ropa que se lleva al bailar, lo mismo, que se adapte a el estilo que vas a bailar, no es lo mismo equiparse para bailar danza clásica que hip-hop.</p>
                <p>4. Trabaja la improvisación
                  Seguir coreografías está bien, pero al improvisar te permite aprender nuevos movimientos, y al mismo tiempo y acelerar tu curva de aprendizaje. Disponer de la habilidad de improvisar, te permite en un momento que no recuerdas los pasos de una coreografía, te permite salir de situaciones comprometidas o de implementar momentos de “freestyle”.</p>
                <p>5. Práctica con todo
                  Empieza a bailar y diviértete. El baile necesita de muchas horas para el perfeccionamiento, pero como en todo, un día se empieza. La práctica es trascendental para mejorar y la constancia será tu aliado a largo plazo.

                  El baile es para divertirse, para hacer deporte, pero necesita mucho de tu parte, así que es necesario tomarlo en serio para ver una evolución. Para ello, utiliza todos los recursos disponibles: clases online, academias de baile, discotecas, fiestas… ¡baila siempre que puedas!</p>
              </div>
            </div>
          </div>
          <div className="accordion-item  ">
            <h2 className="accordion-header" id="headingThree">
              <button class="accordion-button collapsed fw-bold  text-black" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                ¡baila! ¡baila! ¡baila!
              </button>
            </h2>
            <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
              <div className=" accordion-body">
              <blockquote className="blockquote">
                 <p className='lead-strong'> Hay atajos para la felicidad, y el baile es uno de ellos   </p>
              </blockquote>
            <figcaption className="blockquote-footer">
            <strong>"Vicki Baum"</strong>
              </figcaption>
                <img src={chicas} alt="chicas" className="align-top" width="300" height="300" />

              </div>
            </div>
            <div className="container-md-2">
            <div class="clearfix">
            <img src={chica} className="col-md-6 float-md-end mb-3 ms-md-3 " alt="chica"></img>
             </div>
            </div>
            </div>
            </div>
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



  )
}
export default Blog