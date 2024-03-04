"use client"
import Link from "next/link";
import styles from './page.module.css'
import Product from "@/componets/product/page";
import Image from "next/image";
import { useState } from "react";

let products = [
  {
    id: 1,
    title: "iPhone 9",
    description: "An apple mobile which is nothing like apple",
    price: 549,
    discountPercentage: 12.96,
    isDiscounted: true,
    rating: 4.69,
    stock: 94,
    brand: "Apple",
    category: "smartphones",
    thumbnail: "https://plus.unsplash.com/premium_photo-1681668034181-cc40e59acbd5?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8cGhvbmVzfGVufDB8fDB8fHww",
    images: [
      "https://i.dummyjson.com/data/products/1/1.jpg",
      "https://i.dummyjson.com/data/products/1/2.jpg",
      "https://i.dummyjson.com/data/products/1/3.jpg",
      "https://i.dummyjson.com/data/products/1/4.jpg",
      "https://i.dummyjson.com/data/products/1/thumbnail.jpg",
    ],
  },

  {
    id: 2,
    title: "iPhone X",
    description:
      "SIM-Free, Model A19211 6.5-inch Super Retina HD display with OLED technology A12 Bionic chip with ...",
    price: 899,
    discountPercentage: 17.94,
    isDiscounted: true,
    rating: 4.44,
    stock: 34,
    brand: "Apple",
    category: "smartphones",
    thumbnail: "https://plus.unsplash.com/premium_photo-1666299892720-f5ea52b8b7c5?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fHBob25lc3xlbnwwfHwwfHx8MA%3D%3D",
    images: [
      "https://i.dummyjson.com/data/products/2/1.jpg",
      "https://i.dummyjson.com/data/products/2/2.jpg",
      "https://i.dummyjson.com/data/products/2/3.jpg",
      "https://i.dummyjson.com/data/products/2/thumbnail.jpg",
    ],
  },

  {
    id: 3,
    title: "Samsung Universe 9",
    description:
      "Samsung's new variant which goes beyond Galaxy to the Universe",
    price: 1249,
    discountPercentage: 15.46,
    isDiscounted: true,
    rating: 4.09,
    stock: 36,
    brand: "Samsung",
    category: "smartphones",
    thumbnail: "https://images.unsplash.com/photo-1569183091671-696402586b9c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHBob25lc3xlbnwwfHwwfHx8MA%3D%3D",
    images: ["https://i.dummyjson.com/data/products/3/1.jpg"],
  },
  {
    id: 4,
    title: "OPPOF19",
    description: "OPPO F19 is officially announced on April 2021.",
    price: 280,
    discountPercentage: 17.91,
    isDiscounted: false,
    rating: 4.3,
    stock: 123,
    brand: "OPPO",
    category: "smartphones",
    thumbnail: "https://images.unsplash.com/photo-1613688270362-8b26189c0782?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fHBob25lc3xlbnwwfHwwfHx8MA%3D%3D",
    images: [
      "https://i.dummyjson.com/data/products/4/1.jpg",
      "https://i.dummyjson.com/data/products/4/2.jpg",
      "https://i.dummyjson.com/data/products/4/3.jpg",
      "https://i.dummyjson.com/data/products/4/4.jpg",
      "https://i.dummyjson.com/data/products/4/thumbnail.jpg",
    ],
  },
  
  {
    id: 5,
    title: "Huawei P30",
    description:
      "Huawei’s re-badged P30 Pro New Edition was officially unveiled yesterday in Germany and now the device has made its way to the UK.",
    price: 499,
    discountPercentage: 10.58,
    isDiscounted: true,
    rating: 4.09,
    stock: 32,
    brand: "Huawei",
    category: "smartphones",
    thumbnail: "https://images.unsplash.com/photo-1597740985671-2a8a3b80502e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fHBob25lc3xlbnwwfHwwfHx8MA%3D%3D",
    images: [
      "https://i.dummyjson.com/data/products/5/1.jpg",
      "https://i.dummyjson.com/data/products/5/2.jpg",
      "https://i.dummyjson.com/data/products/5/3.jpg",
    ],
  },
  {
    id: 5,
    title: "Huawei P30",
    description:
      "Huawei’s re-badged P30 Pro New Edition was officially unveiled yesterday in Germany and now the device has made its way to the UK.",
    price: 499,
    discountPercentage: 10.58,
    isDiscounted: true,
    rating: 4.09,
    stock: 32,
    brand: "Huawei",
    category: "smartphones",
    thumbnail: "https://images.unsplash.com/photo-1597740985671-2a8a3b80502e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fHBob25lc3xlbnwwfHwwfHx8MA%3D%3D",
    images: [
      "https://i.dummyjson.com/data/products/5/1.jpg",
      "https://i.dummyjson.com/data/products/5/2.jpg",
      "https://i.dummyjson.com/data/products/5/3.jpg",
    ],
  },
]


export default function Home() {
  const [counter, setCounter] = useState(0)
  return (

    <div>

      <h1>my first next site</h1>

      <h2>hweyyy</h2>

      <a href="/about">go to about</a>
      <div>

        <Link href="/about">About</Link>
      </div>

      <div className={styles.container}>
        <div>
          <Product
            name='index product 1'
            price={5.00}
            img="/image.PNG"
          />

        </div>
        <div>
          <Product
            name='index product 2'
            price={45.00}
            img="https://img.freepik.com/premium-photo/3d-render-arabic-lamp-dune-realistic-crescent-moon-islamic-religious-concept_1302-41758.jpg?size=626&ext=jpg&ga=GA1.1.489069304.1699093075&semt=sph"
          />

        </div>
        <div>
          <Product
            name='index product 3'
            price={15.00}
            img="https://images.unsplash.com/photo-1708443683295-5b9b4a125687?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          />

        </div>

      </div>
      <div className={styles.products}>
        {
          
        products.map((product)=>{
          return(
            <div className={styles.con} key={product.id}>
              < Image src={product.thumbnail} width={300} height={400} alt={product.title}/>
              <p>{product.title}</p>
              <small>$ {product.price}</small>
              <del> {product.price}</del>
              {
                product.isDiscounted  && (
                  <p className={styles.discount}>{product.discountPercentage}</p>
                )
              }
              <div>
              <button className="btn btn-warning" onClick={()=>setCounter(counter-1)}>
                -
            </button>
            {counter}
            <button className="btn btn-warning" onClick={()=>setCounter(counter+1)}>
                +
            </button>
                </div>
              
            </div>


          )
        })
        }

      </div>
    </div>
  );
}
