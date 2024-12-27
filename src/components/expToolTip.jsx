import React from "react";
import "../App.css"

export const CustomTooltip = ({ active, payload, label }) => {
   if (active && payload && payload.length) {
      console.log("Payload: ", payload);
      console.log("Label: ", label)
      return (
         <div className="custom-tooltip">
            <h4>{label}: {payload[0].payload.years} years</h4>
            <p>{payload[0].payload.tooltip}</p>
         </div>
      );
   }
 
   return null;
 };