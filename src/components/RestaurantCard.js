import { MdStarRate } from "react-icons/md";
import { CDN_URL } from "../utils/constants"; // Make sure CDN_URL is defined

const RestaurantCard = (props) => {
  const { restaurantData } = props;

  const {
    cloudinaryImageId,
    name,
    areaName,
    avgRating,
    cuisines,
    costForTwo,
    deliveryTime,
  } = restaurantData?.info;

  return (
    <div className="bg-white rounded-lg shadow-md p-3 hover:shadow-lg transition-shadow duration-300 ease-in-out w-64">
      {/* Restaurant Image */}
      <img
        src={CDN_URL + cloudinaryImageId}
        alt={name}
        className="w-full h-32 object-cover rounded-lg"
      />
      
      {/* Restaurant Details */}
      <div className="restaurant-details mt-3">
        {/* Restaurant Name */}
        <h3 className="text-base font-semibold text-gray-800">
          {name.slice(0, 18)}
          {name.length > 18 ? "..." : ""}
        </h3>

        {/* Restaurant Info */}
        <div className="flex justify-between items-center mt-2 text-gray-600 text-sm">
          <div className="flex items-center space-x-1">
            <MdStarRate className="text-yellow-500" />
            <span>{avgRating}</span>
          </div>
          <span>{costForTwo}</span>
          <span>{deliveryTime} mins</span>
        </div>

        {/* Cuisines */}
        <p className="text-gray-500 text-sm mt-2">
          {cuisines.join(", ").slice(0, 20)}
          {cuisines.join(", ").length > 20 ? "..." : ""}
        </p>

        {/* Location */}
        <p className="text-gray-400 text-xs mt-1">{areaName}</p>
      </div>
    </div>
  );
};

export default RestaurantCard;
