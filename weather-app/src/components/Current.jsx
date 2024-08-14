import React from "react";
import MyIcon from "./UI/MyIcon/MyIcon";

const Current = ({ weather }) => {
  const { current } = { ...weather };
  return (
    <div className="currentField">
      <h2 className="location" title={weather.location?.region}>
        {weather.location?.name}
      </h2>
      <h1>{current?.temp_c ?? ""}°C</h1>
      <h3 className="lastUpdated">
        Обновлено: {current ? current.last_updated.split(" ")[1] : ""}
      </h3>
      <h3 className="condition">
        {/* <MyIcon url={current?.condition.icon} /> */}
        {current?.condition.text}
      </h3>
    </div>
  );
};

export default Current;
