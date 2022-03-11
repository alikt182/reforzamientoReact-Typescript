
interface Persona {
    nombreCompleto: string;
    edad: number;
    direccion: Direccion;
}

interface Direccion {
    pais: string;
    casaNo: number;
}


export const ObjetosLiterales = () => {

    const persona: Persona = {
        nombreCompleto: 'Monserrate',
        edad: 36,
        direccion: {
            pais: 'Canadá',
            casaNo: 615
        }
    }

  return (

    <>
        <h3>ObjetosLiterales</h3>
        <code>
            <pre>
                { JSON.stringify( persona, null, 2 ) }   
                { JSON.stringify( persona, ['nombre','edad'], 2 ) }   
            </pre>
        </code>
    </>
  )
}
