import axios from "axios";


const searchImages = async (term:string) => {
   const response = await axios.get('https://api.unsplash.com/search/photos',{
        headers:{
            Authorization: 'Client-ID 2aJREdlXDWcOYZcqMeFAFBEpM5buJ2JdjR-DDBGDJ00'
        },

        params:{

            query: term
             
        }
    })

    return response.data.results
}


export default searchImages