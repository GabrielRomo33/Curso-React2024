// useEffect(() => {
//     async function getRandomFact () {
//         const res = await fetch(CAT_ENDPOINT_RANDOM_FACT);
//         const json = await res.json();
//         setFact(json.fact);
//     }

//     getRandomFact();
// }, []);
import './app.css'
import { useCatFact } from './Hooks/useCatFact';
import { useCatImage } from "./Hooks/useCatImages";
//const CAT_PREFIX_IMAGE_URL = 'https://cataas.com';

export function App () {

    const { fact, refreshFact } = useCatFact();
    const { imageUrl } = useCatImage({ fact });

     
    const handleClick = async () => {
        // const newFact = await getRandomFact(setFact);
        // setFact(newFact);
        refreshFact();
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