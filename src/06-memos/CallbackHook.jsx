import { useCallback, useState } from "react";
import { ShowIncrement } from "./ShowIncrement";

export const CallbackHook = () => {

    const [counter, setCounter] = useState(10);

    const incrementFather = useCallback(() => { 
        setCounter((value) => value + 1);
    }, [],)

    return (
        <>
            <h1>useCallback Hook: {counter}</h1>
            <hr />

            <ShowIncrement increment={incrementFather} />
        </>
    );
};

// useCallback sirve para memo funciones

// const incrementFather = useCallback(() => {
//     setCounter(counter +1);
// }, [])

// const incrementFather = () => {
//     setCounter(counter +1);
// }

// otro uso
// useEffect(() => {
    //     //incrementFather();
    // }, [incrementFather])