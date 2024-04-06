function Button(props) {
    let fn = props.onClick;
    return (
        <button onClick={fn}>
            {props.text}
        </button>
    );
}

export default Button;