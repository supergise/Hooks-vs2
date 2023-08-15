import { useLayoutEffect, useRef, useState } from "react";

export const Blockquote = ({ name, species }) => {

    const pRef = useRef();
    const [boxSize, setBoxSize] = useState({width: 0, height: 0})

    useLayoutEffect(() => {
        const {width, height} = pRef.current.getBoundingClientRect();
        setBoxSize({width, height});
    }, [species])
    
    return (
        <>
            <blockquote 
                className="blockquote text-end"
                style={{display:'flex'}}
            >
                <p ref={pRef}  className="mb-2">{species}</p>
                <footer className="blockquote-footer">{name}</footer>
            </blockquote>

            <code>{JSON.stringify(boxSize)}</code>
        </>
    );
};