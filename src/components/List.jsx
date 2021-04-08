import React from "react";

function List(props) {
  return (
    <div onClick={() => props.onChecked(props.id)}>
      <li>{props.item}</li>
    </div>
  );
}
export default List;

// const [itemLineThrough, setItemLineThrough] = useState(false);

// function handleItemClick() {
//   setItemLineThrough((isCrossed) => !isCrossed);
// }

// return (
//   <div onClick={handleItemClick}>
//     <li style={{ textDecoration: itemLineThrough ? "line-through" : "none" }}>
//       {props.item}
//     </li>
//   </div>
// );
