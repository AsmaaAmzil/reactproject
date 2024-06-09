import {useState} from 'react';
import Modal from './modal';
import "./modal.css"

export default function ModalTest(){
  const [showModalPopup,setShowModalPopup]=useState(false);
  function handleClick(){
    setShowModalPopup(!showModalPopup);
  }
  function onClose(){
    setShowModalPopup(false);
  }
  return <div>
    <button onClick={handleClick}>Open Modal Popup</button>
  {showModalPopup &&<Modal id={'custom-id'} 
  header={<h1>Customized header</h1>}
  body={<h1>Customized body</h1>}
  footer={<h1>Customized footer</h1>}
  onClose={onClose}/>}
  </div>
}