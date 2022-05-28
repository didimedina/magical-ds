// const key = "foo"
// const x = {
// [`key-${key}`]: "didi",
// foo: 4,
// ["foo"]: 4
// }
// const x = {a: 4}
// const y = {b: 5, ...{a: 4, ...{z: 4}}} // {b: 5, a: 4, z: 4}

import { useEffect, useRef, useState } from "react";
import { Button } from "./v2/Button";
import Stack from "./v2/Stack";

function BaseButton(props) {
    
    const buttonRef = useRef<HTMLButtonElement | null>(null) // <- this doesn't change between renders
    const hasStack = buttonRef.current?.children[0]?.attributes.getNamedItem('data-comp-stack')?.value === "true" ? true : false
    

    useEffect(() => {
        if(buttonRef.current) {
            console.log(buttonRef.current)
        }
    }, [buttonRef, hasStack])
    
      //
    return (
        <button ref={buttonRef} data-stack-as-child={hasStack} {...props}/>
    )
}

function BaseStack() {
    return <div data-comp-stack="true"/> 
}




export function SmartButton(){
    return (
        <BaseButton>
            <BaseStack/>
        </BaseButton>
    )
}

export default SmartButton
