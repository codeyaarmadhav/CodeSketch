import React from "react";
import SubTitle from "../SubTitle";
import { useSequenceContext } from "../../context/SequenceContext";
import { toast } from 'react-toastify';

function SequenceInputSection() {
  const { objects, setObjects, objectInput, setObjectInput,
    messages, setMessages, messageInput, setMessageInput } = useSequenceContext();

  //Add Object
  function addObject() {
    if (objectInput === "") {
      toast.error("Object Name can not be empty")
      return;
    };
    setObjects([...objects, objectInput]);
    setObjectInput("");
    toast.success("Object Added")
  }

  //Add Message
  function addMessage(){
    if(messageInput.from.length === 0){
      toast.error("Please select Sender");
      return;
    } else if(messageInput.to.length === 0){
      toast.error("Please select Sender");
      return;
    } else if(messageInput.message.length === 0){
      toast.error("Message can not be empty");
      return;
    }
    setMessages([...messages, messageInput]);
    setMessageInput({from:"", to:"", message:"", type:"->"})
    toast.success("Message Added");
  }

  return (
    <div>
      <SubTitle text1={"Add Objects"} />
      <div>
        <input
          value={objectInput}
          onChange={(e) => setObjectInput(e.target.value)}
          className="border p-2 rounded w-full"
          placeholder="Object Name"
          type="text"
          onKeyDown={(e) => {if(e.key === "Enter"){addObject()}}}
        />
        <button
          className="bg-[#e6e6e6] text-gray-700 p-2 my-2 w-full rounded cursor-pointer"
          onClick={addObject}
        >
          Add Object
        </button>
      </div>

      <SubTitle text1={"Add Message"} />
      <div className="mb-2">
        <div className="md:flex justify-between items-center gap-5">
          <select
            value={messageInput.from}
            onChange={(e) => setMessageInput({...messageInput, from: e.target.value})}
            className="border p-2 my-1 md:m-0 rounded w-full md:w-1/2"
          >
            <option>Sender</option>
            {
              objects.map((obj) => (
                <option key={obj} value={obj}>{obj}</option>
              ))
            }
          </select>

          <select
            value={messageInput.to}
            onChange={(e) => setMessageInput({...messageInput, to: e.target.value})}
            className="border p-2 my-1 md:m-0 rounded w-full md:w-1/2"
          >
            <option>Receiver</option>
            {
              objects.map((obj) => (
                <option key={obj} value={obj}>{obj}</option>
              ))
            }
          </select>

          <select
            onChange={(e) => setMessageInput({...messageInput, type: e.target.value})}
            className="border p-2 my-1 md:m-0 rounded w-full md:w-1/2"
          >
            <option value={"->"}>Synchronous</option>
            <option value={"->"}>Asynchronous</option>
            <option value={"-->"}>Response</option>
          </select>

          <input value={messageInput.message} onChange={(e) => setMessageInput({...messageInput, message: e.target.value})} placeholder="Enter Message" type="text" className="border p-2 rounded w-full my-1"/>
        </div>
        
        <button onClick={addMessage} className="bg-[#e6e6e6] text-gray-700 p-2 my-2 w-full rounded cursor-pointer">Add Message</button>

      </div>
    </div>
  );
}

export default SequenceInputSection;
