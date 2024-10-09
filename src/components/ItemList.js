import { useDispatch } from "react-redux";
import { addItem } from "../utils/cartSlice";
import { CDN_URL } from "../utils/constants";

const ItemList = ({ items }) => {
    const dispatch = useDispatch();

    const handleAddItem = (item) => {
        dispatch(addItem(item));
    };

    return (
        <div className="bg-white p-6 rounded-lg shadow-lg">
            {items.length > 0 ? (
                items.map((item, index) => (
                    item?.card?.info ? (
                        <div key={index} className="flex p-4 border-b border-gray-200 transition duration-300 hover:bg-gray-50">
                            <div className="flex-shrink-0 mr-4">
                                <img
                                    src={CDN_URL + item.card.info.imageId}
                                    className="w-24 h-24 object-cover rounded-lg shadow-md"
                                    alt={item.card.info.name}
                                />
                            </div>
                            <div className="flex-grow mt-1">
                                <h3 className="font-semibold text-lg text-gray-800 hover:text-blue-600 transition duration-200">{item.card.info.name}</h3>
                                <span className="text-lg text-gray-900 font-bold">
                                    ₹{(item.card.info.price / 100).toFixed(2)}
                                </span>
                                <p className="text-sm text-gray-600 mt-1">{item.card.info.description}</p>
                            </div>
                            <div className="flex-shrink-0 ml-4">
                                <button
                                    className="px-4 py-2 text-white bg-green-500 hover:bg-green-600 rounded-lg shadow-md transition duration-300 focus:outline-none focus:ring-2 focus:ring-green-400 focus:ring-opacity-50"
                                    onClick={() => handleAddItem(item)}
                                >
                                    Add +
                                </button>
                            </div>
                        </div>
                    ) : null
                ))
            ) : (
                <div className="text-center py-10">
                    <h2 className="text-xl text-gray-500">No items available.</h2>
                </div>
            )}
        </div>
    );
};

export default ItemList;
