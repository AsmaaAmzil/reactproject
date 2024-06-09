
import {useState,useEffect} from 'react';
import "./scroll.css";

export default function ScrollIndicator({url}){
  const [data,setData]=useState([]);
  const [loading,setLoading]=useState(false);
  const [errorMessage,setErrorMessage]=useState('');
  const [scrollPercentage,setscrollPercentage]=useState(0);
  async function fetchData(getUrl){
    try {
      setLoading(true);
      const reponse=await fetch(getUrl);
      const data=await reponse.json();
      if(data && data.products && data.products.length>0){
        setData(data.products);
        setLoading(false);
      }else{
        setLoading(false);
      }
    } catch (error) {
      setErrorMessage(error.message)
    }
  }
  function handleScrollPercentage(){
    const scrollTop=document.body.scrollTop || document.documentElement.scrollTop;
    const height=document.documentElement.scrollHeight-document.documentElement.clientHeight;
    setscrollPercentage((scrollTop/height)*100);
  }
  
  useEffect(()=>{fetchData(url);},[url]);
  useEffect(()=>{
    window.addEventListener('scroll',handleScrollPercentage);
    return ()=>{
      window.removeEventListener('scroll',()=>{});
    }
  })
  if(errorMessage){
    return <div>Error:{errorMessage}</div>;
  }
  if(loading){
    return <div>please waite!</div>
  }

  return <div>
     <div className="top-container">
        <h1>Custom Scroll Indicator</h1>
        <div className="scroll-progress-tracking-container">
          <div
            className="current-progress-bar"
            style={{ width: `${scrollPercentage}%` }}
          ></div>
        </div>
      </div>
    <div className="data-container">
      { data && data.length>0 ? data.map((dataItem)=>{
        return <p>{dataItem.title}</p>
      }):null

      }
    </div>
  </div>
}