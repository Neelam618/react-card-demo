function PropertyCard(props) {
    return (
        <div className="bg-white rounded-lg overflow-hidden border">
            <img src={props.property.imageUrl} alt={props.property.imageAlt}></img>
            <div className="p-6">
                <h4>{props.property.title}</h4>
                <div>{props.property.beds} beds &bull; {props.property.baths} baths</div>
                <div>{props.property.formattedPrice} / wk</div>
                <div>{props.property.rating}/5 stars (based on {props.property.reviewCount} reviews)</div>
            </div>
        </div>
    )
  }
  
  export default PropertyCard;