import { useState } from "react";

export default function ItemManager() {
    const [items, setItems] = useState([
        { id: 1, name: "Apple" },
        { id: 2, name: "Banana" }
    ]);
    // const addItem = () => {
    //     items.push("Mango"); //  state mutation
    //     setItems(items);
    // };

    // const addItem = () => {
    //     setItems(prev => [...prev, "Mango"]);
    // };

    const addItem = () => {
    const newItem = {
      id: Date.now(), 
      name: "Mango"
    };
    setItems(prev => [...prev, newItem]);
  };

    if (items.length > 4) {
        throw new Error("Too many items!");
    }

    return (
        <div>
            <button onClick={addItem}>Add Item</button>
            {/* {items.map((item, index) => (
                <p key={index}>{item}</p>  //  index key
            ))} */}
            {items.map(item => (
                <p key={item.id}>{item.name}</p>
            ))}


        </div>

    );
}
