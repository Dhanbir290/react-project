import { DiCss3, DiGit, DiHtml5, DiJava, DiMongodb, DiNodejs, DiReact } from "react-icons/di";
import React from 'react'
const Tech = () => {
  return (
    <a>
      <h1 className="text-center text-5xl my-10 font-semibold">MY EXPERTISE</h1>
      <div className="gap-y-10  grid grid-cols-auto-fit place-items-center bg-white sm:bg-yellow-50">
        <DiHtml5 className="hover:scale-125 duration-100 hover:bg-pink-50 hover:cursor-pointer" size={180} />
        <DiCss3 className="hover:animate-bounce hover:bg-pink-50" size={180} />
        <DiJava className="hover:animate-bounce  hover:bg-pink-50" size={180} />
        <DiMongodb className="hover:animate-bounce  hover:bg-pink-50" size={180} />
        <DiReact className="hover:animate-bounce  hover:bg-pink-50" size={180} />
        <DiGit className="hover:animate-bounce  hover:bg-pink-50" size={180} />
        <DiNodejs className="hover:animate-bounce  hover:bg-pink-50" size={180} />

      </div>

    </a>
  )
}

export default Tech