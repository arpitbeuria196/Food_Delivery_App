import { useParams } from "react-router";
import { Menu_API } from "../utils/constants";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import RestaurantCategory from "./RestaurantCategory";

const RestaurantMenu = () => {
  const [resInfo, setRestaurantInfo] = useState(null);
  const { resId } = useParams();
  const [showIndex, setShowIndex] = useState(null);

  useEffect(() => {
    fetchData();
  }, [resId]);

  const fetchData = async () => {
    const data = await fetch(Menu_API + resId);
    const json = await data.json();
    setRestaurantInfo(json.data);
  };

  // Check if restaurant info is still loading
  if (!resInfo) {
    return <Shimmer />;
  }

  const { name = "", cuisines = [], costForTwoMessage = "" } =
    resInfo?.cards?.[2]?.card?.card?.info || {};

  // Ensure categories is properly defined before using map
  const categories =
    resInfo?.cards?.[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.filter(
      (c) =>
        c.card?.card?.["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    ) || [];

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white shadow-md rounded-lg">
      <h1 className="font-bold my-5 text-3xl text-gray-800">{name}</h1>
      <p className="text-gray-600 text-lg mb-4">
        {cuisines.join(", ")} - <span className="font-semibold">{costForTwoMessage}</span>
      </p>

      <hr className="my-4" />

      {categories.length > 0 ? (
        categories.map((category, index) => (
          <RestaurantCategory
            key={index}
            info={category.card.card}
            showItem={index === showIndex}
            setShowIndex={() => setShowIndex(index)}
          />
        ))
      ) : (
        <p className="text-red-500 text-lg">No categories available</p>
      )}
    </div>
  );
};

export default RestaurantMenu;
