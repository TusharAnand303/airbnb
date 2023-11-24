'use client'

import { HashLoader } from "react-spinners";


const Loader = () => {
  return (
    <div className="h-[70vh] flex flex-col justify-center items-center">
        <HashLoader size={80} color="#F43F5E"/>
    </div>
  )
}

export default Loader

