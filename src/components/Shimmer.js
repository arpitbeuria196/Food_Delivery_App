const Shimmer = () => {
    return (
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {[1, 2, 3, 4, 5, 6].map((item) => (
          <div key={item} className="p-4 bg-gray-200 rounded-lg animate-pulse">
            {/* Image */}
            <div className="w-full h-40 bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 rounded-lg mb-4"></div>
  
            {/* Title */}
            <div className="h-6 bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 rounded-lg mb-2"></div>
  
            {/* Description */}
            <div className="h-4 bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 rounded-lg mb-2"></div>
            <div className="h-4 bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 rounded-lg"></div>
          </div>
          
        ))}

      </div>
    );
  };
  
  export default Shimmer;
  