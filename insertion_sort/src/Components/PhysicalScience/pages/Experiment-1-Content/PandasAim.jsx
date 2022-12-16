import React from "react";
import "./Aim.css";
import aimImg from "../../../../assets/Presentation.png";
const PandasAim = () => {
  return (
    <div className="section__padding aim" style={{ fontSize: "30px" }}>
      <h2>
        <b>AIM</b>
      </h2>
      <div className="aimbody">
        <p>To find the statistical analysis of a given dataframe.</p>
        <div className="statImgs">
          <img src={aimImg} alt="aimImage" />
          {/* <img src="" alt="" /> */}
        </div>
      </div>
    </div>
  );
};
export default PandasAim;
