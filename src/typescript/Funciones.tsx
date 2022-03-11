export const Funciones = () => {

    // const sumar = () : number => {

    //     return 1 + 2;

    // }

    const sumar = ( a: number, b: number ) : number => {

        return a + b;
        //return [ a, b ];

    }

  return (
    <>
        <h3>Funciones</h3>
        <span>El resultado es: { sumar(2,3) }</span>
    </>
  )
}
