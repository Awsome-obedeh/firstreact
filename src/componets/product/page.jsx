"use client"
import Image from "next/image";
import { useState } from "react";



export default function Product(props){
    const [counter, setCounter] = useState(0)

    const minus = () =>{
        setCounter(counter-1)
    }
    return(
        <>
            <h1>name <span>{props.name}</span></h1>
            <h1>price <span>${props.price}</span></h1>
           <div>
            <button  onClick={minus}>
                -
            </button>
            {counter}
            <button className="btn btn-warning" onClick={()=>setCounter(counter+1)}>
                +
            </button>
           </div>
            
            <Image src={props.img} width={300} height={300} alt='deku'/>
            
        </>
    )
}

