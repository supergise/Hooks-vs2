import { useEffect, useState } from "react";

export const Message = () => {
    const [coords, setCoords] = useState({ x: 0, y: 0 });

    useEffect(() => {
        const onMouseMove = ({ x, y }) => {
            setCoords({ x, y })
        };

        window.addEventListener("mousemove", onMouseMove);

        return () => {
            window.removeEventListener("mousemove", onMouseMove);
        }
    }, []);

    return (
        <>
            <h4>Usuario existente</h4>
        </>
    );
};

// useEffect(() => {
//     console.log('message mounted'); // listened

//     return () => {
//       console.log('message unmounted'); // remove listened
//     }
//   }, [])