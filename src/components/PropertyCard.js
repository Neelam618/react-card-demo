function PropertyCard(props) {
    return (
        <div>
            <img src={props.property.imageUrl} alt={props.property.imageAlt}></img>
            <h4>{props.property.title}</h4>
            <div>{props.property.beds} beds &bull; {props.property.baths} baths</div>
            <div>{props.property.formattedPrice} / wk</div>
            <div>{props.property.rating}/5 stars (based on {props.property.reviewCount} reviews)</div>
        </div>
    )
  }
  
  export default PropertyCard;