export default function Stats({ items }) {
  const itemNum = items.length;
  const packedNum = items.filter((item) => item.packed).length;
  const precentage = Math.round((packedNum / itemNum) * 100);

  if (itemNum === 0) {
    return (
      <footer className="stats">
        <em>start adding items to your packing list 🚀💥</em>
      </footer>
    );
  }

  return (
    <footer className="stats">
      <em>
        {precentage === 100
          ? `You got everything! Ready to go ✈️`
          : `💼 You have ${itemNum} items on your list, and
          you already packed ${packedNum} items ${precentage}%`}
      </em>
    </footer>
  );
}
