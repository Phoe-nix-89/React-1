function Person(props) {
    let name = "Name : ";
    let age = "Age : ";
    return (
        <>
            <p>
                {name}{props.name}
            </p>
            <p>
                {age}{props.age}
            </p>
        </>
    );
}

export default Person;