"use client"
import axios from "axios";
import Image from "next/image";
import { useEffect, useState } from "react";



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

            <Blogpost/>
            
        </>
    )
}

export function Blogpost(){
    const [blogs,setBlog]=useState([]);
  async function getBlogPost(){
        const res=await axios.get('https://jsonplaceholder.typicode.com/posts');
        console.log(res.data)
        // set blog state to res.data
        setBlog(res.data)
        
    }
    useEffect(()=>{
        getBlogPost()
        
    }, [])
    // console.log(blogs)
    return(
       
        <h1>My blog</h1>
    )
}

