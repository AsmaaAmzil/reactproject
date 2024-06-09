import {useState} from 'react';
import QrCode from 'react-qr-code';

export default function QrCodeGenerator(){
  const [qrCode,setQrCode]=useState("");
  const [input,setInput]=useState("");
  function handleGenerateQrCode(){
    setQrCode(input);
    setInput('');
  }
  return (
    <div>
      <h1>Generateur de QR Code
      </h1>
   <div>
   <input 
    onChange={(e)=>{
      setInput(e.target.value);
    }}
    type="text"
    value= {input}
    placeholder='Entrez votre valeur ici!'
     />
     <button
     disabled={ input && input.trim() !==''? false :true }
     onClick={handleGenerateQrCode}
     >Generate</button>
   </div>
   <div>
   <QrCode id="qr-code" value={qrCode} size={400} bgColor='#fff'
     />
   </div>
  </div>
  )
}