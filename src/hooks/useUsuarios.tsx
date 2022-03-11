import { useEffect, useRef, useState } from 'react'
import { resReqApi } from '../api/resReq';
import { ReqResListado, Usuario } from '../interfaces/reqRes';

export const useUsuarios = () => {

    const [usuarios, setUsuarios] = useState<Usuario[]>([]);

    const paginaRef = useRef(1);

    useEffect(() => {

        cargarUsuarios();   
       
    }, [])

    const cargarUsuarios = async () => {

         //llamado al API
         const resp = await resReqApi.get<ReqResListado>('/users', {
             params: {
                 page: paginaRef.current
             }
         })

         if( resp.data.data.length > 0){

             setUsuarios( resp.data.data );

         } else {

            paginaRef.current--;
            alert('No hay más registros');
            
         }         
    }

    const paginaSiguiente = async () => {
        paginaRef.current++;
        cargarUsuarios();
   }

    const paginaAnterior = async () => {

        if ( paginaRef.current > 1 ) {
            paginaRef.current--;
            cargarUsuarios()
        }

   }

    return {
        usuarios,
        paginaSiguiente,
        paginaAnterior,
    }

}
