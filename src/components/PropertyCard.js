function PropertyCard(props) {
    return (
        <div className="bg-white rounded-lg overflow-hidden border">
            <img src={props.property.imageUrl} alt={props.property.imageAlt}></img>
            <div className="p-6">
                <div className="text-gray-600 text-xs uppercase font-semibold tracking-wide">{props.property.beds} beds &bull; {props.property.baths} baths</div>
                <h4 className="font-semibold text-lg leading-tight truncate">{props.property.title}</h4>
                <div className="mt-1">{props.property.formattedPrice} <span className="text-gray-600 text-sm">/ wk</span></div>
                <div className="mt-4">
                    <span className="text-green-600 font-semibold">{props.property.rating}/5 stars </span>
                    <span className="text-gray-600 text-sm">(based on {props.property.reviewCount} reviews)</span>
                </div>
            </div>
        </div>
    )
  }
  
  export default PropertyCard;