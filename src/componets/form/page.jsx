
"use client"
import React from 'react'
import styles from './page.module.css'
import { Poppins } from 'next/font/google'
import { MdOutlineSend } from "react-icons/md";
import { BsSendExclamation } from "react-icons/bs";
 
const roboto = Poppins({
  weight: '400',
  subsets: ['latin'],
  display: 'swap',
})

export default function Form() {
    function handleSubmit(e){
        console.log(e)
        // prevent sdefault form submission
        e.preventDefault()

        // take form values
        let username= e.target[0].value
        let lastname= e.target[1].value
        let email= e.target[2].value
        let phone= e.target[4].value
        username='@'+username   
        console.log(username, email, phone)

    }
    return (
        <div className={styles.container}>
            <form action="" className={styles.form} onSubmit={handleSubmit}>
                <div className={styles.formGroup}>
                   
                    <label htmlFor="" className={`${styles.formLabel} ${roboto.className}`}>Username</label>
                    <input type="text" className={styles.formControl} />
                </div>
                <div className={styles.formGroup}>
                   
                    <label htmlFor="" className={`${styles.formLabel} ${roboto.className}`}>Lastname</label>
                    <input type="text" className={styles.formControl} />
                </div>

                <div className={styles.formGroup}>
                    <label htmlFor="" className={styles.formLabel}>Email</label>
                    <input type="email" className={styles.formControl} />
                </div>

                <input type="checkbox" value="male" />
                <div className={styles.formGroup}>
                    <label htmlFor="" className={styles.formLabel}>Phone</label>
                    <input type="tel" className={styles.formControl} />
                </div>



                <button className={styles.btn}> Submit  <MdOutlineSend className={styles.sendonit}/></button>
            </form>
        </div>
    )
}
