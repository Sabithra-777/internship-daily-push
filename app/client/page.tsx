'use client'
import Counter from "../Counter";
function ClientComponent(){
    function handleClick(){
        alert("button clicked");
    }
    return (
        <>
        <h1>This is client route</h1>
        <Counter/>
        <button onClick={handleClick}>Click</button>
        </>
    )
}

export default ClientComponent;

// If a route or a page is Client Side component and it is importing other component
// then the other component need not to be client side component,
// it will automatically become a client component