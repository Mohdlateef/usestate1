import React from "react";



const Usestate=()=>{
 

    let [count,setcount]=Usestate(0)
    function fun1(){
        console.log(count);
       
    }

return(
    <div>
    <div>{count}</div>
    <button onClick={fun1}>{count}</button>
    </div>
)



}
export default Usestate