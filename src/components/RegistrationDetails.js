import React from "react";
import moment from "moment";

const Row = ({ label, value }) => (
  <div className="flex mb-2">
    <div className="text-gray-600 capitalize pr-4 flex-shrink-0 w-1/2">
      {label.replace("_", " ")}
    </div>
    <div className="flex-1">
      {!value && "-"}
      {label === "vin" && value ? value.slice(value.length - 4) : value}
    </div>
  </div>
);

const RegistrationDetails = ({ item, onBackClick }) => {
  const { plate_number, registration, vehicle, insurer } = item;
  return (
    <div className="p-4">
      <div className="font-semibold mb-4" onClick={onBackClick}>
        Go Back
      </div>
      {!registration.expired && (
        <div className="bg-green-100 p-4 mb-4 rounded-lg">
          This vehicle registration will be expired in{" "}
          {moment(registration.expiry_date).diff(moment(), "month")} months.
        </div>
      )}
      {registration.expired && (
        <div className="bg-red-200 p-4 mb-4 rounded-lg">
          This vehicle registration is already expired.
        </div>
      )}
      <Row label="Plate Number" value={plate_number} />
      {Object.keys(vehicle).map((key, index) => (
        <Row key={index} label={key} value={vehicle[key]} />
      ))}
      {Object.keys(insurer).map((key, index) => (
        <Row key={index} label={`insurer ${key}`} value={insurer[key]} />
      ))}
      {Object.keys(registration).map((key, index) => {
        let value = registration[key];
        if (key === "expired") {
          value = registration[key] ? "Yes" : "No";
        }
        if (key === "expiry_date") {
          value = moment(registration[key]).format("DD MMMM YYYY");
        }

        return <Row key={index} label={key} value={value} />;
      })}
    </div>
  );
};

export default RegistrationDetails;
