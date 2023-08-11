import { useEffect } from "react";
import { useForm } from "../hooks/useForm";

export const FormWithCustomHook = () => {

    const {formState, onInputChange, username, email, password, onResetForm} = useForm({
                username: '',
                email: '',
                password: ''
            })

    // const {username, email, password} = formState; en vez de esta linea uso ...formState

    return (
        <>
            <h2>Formulario con Custom Hook</h2>
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

            <input
                type="password"
                className="form-control mt-3"
                placeholder="Contraseña"
                name="password"
                value={password}
                onChange={onInputChange}
            />

            <button onClick={onResetForm} className="btn btn-primary mt-2">Borrar</button>

        </>
    );
};
