export default function Price({ oldPrice, newPrice }) {
    let oldStyles = {
        textDecorationLine: "line-through",
    };
    let newStyles = {
        fontWeight: "bold",
    };
    let Styles = {
        backgroundColor: "#e0c367",
        height: "30px",
        width: "200px",
        borderBottomLeftRadius:"14px",
        borderBottomRightRadius:"14px",


    };
    return (
        <div style={Styles}>
            <span style={oldStyles}>{oldPrice}</span>
            &nbsp;  &nbsp;  &nbsp;
            <span style={newStyles}>{newPrice}</span>
        </div>
    )
}