import React from 'react'
import MessageContainer from '../components/messages/MessageContainer';
import Sidebar from '../components/Sidebar/Sidebar';

function home() {
  return (
    <div className='flex sm:h-[450px] md:h-[550px] rounded-lg overflow-hidden bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0'>

    <Sidebar/>
    <MessageContainer/>
    </div>
  )
}

export default home