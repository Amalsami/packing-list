import { useState } from "react";
import Logo from "./Logo";
import Form from "./Form";
import Footer from "./Footer";
import List from "./List";
export default function App() {
  const [items, setItems] = useState([]);

  function handleAddItems(item) {
    setItems((items) => [...items, item]);
  }

  function handleDeleteItem(id) {
    setItems((items) => items.filter((item) => item.id !== id));
  }

  // function handleToggleItem(id) {
  //   setItems((items) =>
  //     items.map((item) =>
  //       item.id === id ? { ...item, packed: !item.packed } : item
  //     )
  //   );
  // }

  return (
    <div className="app">
      <Logo />
      <Form onAddItems={handleAddItems} />
      <List
        items={items}
        onDeleteItem={handleDeleteItem}
        // onToggleItem={handleToggleItem}
        // onClearList={handleClearList}
      />
      <Footer items={items} />
    </div>
  );
}
