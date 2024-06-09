import React, { useState } from 'react';
import data from './data'
import './styles.css';
//single selection
//multiple selection


export default function Accordian() {
  const [selected, setSelected] = useState(null);
  const [enableMultiSection,setEnableMultiSection]=useState(false);
  const [multiple,setMultiple]=useState([]);

  function handleSingleSelection(getCurrentId) {
    setSelected(getCurrentId === selected ? null : getCurrentId);
  }


  function handleMultiSelection(getCurrentId){
    let cpyMultiple=[...multiple];
    const findIndexOfCurrentId=cpyMultiple.indexOf(getCurrentId);
    console.log(findIndexOfCurrentId);
    if(findIndexOfCurrentId === -1) cpyMultiple.push(getCurrentId);
    else cpyMultiple.splice(findIndexOfCurrentId,1);
    setMultiple(cpyMultiple);
  }
  console.log(selected,multiple);
  return <div className="wrapper">
    <button onClick={()=>setEnableMultiSection(!enableMultiSection)}>Enable Multi Selection</button>
    <div className="accordian">
      {
        data && data.length > 0 ?
          data.map(dataItem => <div className="item">
            <div onClick={
              enableMultiSection 
              ? () => handleMultiSelection(dataItem.id):()=>handleSingleSelection(dataItem.id)} className="title">
              <h3>{dataItem.question}</h3>
              <span>+</span>
            </div>
            {
              enableMultiSection ?
              multiple.indexOf(dataItem.id) !== -1 && <div className='content'>{dataItem.answer}</div> :
              selected === dataItem.id && <div className='content'>{dataItem.answer}</div>
            }
          </div>

          ) : <div> No data found!</div>
      }
    </div>
  </div>
}