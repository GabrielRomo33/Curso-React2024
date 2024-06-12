import { useEffect, useState } from "react";
import { getRandomFact } from '../srvices/Facts.js'

export function useCatFact  ()  {
    const [fact, setFact] = useState();

    const refreshFact = () => {
        getRandomFact().then(newFact => setFact(newFact));
    }
    useEffect( refreshFact,[]);

    return { fact, refreshFact };
} 