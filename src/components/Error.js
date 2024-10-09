import { Link, useRouteError } from "react-router-dom";

const Error = () => {
  const err = useRouteError();

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      {/* Error Image Placeholder */}
      <div className="mb-6">
        <img
          src="https://via.placeholder.com/150" // Replace with an actual error image URL
          alt="Error Illustration"
          className="w-40 h-40"
        />
      </div>

      <div className="text-center">
        <h1 className="text-3xl font-bold text-red-600 mb-4">
          Oops! Something Went Wrong!
        </h1>
        <h3 className="text-xl text-gray-700 mb-6">{err.data || "An unexpected error occurred."}</h3>
        <Link
          to="/"
          className="bg-blue-500 text-white px-6 py-2 rounded-full hover:bg-blue-600 transition-colors duration-200"
        >
          Back Home
        </Link>
      </div>
    </div>
  );
};

export default Error;
