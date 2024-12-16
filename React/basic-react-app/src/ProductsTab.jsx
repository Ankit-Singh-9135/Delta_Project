import Products from "./Products";
function ProductsTab() {
  let style= {
    display: "flex",
    flexWarp: "wrap",
    justifyContent: "center",
    alignItem: "center",
  };
    return (
        <div style={style}>
            <Products title="Logitech MX Master" idx={0}/>
            <Products title="Apple Pencil (2nd Gen)" idx={1} />
            <Products title= "Zebronics Zeb-transfrom" idx={2}/>
            <Products title="Petronics Toad 23" idx={3}/>

          
        </div>
    );

}

export default ProductsTab;