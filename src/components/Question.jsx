import React from 'react'
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"


function Question() {
  return (
    <div>
      <h1 className="text-2xl text-green-700">This is test</h1>

      <Card className="w-100 h-auto bg-violet-900">
  <CardHeader>
    <CardTitle className="text-amber-50 text-2xl">Card Title</CardTitle>
  </CardHeader>
  <CardContent>
     <h3 className="text-amber-50">Question</h3>
  </CardContent>

</Card>
    </div>
  )
}

export default Question