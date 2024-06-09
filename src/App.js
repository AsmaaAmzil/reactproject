import './App.css';
import Accordian from './components/accordian'
import RandomColor from './components/random-color';
import StarRating from './components/star-rating'
import ImageSlider from './components/image-slider';
import LoadMoreData from './components/load-more-data'
import TreeView from './components/tree-view';
import menus from './components/tree-view/data.js';
import QrCodeGenerator from './components/qr-code-generator'
import ScrollIndicator from "./components/scroll-indicator";
import LightDarkMode from "./components/light-dark-mode";
import TabTest from "./components/custom-tabs/tab-test";
import ModalTest from "./components/custom-modal-popup/modal-test";
import UseFetchHookTest from "./components/use-fetch/test";
function App() {
  return (
    <div className="App">
     {/* Accordian components */}
     {/* <Accordian/> */}
     {/*Random color component */}
     {/* <RandomColor/> */}
     {/* <StarRating noOfStars={10}/> */}
     <ImageSlider url={"https://picsum.photos/v2/list"}  page={'1'} limit={"10"}/>
     {/* Load more product contents */}
     {/* <LoadMoreData/> */}
     {/* Tree view component/menu UI component/ recursive navigation menu */}
     {/* <TreeView menus={menus}/> */}
     {/* Qr Code Generator */}
     {/* <QrCodeGenerator/> */}
     {/* <ScrollIndicator url={"https://dummyjson.com/products?limit=100"} /> */}
      {/* light and dark theme switch */}
       {/* <LightDarkMode/>  */}
         {/* Custom tabs component */}
      {/* <TabTest />  */}
     {/* Custom Modal Component */}
       {/* <ModalTest/>  */}
        {/* useFetch - Custom Hook Test */}
       {/* <UseFetchHookTest/>  */}
    </div>
  );
}

export default App;
