import { useState } from "react";
import MenuList from "./menu-list";
import {FaMinus, FaPlus} from 'react-icons/fa';

export default function MenuItem({ item = [] }) {

    // Create an object called displayCurrentChildren 
    // by initialising useState with an empty object
    // => To make boolen variables with various names
    // Use square brackets property accessor when the property name is dynamic
    const [displayCurrentChildren, setDisplayCurrentChildren] = useState({});

    function handleToggleChildren (getCurrentlabel){
        setDisplayCurrentChildren(
            {
            ...displayCurrentChildren,
            [getCurrentlabel]: !displayCurrentChildren[getCurrentlabel],
            });        
    }

    console.log(displayCurrentChildren);


  return (
    <li>
      <div className="menu-item">
        <p>{item.label}</p>
        {item && item.children && item.children.length 
        ? (<span onClick={() => handleToggleChildren(item.label)}>
            {
                displayCurrentChildren[item.label] ? <FaMinus color="#fff" size={15} /> : <FaPlus color="#fff" size={15} />
            }
        </span>)
        : null}
      </div>

      {item && item.children && item.children.length > 0 && displayCurrentChildren[item.label]
      ? (<MenuList list={item.children} />) 
      : null}
    </li>
  );
}
