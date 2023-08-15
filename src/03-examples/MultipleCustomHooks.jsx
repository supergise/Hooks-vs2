import { useFetch } from "../hooks/useFetch";
import { useCounter } from "../hooks/useCounter";

export const MultipleCustomHooks = () => {
    const { counter, increment } = useCounter(1);

    const { data, isLoading, hasError } = useFetch(
        `https://rickandmortyapi.com/api/character/${counter}`
    );

    const { name, species } = !!data && data; // !!data es "si la data tiene un valor" toma la data en la posición cero

    console.log({ data, isLoading, hasError });

    // NO PONER EL HOOK ACA: los hooks no se pueden renderizar de manera condicional

    return (
        <>
            <h2>Rick and Morty</h2>
            <hr />

            {isLoading ? (
                <div className="alert alert-info text-center">Loading...</div>
            ) : (
                <blockquote className="blockquote text-end">
                    <p className="mb-2">{name}</p>
                    <footer className="blockquote-footer">{species}</footer>
                </blockquote>
            )}

            <button className="btn btn-primary" onClick={() => increment()}>
                {/* mando a llamar a la función pero sin number que enviaba de parámetro inicial */}
                Next Character
            </button>
        </>
    );
};