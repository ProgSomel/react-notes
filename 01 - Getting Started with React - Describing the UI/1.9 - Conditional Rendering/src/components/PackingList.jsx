function Item({ name, isPacked }) {
  let itemContent = "";

  if(isPacked) {
    itemContent = <span>{name + "✅"}</span>;
  }else {
    itemContent = <span>{name}</span>
  }

  return <li className="item">{itemContent}</li>
}

export default function PackingList() {
  return (
    <section>
      <h1>Sally Ride's Packing List</h1>
      <ul>
        <Item isPacked={true} name="Space suit" />
        <Item isPacked={false} name="Helmet with a golden leaf" />
        <Item isPacked={true} name="Photo of Tam" />
      </ul>
    </section>
  );
}
