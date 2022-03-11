import React from 'react'

export const TiposBasicos = () => {

  //let nombre: string | number = 'Monserrate';
  //nombre = 123;

  const nombre: string = 'Monserrate';
  const edad: number = 35;
  const estaActivo: boolean = true;

  const poderes: string[] = ['Velocidad','Volar','Respirar en el agua'];

  return (
    <>
        <h3>Tipos Básicos</h3>
        { nombre } , { edad }, { estaActivo ? 'activo' : 'no activo'}
        <hr/>
        { poderes.join(', ')};
    </>
  )
}
