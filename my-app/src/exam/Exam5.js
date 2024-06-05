import { useState } from "react";

function Exam5() {
    const [userData, setUserData] = useState({name : '홍길동', age : 30});

    return <MyComponent {...userData} />
}

function MyComponent(props) {
    const {name, age} = props;

    const content = `안녕하세요 제 이름은 ${name} 이고, 나이는 ${age}세 입니다`;
    return <h3>{content}</h3>

}

export default Exam5;