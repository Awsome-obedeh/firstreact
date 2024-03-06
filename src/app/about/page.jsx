
import Product from "@/componets/product/page"
import Link from "next/link"

export default function About(){
    return(

        <>  
       
        <h1>this is the about page</h1>
        <Product

        name="about products"
        price="10.00"
        img="/Capture.PNG"/>
        <Link href="/about/obed">About obed</Link>
        <Link href="/about/doz">About Doz</Link>
        <Link href="/about/fortune">About fortune</Link>
        </>

    )
}