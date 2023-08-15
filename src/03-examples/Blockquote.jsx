export const Blockquote = ({ name, species }) => {
    return (
        <blockquote className="blockquote text-end">
            <p className="mb-2">{name}</p>
            <footer className="blockquote-footer">{species}</footer>
        </blockquote>
    );
};