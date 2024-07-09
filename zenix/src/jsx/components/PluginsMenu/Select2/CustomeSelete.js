import React from "react";

import Select from "react-select";
//import { colourOptions, groupedOptions } from "./data";


const options = [
   { value: "chocolate", label: "Chocolate" },
   { value: "strawberry", label: "Strawberry" },
   { value: "vanilla", label: "Vanilla" },
];

export default function customGroup() {
   return (
      <div style={{ minHeight: "100px" }}>
         <Select defaultValue={options[1]} options={options} 
		 
			theme={theme => ({
			  ...theme,
			  borderRadius: 0,
			  colors: {
				...theme.colors,
				primary25: '#6418c3',
				primary: 'black',
				
			  },
			})}
		 />
      </div>
   );
}
