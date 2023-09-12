import { useState } from "react";
import Item from "./Item";

export default function List({
  items,
  onDeleteItem,
  onToggleItem,
  onClearList,
}) {
  return (
    <div className="list">
      <ul>
        {items.map((item) => (
          <Item
            item={item}
            onDeleteItem={onDeleteItem}
            onToggleItem={onToggleItem}
            key={item.id}
          />
        ))}
      </ul>
      {items.length === 0 ? (
        ""
      ) : (
        <button onClick={onClearList}>Clear list</button>
      )}
    </div>
  );
}
