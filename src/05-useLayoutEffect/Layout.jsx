import { useFetch, useCounter } from "../hooks";
import { LoadingCharacter, Blockquote } from "../03-examples";

export const Layout = () => {
    const { counter, increment } = useCounter(1);

    const { data, isLoading, hasError } = useFetch(
        `https://rickandmortyapi.com/api/character/${counter}`
    );

    const { name, species } = !!data && data;

    return (
        <>
            <h2>Rick and Morty</h2>
            <hr />

            {isLoading ? (
                <LoadingCharacter />
            ) : (
                <Blockquote name={name} species={species} />
            )}

            <button
                className="btn btn-primary"
                onClick={() => increment()}
                disabled={isLoading}
            >
                Next Character
            </button>
        </>
    );
};