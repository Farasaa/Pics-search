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
        <div className="grid grid-cols-5 gap-4 justify-items-center items-center mt-4 mb-4">
            {renderImages}
            </div>
    )
}