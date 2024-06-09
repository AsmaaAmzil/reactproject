import Tabs from './tabs';
import './tab.css'
function RandomComponent(){
  return <div>rondom content</div>
}
 

export default function TabTest(){
  const tab=[
    {
      label: "Tab 1",
      content: <div>This is content for Tab 1</div>,
    },
    {
      label: "Tab 2",
      content: <div>This is content for Tab 2</div>,
    },
    {
      label: "Tab 3",
      content: <RandomComponent />,
    },
  ];
  function handleOnChange(getIndex){
    console.log(getIndex)
  }
  return <Tabs tabcontent={tab} onChange={handleOnChange}/>
}