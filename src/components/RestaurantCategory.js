import ItemList from "./ItemList";

const RestaurantCategory = ({ info, showItem, setShowIndex }) => {
    const handleClick = () => {
        setShowIndex(); // Add logic to toggle specific index if needed
    };

    const hasItems = info?.itemCards?.length > 0;

    return (
        <div className="mb-4">
            {/* Header Section */}
            <div
                className="border border-gray-200 bg-white rounded-lg shadow-lg transition-transform transform hover:scale-105 cursor-pointer flex justify-between items-center p-4 hover:shadow-xl"
                onClick={handleClick}
            >
                <span className="font-bold text-xl text-gray-800">
                    {info.title} ({hasItems ? info.itemCards.length : 0})
                </span>
                <span className="text-xl text-gray-600 hover:text-gray-800 transition-colors">
                    {showItem ? "▲" : "▼"}
                </span>
            </div>

            {/* Item List */}
            {hasItems && showItem && (
                <div className="mt-2">
                    <ItemList items={info.itemCards} />
                </div>
            )}
        </div>
    );
};

export default RestaurantCategory;
