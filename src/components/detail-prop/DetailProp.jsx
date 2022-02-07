import { Avatar } from "@mui/material";
import React from "react";
import "./DetailProp.css";

const DetailProp = (props) => {
  const CustIcon = props.icon;
  return (
    <div className="detail-prop">
      
        <CustIcon className="text-primary icon me-3"/>
      
      <div className="desc">
        <p className="my-0 text-black-50">{props.title}</p>
        <strong>{props.desc}</strong>
      </div>
    </div>
  );
};

export default DetailProp;
