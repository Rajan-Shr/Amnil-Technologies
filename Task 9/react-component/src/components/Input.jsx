import "./Input.css"

function Input(props) {
    const id = props.label ? props.label.replace(/\s+/g, '-').toLowerCase() : '';

    return (
        <div className="input-container">
            {props.label ?
                <label htmlFor={id} className="input-label">{props.label}</label>
                : ""
            }
            <input
                id={id}
                type="text"
                placeholder={props.placeholder}
                className="input-field"
            />
        </div>
    );
}

export default Input;
