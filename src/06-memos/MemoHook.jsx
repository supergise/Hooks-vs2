import { useMemo, useState } from "react";
import { useCounter } from "../hooks";

const heavyStuff = (iterationNumber = 100) => {
    for (let i = 0; i < iterationNumber; i++) {
        console.log("ahí vamos...");
    }

    return `${iterationNumber} iteraciones realizadas`;
};

export const MemoHook = () => {
    
    const { counter, increment } = useCounter(4000);
    const [show, setShow] = useState(true);

    const memorizedValue = useMemo(() => heavyStuff(counter), [counter]); // un [] vacio memoriza sólo una vez, si le paso el argumento counter memoriza cada vez que cambia el counter
    // memoriza si cambian las dependencias
    return (
        <>
            <h1>
                Counter: <small>{counter}</small>
            </h1>
            <hr />

            {/* <h4>{heavyStuff(counter)}</h4> */}
            
            <h4>{memorizedValue}</h4>

            <button
                className="btn btn-primary"
                onClick={() => increment()} // no se llama como referencia directa {increment} sino como fn flecha que permite agregar un argumento
            >
                +1
            </button>

            <button
                className="btn btn-outline-primary"
                onClick={() => setShow(!show)}
            >
                Show/Hide {JSON.stringify(show)}
            </button>
        </>
    );
};
