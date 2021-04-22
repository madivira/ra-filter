import React from "react";

export default function Toolbar(prop){
 
    return (
        <div>
        {prop.filter.map((item, index) =>
        <button className={item} key={index} onClick={()=> prop.onSelectFilter({item}) }>{item}</button>)}
        </div>
    )
}