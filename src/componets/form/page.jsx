
"use client"
import React, { useState } from 'react'
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
    // set error message state
   const [errMsg, setErrMsg]=useState('')

    // s
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
        //  validation
        if(!username){
            setErrMsg("firstname cannot be empty")
        }   
        else if(!lastname){
            setErrMsg("lastname cannot be empty")
        }   
        else if(!email){
            setErrMsg("email cannot be empty")
        }   
        else if(!phone){
            setErrMsg("phone cannot be empty")
        }   

    }
    return (
        <div className={styles.container}>
            <form action="" className={styles.form} onSubmit={handleSubmit}>

               
                {/* conditional rendering using conditionals */}
                {
                  errMsg && <div className={styles.err}>
                    <p>{errMsg}</p>
                </div> 
                }

                {/* conditional rendering using tenary */}
                {
                  errMsg ? <div className={styles.err}>
                    <p>{errMsg}</p>
                </div> : ''
                }
                
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
