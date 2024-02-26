import Link from "next/link";
import styles from './page.module.css'
import Product from "@/componets/product/page";


export default function Home() {
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

    </div>
  );
}
