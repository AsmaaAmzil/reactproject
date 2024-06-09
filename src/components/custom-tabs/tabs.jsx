import {useState} from 'react';
export default function Tabs({tabcontent,onChange}){
  const [currentIndex,setCurrentIndex ] = useState(0);

  function handleclick(getCurrentIndex){
    setCurrentIndex(getCurrentIndex);
    onChange(getCurrentIndex);
  }
  return (<div className="wrapper">
    <div className="heading">
    {
      tabcontent.map((item,index)=>{
        return <div
        className={`tab-item ${currentIndex === index ? 'active':'' }`}
        onClick={()=>handleclick(index)}
        key={item.label}
        >
          <span className="label" >{item.label}</span>
        </div>
      })
    }
    </div>
    <div className="content" style={{ color: "red" }}>
       {
        tabcontent[currentIndex] && tabcontent[currentIndex].content
       }
    </div>
  </div>);
}