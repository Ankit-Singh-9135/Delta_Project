import Product from './Product.jsx';


function ProductTab() {
  // let options=[<li>"hi-teach"</li>,<li>"durable"</li>,<li>"fast"</li>];
  // let options2={a: "hi-teach", b:"durable", c:"fast"};
let styles={
display:"flex",
flexWrap:"wrap",
justifyContent:"center",
alignItem: "center"
};
  return (
    <div style={styles}>
      {/* <Product title="Phone" price={30000} />
      <Product title="Laptao" price={40000} />
      <Product title="Pen" price={30} /> */}

      <Product title="Logitch MX Master " idx={0}/>
      <Product title=" Apple Pencil (2nd Gen) "idx={1}/>
      <Product title=" Zebronics Zeb-transformer"idx={2}/>
      <Product title=" Petronics Toad 23"idx={3}/>


    </div>
  );
}
export default ProductTab;