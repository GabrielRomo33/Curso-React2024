// useEffect(() => {
//     async function getRandomFact () {
//         const res = await fetch(CAT_ENDPOINT_RANDOM_FACT);
//         const json = await res.json();
//         setFact(json.fact);
//     }

//     getRandomFact();
// }, []);
import { useEffect, useState } from "react"
import './app.css'
import { getRandomFact } from "./srvices/Facts";

//const CAT_ENDPOINT_IMAGE_URL = `https://cataas.com/cat/says/${firstWord}`;//constante con la ruta de la api
const CAT_PREFIX_IMAGE_URL = 'https://cataas.com';

function useCatImage  ({fact}){
    const [imageUrl, setImageUrl] = useState();
    useEffect(() => {

        if(!fact) return
        const threefirstWord = fact.split(' ', 3).join();
            // const firstWord = fact.split(' ').slice(0, 3).join(' ');
            //console.log(threefirstWord);
            fetch(`https://cataas.com/cat/says/${threefirstWord}?fontSize=50&fontColor=red`)
            .then(res => res)
            .then(response => {
                console.log(response);
                const { url } = response
                console.log(url);
                setImageUrl(url);
            })
    }, [fact]);
    return { imageUrl }
}

export function App () {

    const [fact, setFact] = useState();//state que de encargara de actualizar las consultas de la api 
    const { imageUrl } = useCatImage({ fact });
    

    useEffect(() => {
        // getRandomFact().then(setFact); //forma simplificada
        getRandomFact().then(newFact => setFact(newFact));
     },[])


  
        
    const handleClick = async () => {
        const newFact = await getRandomFact(setFact);
        setFact(newFact);
    }
    

    return (
        <main>
            <h1>Hard Skool</h1>
            {/* <section> */}
            <button onClick={ handleClick }>Get new fact</button>
                {fact &&  <p>{fact}!</p> /*el operador && revisa que la variable no venga vacia o null undefined etc.*/}
                { imageUrl && <img src={ imageUrl } alt={`Image extracted usin the firs trhee words for ${fact}`} />}
            {/* </section> */}
        </main>
    )
}