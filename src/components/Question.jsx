import React, { useState } from 'react'
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

function Question({ question }) {
  const [isFront, setIsFront] = useState(true);

  const handleClick = () => {
    setIsFront((s) => !s);
  }

  return (
    <div>
      <Card
        className={`w-full h-60 cursor-pointer flex flex-col justify-between 
          ${isFront ? "bg-violet-900 border-2 border-amber-950" : "bg-amber-500 border-2 border-cyan-950"} 
          transition-transform duration-200`}
        onClick={handleClick}
      >
        <CardHeader>
          <CardTitle className={`text-xl sm:text-2xl ${isFront ? "text-amber-50" : "text-black"}`}>
            <span className="text-amber-50">{question.id}</span>
            <h6>{question.title}</h6>
          </CardTitle>
        </CardHeader>

        <CardContent className="overflow-auto mb-10">
          {isFront ? (
            <p className="text-amber-50">{question.content}</p>
          ) : (
            <p className="text-black text-2xl">Answer: {question.answer}</p>
          )}
        </CardContent>
      </Card>
    </div>
  )
}

export default Question
