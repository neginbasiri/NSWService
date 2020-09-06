import React from "react";

export const RegistrationItem = ({ item, onClick }) => {
  const { plate_number, registration, vehicle } = item;
  return (
    <div
      className="flex flex-grow-1 p-4 rounded-lg bg-gray-100 mb-4"
      onClick={onClick}
    >
      <div className="flex-1">
        <div>
          {vehicle.make}-{vehicle.model}
        </div>

        <div className="text-gray-600">{plate_number}</div>
      </div>

      <div
        className={`${
          registration.expired ? "text-red-600" : "text-green-600"
        }`}
      >
        {registration.expired ? "Expired" : "Registered"}
      </div>
    </div>
  );
};

export default RegistrationItem;
