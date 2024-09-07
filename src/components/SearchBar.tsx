import { useState } from "react"


interface SearchBarType{
    onSubmit: (term: string) => void
}

export default function SearchBar({onSubmit}:SearchBarType){

    const [term, setTerm] = useState('')

    function handleFormSubmit(event:React.FormEvent<HTMLFormElement>){
        event.preventDefault()
        onSubmit(term)
    }

    function handleChange(event:React.ChangeEvent<HTMLInputElement>){
        setTerm(event.target.value)
    }
  

    return(
        <div className="border-4 border-gray-300 rounded-md p-2.5 mt-2.5 mb-2.5 w-1/2 mx-auto">
           <form 
           className="flex flex-col"
           onSubmit={handleFormSubmit}> 
            <label>Enter Search Term</label>
              <input   
              className="border-4 gray-900"
              onChange={handleChange}
              value={term}
              />
            </form>
            
        </div>
    )
}