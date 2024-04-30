import { useState } from "react";
import QRCode from "react-qr-code";

export default function QRCodeGenerator() {
 
  const [qrCode, setQRCode] = useState("");
  const [input, setInput] = useState("");

  const handleQrCodeGenerate = () => {
    setQRCode(input);
    setInput("");
  }

  const handleEnter = (e) => {
    if(e.key === 'Enter') {
        handleQrCodeGenerate();
    }
  }

  return (
    <div className="flex flex-col">
      <h1 className="text-center m-7 font-semibold text-2xl">QR Code Generator</h1>
      <div className="flex justify-center gap-7">
        <input
        onChange={(e) => setInput(e.target.value)}
          type="text"
          className="text-lg px-3 py-2 rounded-lg bg-gray-700"
          name="qr-code"
          value={input}
          onKeyDown={handleEnter}
          placeholder="Enter your value here"
        />
        <button disabled={input && input.trim() !== "" ? false : true} className="bg-gray-600 px-8 hover:bg-gray-500 cursor-pointer rounded-full text-lg active:border-gray-500 border-4"
          onClick={handleQrCodeGenerate}
        >
          Generate
        </button>
      </div>
      <div className="flex justify-center">
      <div className="flex justify-center mt-28 border-[1px] p-6 w-80 items-center bg-gray-700">
        <QRCode value={qrCode} size={400} id="qr-code-value" bgColor="#fff" className=" w-72 h-64"/>
      </div>
      </div>
    </div>
  );
}