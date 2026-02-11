import { useState } from "react";

export default function CrashApp() {
  const [items, setItems] = useState(["Apple", "Banana"]);

  const addItem = () => {
    items.push("Mango"); //  mutation
    setItems(items);
  };

  return (
    <div>
      <button onClick={addItem}>Add Item</button>
      {items.map((item, index) => (
        <p key={index}>{item}</p>  // unstable key
      ))}
    </div>
  );
}
