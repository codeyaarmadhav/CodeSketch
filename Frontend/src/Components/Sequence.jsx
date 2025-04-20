import { useState } from "react";
import plantumlEncoder from "plantuml-encoder";
import Title from "./Title";
import SubTitle from "./SubTitle";

export default function SequenceDiagram() {
  const [umlImage, setUmlImage] = useState("");

  const [participants, setParticipants] = useState([]);
  const [participantInput, setParticipantInput] = useState("");

  const [messages, setMessages] = useState([]);
  const [msgInput, setMsgInput] = useState({ from: "", to: "", message: "" });

  // Add Participant
  const addParticipant = () => {
    if (participantInput.trim()) {
      setParticipants([...participants, participantInput.trim()]);
      setParticipantInput("");
    }
  };

  // Add Message
  const addMessage = () => {
    if (msgInput.from && msgInput.to && msgInput.message.trim()) {
      setMessages([...messages, { ...msgInput }]);
      setMsgInput({ from: "", to: "", message: "" });
    }
  };

  // Remove Participant
  const removeParticipant = (index) => {
    const updated = participants.filter((_, i) => i !== index);
    setParticipants(updated);
  };

  // Remove Message
  const removeMessage = (index) => {
    const updated = messages.filter((_, i) => i !== index);
    setMessages(updated);
  };

  // Generate PlantUML Code
  const generatePlantUML = () => {
    let code = "@startuml\n";

    participants.forEach((p) => {
      code += `participant ${p}\n`;
    });

    messages.forEach(({ from, to, message }) => {
      code += `${from} -> ${to} : ${message}\n`;
    });

    code += "@enduml";
    return code;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const encodedUml = plantumlEncoder.encode(generatePlantUML());
      const imageUrl = `http://www.plantuml.com/plantuml/png/${encodedUml}`;
      setUmlImage(imageUrl);
    } catch (error) {
      console.error("Error generating UML:", error);
    }
  };

  const handleDownload = async () => {
    try {
      const response = await fetch(umlImage, { mode: "cors" });
      const blob = await response.blob();
      const url = window.URL.createObjectURL(blob);
      const link = document.createElement("a");
      link.href = url;
      link.download = "sequence-diagram.png";
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      window.URL.revokeObjectURL(url);
    } catch (error) {
      console.error("Download failed", error);
      alert("Failed to download image. Try right-click > Save Image As.");
    }
  };

  return (
    <div>
      <Title text1="Sequence Diagram" text2="Generator" />

      <SubTitle text1="Add Participants" />
      <div className="mb-2">
        <input
          type="text"
          placeholder="Enter Participant (e.g., User)"
          value={participantInput}
          onKeyDown={(e) => { if (e.key === "Enter") addParticipant(); }}
          onChange={(e) => setParticipantInput(e.target.value)}
          className="border p-2 rounded w-full"
        />
        <button onClick={addParticipant} className="bg-[#e6e6e6] text-gray-700 p-2 my-2 w-full rounded cursor-pointer">
          Add Participant
        </button>
      </div>

      {participants.length > 0 && (
        <div className="mb-4">
          <SubTitle text1="Participants" />
          {participants.map((p, index) => (
            <div key={index} className="flex justify-between items-center border px-3 py-2 rounded-lg shadow m-2 bg-white">
              <p>{p}</p>
              <button
                className="bg-[#a0a7ac] text-white text-xs md:text-sm rounded p-1"
                onClick={() => removeParticipant(index)}
              >
                Remove
              </button>
            </div>
          ))}
        </div>
      )}

      <SubTitle text1="Add Messages" />
      <div className="mb-2">
        <div className="md:flex justify-between items-center gap-5">
          <select
            value={msgInput.from}
            onChange={(e) => setMsgInput({ ...msgInput, from: e.target.value })}
            className="border p-2 rounded my-1 w-full md:w-1/3"
          >
            <option>From</option>
            {participants.map((p) => (
              <option key={p} value={p}>{p}</option>
            ))}
          </select>

          <select
            value={msgInput.to}
            onChange={(e) => setMsgInput({ ...msgInput, to: e.target.value })}
            className="border p-2 rounded my-1 w-full md:w-1/3"
          >
            <option>To</option>
            {participants.map((p) => (
              <option key={p} value={p}>{p}</option>
            ))}
          </select>

          <input
            type="text"
            placeholder="Message"
            value={msgInput.message}
            onChange={(e) => setMsgInput({ ...msgInput, message: e.target.value })}
            className="border p-2 rounded my-1 w-full md:w-1/3"
          />
        </div>

        <button onClick={addMessage} className="bg-[#e6e6e6] text-gray-700 p-2 my-2 w-full rounded cursor-pointer">
          Add Message
        </button>
      </div>

      {messages.length > 0 && (
        <div>
          <SubTitle text1="Messages" />
          {messages.map((m, index) => (
            <div key={index} className="flex justify-between items-center border px-3 py-2 rounded-lg shadow m-2 bg-white">
              <p className="text-sm md:text-base">
                {m.from} → {m.to}: <strong>{m.message}</strong>
              </p>
              <button
                className="bg-[#a0a7ac] text-white text-xs md:text-sm rounded p-1"
                onClick={() => removeMessage(index)}
              >
                Remove
              </button>
            </div>
          ))}
        </div>
      )}

      <button className="bg-[#a0a7ac] text-white p-2 my-6 w-full rounded cursor-pointer" onClick={handleSubmit}>
        Generate Diagram
      </button>

      {umlImage && (
        <div>
          <SubTitle text1="Generated Sequence Diagram" />
          <div className="flex flex-col items-center my-6">
            <img src={umlImage} alt="Sequence Diagram" />
          </div>
          <div className="p-4">
            <button
              onClick={handleDownload}
              className="bg-[#a0a7ac] text-white p-2 my-2 w-full rounded cursor-pointer"
            >
              Download Diagram
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
