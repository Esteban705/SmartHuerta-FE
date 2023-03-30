import React, { useContext } from 'react'
import { HttpContext } from '../Context/httpContext'
import UserPerfil from './UserPerfil'

export const UserPerfilPage = () => {
const { get } = useContext(HttpContext)


    const getAllProducts = async (userId) => {

        const getAllProducts = await get(`/api/product/allproducts/${userId}`)

        return getAllProducts
    }


  return (
    <UserPerfil getAllProducts={getAllProducts}/>
  )
}
