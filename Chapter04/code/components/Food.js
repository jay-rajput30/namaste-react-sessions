import { CLOUDINARY_IMAGE_URL } from "../constants";

const Food = ({ name, description, cloudinaryImageId, price }) => {
  return (
    <div className="food-container">
      <div className="food-description">
        <h2 className="food-name">{name}</h2>
        <p className="food-details">{description}</p>
        <h2 className="food-price">Rs: {price / 100}</h2>
      </div>
      <img
        className="food-image"
        src={CLOUDINARY_IMAGE_URL + cloudinaryImageId}
      />
    </div>
  );
};

export default Food;
