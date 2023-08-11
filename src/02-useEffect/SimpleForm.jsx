import { useEffect, useState } from "react";
import { Message } from "./Message";

export const SimpleForm = () => {
    const [formState, setFormState] = useState({
        username: "strider",
        email: "fernando@google.com",
    });

    const { username, email } = formState;

    const onInputChange = ({ target }) => {
        const { name, value } = target; // desestructuro para obtener el value y el name (name = username)
        setFormState({
            ...formState, // mantengo todos los campos del formState
            [name]: value, // es una propiedad del objeto, permite cambiar el name
        });
    };

    useEffect(() => {
        // console.log("useeffect!");
    }, []); // agregar la dependecia [ ] para indicarle al useEffect que se renderice sólo una vez

    // por cada efecto secundario se recomienda un useEffect

    useEffect(() => {
        // console.log("formState changed");
    }, [formState]); // cada cambio en el form dispara el formState

    useEffect(() => {
        // console.log("email changed");
    }, [email]);

    return (
        <>
            <h2>Formulario Simple</h2>
            <hr />

            <input
                type="text"
                className="form-control"
                placeholder="Username"
                name="username"
                value={username}
                onChange={onInputChange}
            />

            <input
                type="email"
                className="form-control mt-3"
                placeholder="fernando@google.com"
                name="email"
                value={email}
                onChange={onInputChange}
            />

            {username === "strider2" && <Message />}
        </>
    );
};

// useEffect(() => {
//   first

//   return () => { // el return para clean up ej. cancelar una suscripción que pusismos en el first
//     second
//   }
// }, [third])