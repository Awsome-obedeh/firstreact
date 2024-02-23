import Link from "next/link";
import Navbar from "@/componets/navbar/page";
import Footer from "@/componets/footer/page";


export default function Home() {
  return (

    <div>
    
    <h1>my first next site</h1>

    <h2>hweyyy</h2>

    <a href="/about">go to about</a>
    <div>

    <Link href="/about">About</Link>
    </div>

    
   
    </div>
  );
}
