import Image from "next/image";



export default function Product(props){
    return(
        <>
            <h1>name <span>{props.name}</span></h1>
            <h1>price <span>${props.price}</span></h1>
           
            
            <Image src={props.img} width={300} height={300} alt='deku'/>
            
        </>
    )
}

