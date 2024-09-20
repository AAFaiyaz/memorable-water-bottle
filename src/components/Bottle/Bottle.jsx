export default function Bottle({ bottle }) {
  const { name, img, price } = bottle;
  return (
    <div>
      <h2>Bottle : {name}</h2>
      <img src={img} alt="" />
      <p>Price: ${price}</p>
    </div>
  );
}
