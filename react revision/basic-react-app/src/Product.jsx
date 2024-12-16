import "./Product.css";
import Price from "./Price";

function Product({ title, idx }) {
    // if(price > 30000){
    // let isDiscount = price >3000
    // let styles = {backgroundColor: isDiscount ? "yellow" : " purple"}

    let oldPrice = ["12,035", "835", "15,876", "876"]
    let newPrice = ["8,999", "6,599", "235", "140"]
    let Description = [
        ["8,000 DPI", "5 Programmable buttoms"],
        ["intuitive surface", "designed for ipad pro"], 
         ["designed for ipad pro", "intuitive surface"], 
         ["wireless","opticat orientation"]
        ];
    return (
        // <div className="Product" style={styles}>
        //     <h3>{title}</h3>
        //     <h5>Price :{price}</h5>
        //     {isDiscount && <p>Discount of 5%</p>}
        //     {/* <p>{features.map((feature)=><li>{feature}</li>)}</p> */}
        // </div>

        <div className="Product">
            <h4>{title}</h4>

            <p>{Description[idx][0]}</p>
            <p>{Description[idx][1]}</p>

            <Price oldPrice={oldPrice[idx]} newPrice={newPrice[idx]} />

        </div>
    );


}
export default Product;