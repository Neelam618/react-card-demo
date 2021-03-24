function FixedARImage(props) {

    return (
        <div className="relative pb-5/6">
            <img className="absolute h-full w-full object-cover rounded-lg shadow-md" src={props.property.imageUrl} alt={props.property.imageAlt}></img>
        </div>
    )
}

export default FixedARImage;