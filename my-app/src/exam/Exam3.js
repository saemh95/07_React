// State & Props

import { useState } from "react"

// State lifting up
// Parent component can't change childrens component

// Id component
// Pw component
// Exam3 component

// function Id () {

// }

const Id = (props) => {
    //const [id, setId] = useState("");

    const {onChangeId} = props;

    return (
        // use JSX for html
        <>
            <div>
                <label>
                    ID : 
                </label>
                <input onChange={onChangeId}/>

            </div>
        </>
    );
}

const Pw = ({onChangePw}) => {
    //const [pw, setPw] = useState("");
        
    return (
        // use JSX for html
        <>
            <div>
                <label>
                    PW : 
                </label>
                <input onChange={onChangePw}/>

            </div>
        </>
    );
}



const Exam3 = () => {

    const [id, setId] = useState("");
    const [pw, setPw] = useState("");

    const onChangeId = (e) => {
        setId(e.target.value);
    }
    const onChangePw = (e) => {
        setPw(e.target.value);
    }

    return (
        <>
            <Id onChangeId={onChangeId}></Id>
            <Pw onChangePw={onChangePw}></Pw>
            
            <div>
                <button disabled={id.length === 0 || pw.length === 0}>Login</button>
            </div>
        </>
    );

}


export default Exam3;
