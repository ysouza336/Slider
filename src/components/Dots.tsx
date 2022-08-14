import React from "react"

interface DotsProps{
    className:{}
    children?:any
    onClick?:()=>void
}

export default function Dots(props: DotsProps){
     /**fazendo transição com os dots*/
    return(
        <div className="absolute p-1 m-1 bottom-2 left-1/2 -translate-x-1/2 flex">
            {Array.from({length: 3}).map((item, index) => (
                <button
                    onClick={props.onClick}
                    className={item === index + 1 ? "bg-zinc-900" : `w-5 h-5 rounded-full  p-1 m-1 bg-white `}
                > 
                    {props.children} 
                </button>
            ))}
        </div>
    )
}