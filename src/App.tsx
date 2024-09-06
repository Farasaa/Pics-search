import SearchBar from "./components/SearchBar"
import searchImages from "./api"



function handleSubmit(term : string){
    searchImages(term)

}


export default function App(){
    return(
        <div>
            <SearchBar onSubmit= {handleSubmit} />
        </div>
    )
}