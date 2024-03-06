"use client"
import Image from 'next/image'
import { notFound } from 'next/navigation'
import React from 'react'

// destruct  the params variable into our component
export default function Personality( {params}) {
   const persons={
    obed:[
        {
            id:1,
            name:"obed",
            url:"https://images.unsplash.com/photo-1709428905196-a382e75a38e2?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw0M3x8fGVufDB8fHx8fA%3D%3D"
        }
    ],
    doz:[
        {
            id:2,
            name:"doz",
            url:"https://images.unsplash.com/photo-1709507787348-feae23d9c674?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw0OXx8fGVufDB8fHx8fA%3D%3D"
        }
    ],
    fortune:[
        {
            id:3,
            name:"fortune",
            url:'https://plus.unsplash.com/premium_photo-1672907031609-16b4d3db8bc6?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyfHx8ZW58MHx8fHx8'
        }
    ],
   }
console.log(params)
console.log(params.id)
let personName=params.id

let datas=persons[personName]
console.log(datas)
// if user is  not found , return a not found page
if(!datas){
    return notFound()
}


    return (
        <div>
           { 
           datas.map((data)=>{
            return(
                <>
                <h1>This is the personality page of {data.name}</h1>
                <Image width={400} height={300} alt={data.name} src={data.url}/>
                
                </>
            )
           })
           }
        </div>
    )
}
