import React from 'react'
import { Link } from 'react-router-dom'

const Grupos = () => {
  return (
    <div>
     
      <ul className="nav justify-content-end">
      <li className="nav-item">
                <Link to="Covers" className='nav-link active'>Covers</Link>
              </li>
              <li className="nav-item">
                <Link to="Urbano" className='nav-link active'>Urbano</Link>
              </li>
              <li className="nav-item">
                <Link to="Contemporaneo" className='nav-link active'>Contemporaneo</Link>
              </li>
              <li className="nav-item">
                <Link to="Nuestrosgrupos" className='nav-link active'>Competencia</Link>
              </li>
 
</ul>

<h1 className="display-4">Nuestros Grupos</h1>













        
        
        </div>
  )
}

export default Grupos