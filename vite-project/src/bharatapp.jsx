import { useState } from "react";

function BharatsApp(){

    let [count , setCount] = useState(0);

    function handleOnClick(){
        count++;
        setCount(count);
    }

    return (
        <>
            <button onClick={handleOnClick}>Click me heheheh</button>
            {count === 0 ? <h1>Nothing To render, please hit the button</h1> : <h1>Count is {count}</h1>}
        </>
    )

}

export default BharatsApp;