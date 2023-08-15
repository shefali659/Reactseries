// import {useState} from "react";
// export default function SearchFilter(){
//     let data=["Mango","Apple","Banana","Orange"];
//     const [result,showResult]=useState(data);
//     const handleChange=(e)=>{
//         if (e.target.value === "") {
//             showResult(result);
//             return;
//           }
        
//         const filteredValues=  result.filter((value)=>value.toLowerCase().indexOf(e.target.value)!==-1)
//         showResult(filteredValues)
//     }
//     return (
//         <>
//         <input type="text" onChange={handleChange}/>
//         {result && result.map((val,index)=>
//             <div key={index}>{val}</div>
//         )}
//         </>
//     )
// }
import React, { useState } from "react";


function SearchFilter() {

  const list = [
    "Banana",
    "Apple",
    "Orange",
    "Mango",
    "Pineapple",
    "Watermelon"
  ];

  const [filterList, setFilterList] = useState(list);

  const handleSearch = (event) => {

    if (event.target.value === "") {
      setFilterList(list);
      return;
    }
    const filteredValues = list.filter(
      (item) =>
        item.toLowerCase().indexOf(event.target.value.toLowerCase()) !== -1
    );
    setFilterList(filteredValues);
  };
  return (
    <div className="app">
      <div>
        Search: <input name="query" type="text" onChange={handleSearch} />
      </div>
      {filterList &&
        filterList.map((item, index) => (
          <div key={index}>{item}</div> //Display each item
        ))}
    </div>
  );
}

export default SearchFilter;