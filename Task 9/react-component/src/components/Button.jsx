import "./Button.css"

function Button(props)
{
    return(
        <>
            <button className={props.variant}>{props.text}</button>
        </>
    );
}   

export default Button;