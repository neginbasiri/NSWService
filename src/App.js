import React, { useEffect } from "react";
import { connect } from "react-redux";
import { getVehicleList } from "./actions";
import RegistrationList from "./components/RegistrationList";

const App = (props) => {
  useEffect(() => {
    props.getVehicleList();
  }, []);

  const { vehicles, isLoading, hasError } = props;
  return (
    <div className="w-full max-w-md">
      {hasError && (
        <div className="text-center p-4">Oops! Please try again</div>
      )}
      {isLoading && <div className="text-center p-4">isLoading...</div>}
      {!isLoading && !hasError && vehicles && vehicles.length > 0 && (
        <RegistrationList list={vehicles} />
      )}
    </div>
  );
};

const mapStateToProps = (state) => {
  const { vehicles, isLoading, hasError } = state;
  return {
    vehicles,
    isLoading,
    hasError,
  };
};

export default connect(mapStateToProps, {
  getVehicleList,
})(App);
