// import React from 'react'

import { useNavigate, useParams } from 'react-router-dom'
import data from '../json/services.json'
import {AiOutlineCheckSquare} from 'react-icons/ai'
import { IServices } from '../interfaces/services.interfaces';


export default function ServicesInfo() {
  const { servicesId } = useParams();
  const navigate = useNavigate();

  const getBack = () => {
    navigate(-1)
  }
  const servicesInfo: IServices | undefined = data.find(item => item._id.$oid === servicesId)

  console.log(servicesInfo)

 
  return (
    <div className='p-4'>
      <h1 className='font-bold text-4xl font-MainFont my-4'>{servicesInfo?.title}</h1>

      {
        servicesInfo?.body.map(item =>

          // Render si es un título
          item.type === 'title' ? 
          (
            <div className='font-bold text-lg mt-4'>{item.content}</div>
          ) :


          // Render si es un parrafo
          item.type === 'param' ?
          (
            <p>{item.content}</p>
          ) :


          // Render si es una lista
          item.type === 'list' ?
          <ul>
            {(
              item.content.map( (content: string) =>
                <li className='py-1 px-2 flex'>
                  <div className='text-lg mt-1 mr-4 text-MainColor'>
                    <AiOutlineCheckSquare  />
                  </div>
                  <span>{content}</span>
                </li>
              )
            )} 
          </ul> :


          // Renderización vacía
          <div>Este artículo no posee una descripción detallada...</div>

        )
      }

      <button 
        className='text-white bg-MainColor hover:bg-white hover:text-black hover:shadow-xl transition-all py-2 px-4 shadow rounded mt-6'
        onClick={getBack}
      >Volver a Servicios</button>
      
    </div>
  )
}
