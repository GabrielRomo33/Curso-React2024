import { useEffect, useState } from "react";


export function useCatImage  ({fact}){
    const [imageUrl, setImageUrl] = useState();
    useEffect(() => {
        if(!fact) return
        const threefirstWord = fact.split(' ', 3).join();
            // const firstWord = fact.split(' ').slice(0, 3).join(' ');
            fetch(`https://cataas.com/cat/says/${threefirstWord}?fontSize=50&fontColor=red`)
            .then(res => res)
            .then(response => {
                const { url } = response
                setImageUrl(url);
            })
    }, [fact]);
    return { imageUrl }
}