import { LINKEDIN_URL } from "../utils/constants";

const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <div className="bg-gray-800 text-white py-4 flex justify-center items-center flex-col">
      <div className="mb-2">
        Created By
        <span role="img" aria-label="heart" className="mx-1 text-red-500">❤️</span>
        <a
          href={LINKEDIN_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-400 hover:text-blue-300 transition-colors duration-200"
        >
          Arpit Beuria
        </a>
      </div>
      <div className="flex items-center">
        <span className="mr-1">&copy;</span>
        <span>{year}</span>
        <strong className="ml-1">
          Tasty <span className="font-semibold">Trails</span>
        </strong>
      </div>
    </div>
  );
};

export default Footer;
