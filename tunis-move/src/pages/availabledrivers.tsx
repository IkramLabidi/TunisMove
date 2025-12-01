import { useLocation } from "react-router";

export function AvailableDrivers(){
  const location = useLocation().state || {};
  const {name , phoneNumber , service , place} = location;

  return(
      <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 p-6">
        <h1 className="text-3xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">
          Hello! Find Your Ride
        </h1>

        {name? (
          <div className="bg-white shadow-lg rounded-2xl p-6 w-full max-w-md border border-gray-100">
              <p className="text-lg"><strong>Name: </strong>{name}</p>
              <p className="text-lg"><strong>PhoneNumber: </strong>{phoneNumber}</p>
              <p className="text-lg"><strong>Service: </strong>{service}</p>
              <p className="text-lg"><strong>Place: </strong>{place}</p>
          </div>
        ): (
        <p className="text-red-500 font-medium">No customer data provided.</p>
      )}
      </div>
  )
}

