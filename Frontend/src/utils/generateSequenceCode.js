import { useSequenceContext } from '../context/SequenceContext';

function generateUMLCode() {
  const {messages} = useSequenceContext();

  let code = "@startuml\n"

  messages.forEach((message) => {
    code += `"${message.from}" ${message.type} "${message.to}" :"${message.message}"\n`
  })
    
  code += "@enduml"
  return code
}

export default generateUMLCode