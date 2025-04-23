import { CloseSquare } from 'iconsax-reactjs'
import React from 'react'
import Login from '../LoginAndRegister/Login'
import Register from '../LoginAndRegister/Register'

type Props = {
    setIsOpen: React.Dispatch<React.SetStateAction<boolean>>
}

function LoginModal({setIsOpen}: Props) {
    const [isLogin, setIsLogin] = React.useState(true)
  return (
    <div className='w-full h-screen bg-[#171717] absolute top-0 left-0 z-50 p-3'>
        <div className="close absolute left-10 top-10 cursor-pointer "  onClick={()=>setIsOpen(false)}><CloseSquare color='#fff'/></div>
        <div className='w-full h-full flex justify-center items-center'>
            <div className="w-1/5 max-xl:w-1/2  max-md:w-full border p-3 bg-[#111111]  rounded-2xl border-gray-600 h-fit ">
              {
                isLogin ? <Login setisLogin={setIsLogin}/> : <Register setisLogin={setIsLogin}/>
              }
            </div>
        </div>
    </div>
  )
}

export default LoginModal