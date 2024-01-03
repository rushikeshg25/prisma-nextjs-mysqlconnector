"use client"


import React from 'react'
import { Button } from '../ui/button'
import { useRouter } from 'next/navigation'

const Loginbutton = () => {

    const router=useRouter();
    const LoginHandler=()=>{
        console.log("Login")
        router.push("/auth/login")
    }

  return (
    <div className='flex items-center justify-center h-screen'><Button onClick={LoginHandler}>Login</Button></div>
  )
}

export default Loginbutton