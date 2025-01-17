// ================== All Imports
import React, { useState }      from 'react'
import { ImEye, ImEyeBlocked }  from 'react-icons/im'

const FormFunction = () => {

    // ================== All Use-States
    const [email,      setEmail] =        useState("")
    const [pass,       setPass] =         useState("")
    const [emailError, setEmailError] =   useState("")
    const [passError,  setPassError] =    useState("")
    const [show,       block] =           useState(true) // for toggle

    // ================== All Functions

    //  for handeling email
    const handleEmail = (e) => {
        setEmail        (e.target.value)
        setEmailError   ("")
    }

    //  for handeling password
    const handlePass = (e) => {
        setPass        (e.target.value)
        setPassError   ("")       
    }

    //  for handeling submit button
    const handleSubmit = (e) => {
        e.preventDefault()

        if (!email) {
            setEmailError("Please! Enter Your Email")
        }
        if (!pass) {
            setPassError ("Please! Enter Password")
        }
    }

    //  for toggle
    const showPass = () => {
        block(!show)
    }

    return (
        <>
            {/* ===================== Login Form ===================== */}
            <form className='mt-[58px]' onSubmit={handleSubmit}>

                {/* ===================== Email Part ===================== */}
                <label className='relative'>
                    <input onChange={handleEmail} type="email" placeholder='Enter Email' className='w-full h-[62px] border-[2px] border-[#1E1E1E] pl-4 text-[22px] font-Roboto font-light rounded-lg outline-none' />
                    <p className='absolute text-white mix-blend-difference top-[-40px] left-2 text-sm animate-pulse'>{emailError}</p>
                </label>

                {/* ===================== Password Part ===================== */}
                <label className='relative'>
                    <input onChange={handlePass} type={show? "password" : "text"} placeholder='Enter Password' className='w-full h-[62px] border-[2px] border-[#1E1E1E] pl-4 text-[22px] font-Roboto font-light rounded-lg mt-[22px] outline-none' />
                    <p className='absolute text-white mix-blend-difference top-[-40px] left-2 text-sm animate-pulse'>{passError}</p>

                    {/* ---------------- for password show/block toggle ---------------- */}
                    {
                        show ?
                        <ImEyeBlocked onClick={showPass} className='absolute top-[-5px] right-6 text-3xl cursor-pointer' type='password' />
                        :
                        <ImEye onClick={showPass} className='absolute top-[-5px] right-6 text-3xl cursor-pointer' type='text' />
                    }

                </label>

                {/* ===================== for password forgot ===================== */}
                <p className='mix-blend-difference text-white text-end mt-[10px] text-[18px] font-Roboto font-light'>Forgot Passwowrd?</p>

                {/* ===================== for log-in button ===================== */}
                <button className='w-full h-[64px] bg-white hover:mix-blend-difference outline-none rounded-lg mt-12 font-black font-Roboto text-lg border-[2px] border-[#1E1E1E]'>Log In</button>
            </form>
        </>
    )
}

export default FormFunction