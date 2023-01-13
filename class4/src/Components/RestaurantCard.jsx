const RestaurantCard = ({imgSrc, name, description, rating}) => {
    return(
        <div className="food-card">
            <img src={imgSrc} alt="Food image" className="food-img" />
            <p className="hotel-name">{name}</p>
            <p className="food-description">{description}</p>
            <p className="rating">{rating}</p>
            <hr />
        </div>
    )
}

export default RestaurantCard