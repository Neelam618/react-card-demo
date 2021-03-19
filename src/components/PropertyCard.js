function PropertyCard(props) {
    return (
        <div>
            <div className="relative pb-5/6">
                <img className="absolute h-full w-full object-cover rounded-lg shadow-md" src={props.property.imageUrl} alt={props.property.imageAlt}></img>
            </div>
            <div className="relative px-4 -mt-16">
                <div className="bg-white p-6 rounded-lg shadow-lg">
                    <div className="flex items-baseline">
                        <span className="inline-block bg-green-200 text-green-800 text-xs px-2 rounded-full uppercase font-semibold tracking-wide">New</span>
                        <div className="ml-2 text-gray-600 text-xs uppercase font-semibold tracking-wide">{props.property.beds} beds &bull; {props.property.baths} baths</div>
                    </div>
                    <h4 className="font-semibold text-lg leading-tight truncate mt-1">{props.property.title}</h4>
                    <div className="mt-1">{props.property.formattedPrice} <span className="text-gray-600 text-sm">/ wk</span></div>
                    <div className="mt-4">
                        <span className="text-green-600 font-semibold">{props.property.rating}/5 stars </span>
                        <span className="text-gray-600 text-sm">(based on {props.property.reviewCount} reviews)</span>
                    </div>
                </div>
            </div>
        </div>
    )
  }
  
  export default PropertyCard;