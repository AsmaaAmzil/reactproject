
import MenuList from "./menu-list.jsx"

export default function TreeView({menus=[]}){
 return <div className="tree-view-container">
   <MenuList list={menus}/>
 </div>
}