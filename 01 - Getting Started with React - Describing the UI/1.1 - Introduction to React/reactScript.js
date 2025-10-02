const productPrice = 5000;

function Product() {
  const [quantity, setQuantity] = React.useState(0);

  function addToCart() {
    setQuantity(quantity + 1);
  }

  return (
    <div className="shadow-md rounded-lg bg-slate-800 border-slate-700">
      <a href="#">
        <img
          className="rounded-t-lg"
          src="https://dummyimage.com/680X400/087ea4/ffffff.png&text=Product"
          alt="product image"
        />
      </a>
      <div className="px-5 py-5">
        <div className="flex items-center justify-between mt-5">
          <a href="#">
            <h3 className="font-semibold text-xl tracking-tight">
              Reactive Accelerator Course
            </h3>
          </a>
          <span id="total" className="text-xl font-medium text-teal-500">
            {quantity * productPrice}
          </span>
        </div>
        <div className="flex items-center justify-between mt-5">
          <span id="price" className="text-2xl font-bold text-slate-300">
            Taka: {productPrice}
          </span>
          <a
            onClick={addToCart}
            href="#"
            className="text-white focus:ring-4 font-medium rounded-lg text-sm px-5 py-2.5 text-center bg-[#087ea4] hover:bg-[#087ea4]/[.8] focus:ring-[#087ea4]/[.5]"
          >
            Add to cart
          </a>
        </div>
      </div>
    </div>
  );
}
/*
browser does not know about above syntax(jsx), it is introduced by react.
So to run it on browser, we need to use Transpiler, it will convert this jsx code to
javascript code. We will use BABEL as Transpiler.
So, to use BABEL, add below script on html file under react's script but above the js's script
<script src="https://unpkg.com/@babel/standalone/babel.min.js"></script>
also add type attribute to js's script:
<script type="text/babel" src="reactScript.js"></script>
*/

ReactDOM.createRoot(document.getElementById("root")).render(
    <>
        <Product />
        <Product />
    </>
);
