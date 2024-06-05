import { useState } from "react";

function Exam4() {
    const [name, setName] = useState("홍길동");

    const handleClick = () => {
        setName("고길동");
    }

    return (
        <>
            <Child1 name={name}/>
            <button onClick={handleClick}>이름 변경</button>
        </>
    );
}

function Child1(props) {
    return <Child2 name={props.name} />
}

function Child2(props) {
    return <Child3 name={props.name} />
}

function Child3(props) {
    return <MyComponent name={props.name} />
}

function MyComponent(props) {
    return <h1>{props.name}</h1>
}


export default Exam4;