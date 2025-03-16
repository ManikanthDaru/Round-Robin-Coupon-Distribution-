import { useNavigate } from "react-router-dom";

function RoleSelection() {

    const navigate = useNavigate();

    return (
      <div className="h-screen flex items-center justify-center bg-gray-100">
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <center>
            <h2 className="text-2xl font-semibold mb-4 text-gray-700">
              Select your role
            </h2>
          </center>
          <div className="p-5 flex gap-7">
                    <button 
                        onClick={() => navigate("/guest")}
            className="px-6 py-2 bg-blue-500 text-white font-semibold rounded-lg shadow-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75">
              Guest
            </button>
                    <button
                        onClick={() => navigate("/admin")}
                        className="px-6 py-2 bg-green-500 text-white font-semibold rounded-lg shadow-md hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-400 focus:ring-opacity-75">
              Admin
            </button>
          </div>
        </div>
      </div>
    );
}

export default RoleSelection;