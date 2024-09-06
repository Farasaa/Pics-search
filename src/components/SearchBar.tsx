import { useState } from "react"


interface SearchBar{
    onSubmit: (term: string) => void
}

export default function SearchBar({onSubmit}:SearchBar){

    const [term, setTerm] = useState('')

    function handleSubmit(event:React.FormEvent<HTMLFormElement>){
        event.preventDefault()
        onSubmit(term)
    }

    function handleChange(event:React.ChangeEvent<HTMLInputElement>){
        setTerm(event.target.value)
    }
  

    return(
        <div>
           <form onSubmit={handleSubmit}> 
              <input 
              onChange={handleChange}
              value={term}
              />
            </form>
            
        </div>
    )
}