"use client"
import { FileSearch } from "@phosphor-icons/react"

const Page = () => {
    return(
        <div className="min-h-screen max-w-xl mx-auto flex justify-center items-center">
            <div className="flex justify-center items-center gap-2"> 
                <FileSearch size={36} className="text-color-accent"/>
                <h3 className="text-color-accent text-3xl font-bold">Not Found</h3>
            </div>
        </div>
    )
}

export default Page