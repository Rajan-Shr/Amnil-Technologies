import { useParams } from "react-router-dom";

export default function Item() {
  const { itemid } = useParams();  

  return (
    <>
      <h1>Item {itemid}</h1>  
    </>
  );
}
