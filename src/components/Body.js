import { SWIGGY_API } from "../utils/constants";
import Shimmer from "./Shimmer";
import { useState, useEffect, startTransition } from "react";
import RestaurantCard from "./RestaurantCard";
import { CiSearch } from "react-icons/ci";
import { Link } from "react-router-dom";

const Body = () => {
  const [listOf, setListOf] = useState([]);
  const [filteredRestaurant, setFilteredRestaurant] = useState([]);
  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(SWIGGY_API);
    const json = await data.json();
    setListOf(
      json?.data?.cards?.[4]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants || []
    );
    setFilteredRestaurant(
      json?.data?.cards?.[4]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants || []
    );
  };

  const handleSearch = () => {
    startTransition(() => {
      const filtered = listOf.filter((res) =>
        res.info.name.toLowerCase().includes(searchText.toLowerCase())
      );
      setFilteredRestaurant(filtered);
    });
  };

  const topRatedRestaurant = () => {
    startTransition(() => {
      const topR = listOf.filter((res) => res.info.avgRating > 4.2);
      setFilteredRestaurant(topR);
    });
  };

  return listOf?.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="px-8 py-4">
      {/* Search Bar */}
      <div className="flex justify-center mb-6">
        <input
          type="text"
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
          placeholder="Search for a restaurant..."
          className="w-1/2 p-2 border border-gray-300 rounded-l-full focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <button
          onClick={handleSearch}
          className="bg-blue-500 text-white px-4 py-2 rounded-r-full hover:bg-blue-600 transition-colors duration-200 ease-in-out"
        >
          <CiSearch className="inline-block" size={20} />
        </button>
      </div>

      {/* Top Rated Restaurant Button */}
      <div className="flex justify-center mb-6">
        <button
          onClick={topRatedRestaurant}
          className="bg-green-500 text-white px-6 py-2 rounded-full hover:bg-green-600 transition-colors duration-200 ease-in-out shadow-lg"
        >
          Top Rated Restaurants
        </button>
      </div>

      {/* Restaurant Cards */}
      <div className="flex flex-wrap gap-6">
        {filteredRestaurant.map((restaurant) => (
          <Link key={restaurant?.info?.id} to={"/restaurants/" + restaurant?.info?.id}>
            <RestaurantCard
              key={restaurant.info.id}
              restaurantData={restaurant}
            />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
