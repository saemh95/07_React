// JSX(Javascrip Xml) 사용하기


function Exam6_1(props) {

    const isLogin = props.isLogin;

    // if(isLogin) {
    //     return <h1>Hello World</h1>;
    // } else {
    //     return <h1>Please sign up.</h1>;
    // }

    return (
        isLogin ? <h1>Hello World</h1> : <h1>Please sign up.</h1>
    )

}


export function Exam6_2() {

    const numbers = [1,2,3,4,5];
    const listItems = numbers.map( (number) => <li>{number}</li>);
    
    return <ul>{listItems}</ul>

}

export function Exam6_3(props) {
    
    const lable = props.label;

    const handleClick = () => {
        alert("버튼 클릭되었음");
    }

    return (
       <button onClick={handleClick}>{lable}</button> 
    )

}

export default Exam6_1;

