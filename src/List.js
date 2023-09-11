import { useState } from "react";
import Item from "./Item";

export default function List({ items, onDeleteItem }) {
  return (
    <div className="list">
      <ul>
        {items.map((item) => (
          <Item
            item={item}
            onDeleteItem={onDeleteItem}
            // onToggleItem={onToggleItem}
            key={item.id}
          />
        ))}
      </ul>

      {/* <div className="actions">
        <select value={} onChange={(e) => setSortBy(e.target.value)}>
          <option value="input">Sort by input order</option>
          <option value="description">Sort by description</option>
          <option value="packed">Sort by packed status</option>
        </select>
        <button onClick={onClearList}>Clear list</button>
      </div> */}
    </div>
  );
}
