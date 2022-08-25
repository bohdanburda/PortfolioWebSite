import React from 'react'
import './technologies.css'
import DOTNET from '../../assets/tech/dotnet.png'
import MSSQL from '../../assets/tech/mssql.png'
import SQLITE from '../../assets/tech/sqlite.png'
import POSTGRESQL from '../../assets/tech/postgresql.png'
import ENTITYFRAMEWORK from '../../assets/tech/entityframework.png'
import CPLUSPLUS from '../../assets/tech/cplusplus.png'
import CSHARP from '../../assets/tech/csharp.png'
import PYTHON from '../../assets/tech/python.png'
import REACTIMG from '../../assets/tech/react.png'
import HTMLCSSJS from '../../assets/tech/htmlcssjs.png'


const Technologies = () => {
  return (
    <section id='skills'>
      <h2 className='text-light'>Skills</h2>

      <div className='grid'>
        <img className='grid-item' src={DOTNET} />
        <img className='grid-item' src={MSSQL} />
        <img className='grid-item' src={SQLITE} />
        <img className='grid-item' src={POSTGRESQL} />
        <img className='grid-item' src={ENTITYFRAMEWORK} />
        <img className='grid-item' src={CPLUSPLUS} />
        <img className='grid-item' src={CSHARP} />
        <img className='grid-item' src={PYTHON} />
        <img className='grid-item' src={REACTIMG} />
        <img className='grid-item' src={HTMLCSSJS} />
      </div>
      
    </section>
  )
}

export default Technologies