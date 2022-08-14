import React from "react";

interface ArrowsProps{
    className:{}
    children?:any
    onClick?:()=> void
}

export default function Arrows(props: ArrowsProps){
    return(
        <div>
            <button className={`
                bg-black text-white p-1 
                rounded-full bg-opacity-50 cursor-pointer 
                hover:bg-opacity-100 transition `} 
                onClick={props.onClick}
            >
                {props.children}
            </button>
        </div> 
    )
}