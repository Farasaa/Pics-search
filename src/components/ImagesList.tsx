import ImageShow from "./ImagesShow";


interface ImageProps {
    images: Array<{
        id: string;
        urls: {
            small: string;
        };
        alt_description: string;
    }>;
}

export default function ImageList({images}: ImageProps){

    const renderImages = images.map(image =>{
        return <ImageShow key={image.id} image = {image}/>
    })

    return(
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 place-items-center min-h-screen place-content-center">
            {renderImages}
            </div>
    )
}