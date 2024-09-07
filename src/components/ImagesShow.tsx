interface Image {
    id: string;
    urls: {
        small: string;
    };
    alt_description: string;
}

interface ImageShowProps {
    image: Image;
}



export default function ImageShow({image}:ImageShowProps){
    return(

        <div>
            <img className="w-64 h-64 mt-2.5" src={image.urls.small}  alt={image.alt_description}/>
        </div>
    )
}