import { Link } from 'react-router-dom';


function Notfound ()  {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-12 bg-gray-100">
      {/* <img src={gymEquipment} alt="gym equipment animation" className="w-64 h-64 mb-8" /> */}
      <h1 className="text-4xl font-bold mb-4">404 Error!</h1>
      <h1 className="text-4xl font-bold mb-4">Oops! We can't find that page.</h1>

      <p className="text-gray-600 text-lg mb-8">
        The page you're looking for might have been removed or is temporarily unavailable.
      </p>

      <Link to="/" className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600">
        Go to Homepage
      </Link>
    </div>
  );
};
export default Notfound;
