import React, { useState } from "react";
let count2=0;

console.log("123");
const UseState=()=>{
 console.log("abc");

    let [count,setcount]=useState(0);
    function fun1(){
       setcount(count+1);
        console.log(count);
       
    }
    count2++;

return(
    <div>
    <div>{count}</div>
    <button onClick={fun1}>increase</button>
    <div>{count2}</div>
    </div>
)



}
export default UseState