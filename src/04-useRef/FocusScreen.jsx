import { useRef } from "react"

export const FocusScreen = () => {

    const inputRef = useRef();

    const onClick = () => {
        inputRef.current.select();
        // document.querySelector('input').select();
    }

  return (
    <>
        <h2>Focus Screen</h2>
        <hr />

        <input 
            ref={inputRef}
            type="text"
            placeholder="Ingrese su nombre"
            className="form-control" 
        />

        <button
            className="btn btn-primary mt-3"
            onClick={onClick}
        >
            Set focus
        </button>
    </>
  )
}