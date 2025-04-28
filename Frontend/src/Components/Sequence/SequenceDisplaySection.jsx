import React from 'react'
import SubTitle from '../SubTitle.jsx'
import { useSequenceContext } from '../../context/SequenceContext.jsx';
import {toast } from 'react-toastify'

function SequenceDisplaySection() {
  const { objects, setObjects, objectInput, setObjectInput,
    messages, setMessages, messageInput, setMessageInput } = useSequenceContext();

  //remove object 
  function removeObject(index){
    setObjects(objects.filter((_, i) => {
      i !== index
    }));
    toast.success("Object removed");
  }
  
  //remove message
  function removeMessage(index){
    setMessages(messages.filter((_, i) => {
      i !== index;
    }));
    toast.success("Message removed");
  }

  return (
    <div>
      <div className={`${objects.length > 0 ? "flex" : "hidden"} flex-col w-full md:w-1/2 `}>
        <SubTitle text1={"Objects"} />
        <div>
          {objects.map((object, index) => (
            <div key={index} className="flex items-center justify-between w-full rounded-lg shadow-lg bg-white transition-shadow duration-300 text-base ease-in-out border-gray-400 border px-3 py-2 m-2">
              <p>{object}</p>
              <button className="bg-[#a0a7ac] text-white text-xs md:text-sm rounded p-1" onClick={() => removeObject(index)}>Remove</button>
            </div>
          ))}
        </div>
      </div>

      <div className={`${messages.length > 0 ? "flex" : "hidden"} flex-col w-full mb-2 `}>
        <SubTitle text1={"Messages"} />
        <div>
          {messages.map((message, index) => (
            <div key={index} className="flex items-center justify-between w-full rounded-lg shadow-lg bg-white transition-shadow duration-300 text-base ease-in-out border-gray-400 border px-3 py-2 m-2 gap-2">
              <p className="bg-gray-100 text-xs md:text-sm rounded p-1 w-1/3">Sender:  <span>{message.from}</span></p>
              <p className="bg-gray-100 text-xs md:text-sm rounded p-1 w-1/3">Receiver:  <span>{message.to}</span></p>
              <p className="bg-gray-100 text-xs md:text-sm rounded p-1 w-1/3">Type:  <span>{message.type === "->" ? "Synchronous" : message.type === "->" ? "Asynchronous" : "Response" }</span></p> 
              <p className="bg-gray-100 text-xs md:text-sm rounded p-1 w-1/3">Message:  <span>{message.message}</span></p>
              <button className="bg-[#a0a7ac] text-white text-xs md:text-sm rounded p-1" onClick={() => removeMessage(index) }>Remove</button>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default SequenceDisplaySection