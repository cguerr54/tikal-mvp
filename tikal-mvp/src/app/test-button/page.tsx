//@ts-nocheck
"use client"
import React, { useState, useEffect } from "react"


export default function TestButton(){
  

  const [isLoading, setIsLoading] = useState(false)

  const handleClick = ()=> {
    setIsLoading(true)

    setTimeout(()=> {
    console.log('processing'), 
    setIsLoading(false)
  }, 5000)

  }

  return(
    <main>
      <button
        onClick={handleClick} disabled={isLoading}
        className="flex w-1/2 mx-auto mt-6 justify-center rounded-full px-3 py-1.5 text-sm leading-6 border-tikal-cyan border-2 text-tikal-cyan shadow-sm hover:bg-indigo-500 hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 uppercase"
        >
      {isLoading ? "Processing" : "Run Test"}
      </button>

    </main>

  )

}