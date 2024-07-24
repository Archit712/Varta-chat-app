import React from 'react'
import { RxAvatar } from "react-icons/rx";

function Message() {
  return (
    <div className='chat chat-end'>
        <div className='chat-image avatar w-8 h-10 text-black'>
            <div className='w-10 rounded-full'>

            <RxAvatar />
            </div>
        </div>
        <div className='chat-bubble text-white bg-blue-900'>Hi!!</div>
        <div className='chat-footer opacity-50 text-xs flex gap-1 items-center'>12:43</div>
    </div>
  )
}

export default Message