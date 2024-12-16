import "./Products.css";
import Price from "./Price";

function Products({ title, idx }) {
    let oldPrice = ["12,500", "23,000", "56,000", "54,000"];
    let newPrice = ["32,000", "37,000", "38,000", "45,000"];
    let Description = [
       [ "8,000 DIP","5 Programmable buttons"],
        ["intuitive surface", "designed for iPad pro"],
        ["designed for iPad pro","intuitive surface"],
        ["wireless","optical orientation"],
    ];
    return (
        <div className="Products" >
            <h4>{title}</h4>
            <p>{Description[idx][0]}</p>
            <p>{Description[idx][1]}</p>
            <Price oldPrice={oldPrice[idx]} newPrice={newPrice[idx]} />
        </div>
    );

}
export default Products;