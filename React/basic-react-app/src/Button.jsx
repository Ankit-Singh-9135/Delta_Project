function handleClick(event) {
    console.log("Hello");
    console.log(event);
}

function handleMouseOver() {
    console.log("bye");
}
function hendleDblClick() {
    console.log("you double clicked");
}


export default function Button() {
    return (
        <div>
            <button onClick={handleClick}>Click me!</button>
            <p onMouseOver={handleMouseOver}> Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum velit incidunt temporibus dicta eveniet odio cupiditate impedit quo minima dolorem harum veniam ducimus molestias quas optio animi, quisquam similique accusamus! </p>
            <button onDoubleClick={hendleDblClick}>double click me!</button>
        </div>
    );
}