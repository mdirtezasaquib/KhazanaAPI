import { useContext } from "react";
import { UserContext } from "../contextApi/UserContext";

const Users = () => {
  const { users } = useContext(UserContext);

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h1 className="text-3xl font-bold text-center mb-6 text-teal-700">Our Users</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {users.map(user => (
          <div
            key={user.id}
            className="bg-white rounded-2xl shadow-md p-5 hover:shadow-lg transition-all"
          >
            <img
              src={user.image}
              alt={user.firstName}
              className="w-24 h-24 rounded-full mx-auto mb-4 border-4 border-teal-500"
            />
            <h2 className="text-xl font-semibold text-center">{user.firstName} {user.lastName}</h2>
            <p className="text-center text-gray-600">@{user.username}</p>
            <p className="text-center mt-2 text-sm">✉ {user.email}</p>
            <p className="text-center text-sm">📞 {user.phone}</p>
            <p className="text-center text-sm">🌍 {user.address.city}, {user.address.country}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Users;
