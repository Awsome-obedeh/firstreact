import Link from "next/link";
import styles from './page.module.css'

export default function Navbar(){
    return(
        <>
            <div className={styles.nav}>
               
                <Link href='/' className={styles.link}>Home</Link>
                <Link href='/about' className={styles.link}>About</Link>
                <Link href='/contact' className={styles.link}>Contact</Link>
            </div>
        </>
    )
}