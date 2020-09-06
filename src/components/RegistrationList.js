import React, { useState } from "react";
import RegistrationItem from "./RegistrationItem";
import RegistrationDetails from "./RegistrationDetails";

const RegistrationList = (props) => {
  const [selectedRow, setSelectedRow] = useState(null);
  const { list } = props;
  return (
    <div className="p-4">
      {!selectedRow &&
        list.map((item, index) => (
          <RegistrationItem
            key={index}
            item={item}
            onClick={() => setSelectedRow(item)}
          />
        ))}
      {selectedRow && (
        <RegistrationDetails
          item={selectedRow}
          onBackClick={() => setSelectedRow(null)}
        />
      )}
    </div>
  );
};

export default RegistrationList;
