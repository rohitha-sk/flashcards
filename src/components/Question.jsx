import React, { useState } from 'react'
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"


function Question({question}) {


  const[isFront, setIsFront] = useState(true);


  const handleClick=()=>{
      setIsFront((s)=>!s);
  }

  return (
    <div>
      <Card className={`w-100 h-auto cursor-pointer  ${isFront?"bg-violet-900 border-2 border-amber-950":"bg-amber-500 border-2 border-cyan-950"} `} onClick={handleClick} >
  <CardHeader>
    <CardTitle className={`text-2xl ${isFront ?"text-amber-50":"text-black"}`}>
        <span className="text-amber-50">{question.id}</span>
          <h6>{question.title}</h6>
      </CardTitle>
            
  </CardHeader>
  
    {isFront?(
      <CardContent>
        <p className="text-amber-50">{question.content}</p>
  </CardContent>
    ):(
        <CardContent>
     <p className="text-black">Answer: {question.answer}</p>
  </CardContent>
    )}


</Card>
    </div>
  )
}

export default Question