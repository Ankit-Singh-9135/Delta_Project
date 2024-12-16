function HandleClick(event) {
    console.log("Hello! ");
    console.log(event);
  }
  function HandleMouseOver() {
    console.log("Bye Bye! ");
  }
  
  function HandleDblClick() {
    console.log("You double Click! ");
  }
  
  export default function Button() {
    return (
      <div>
        <button onClick={HandleClick}>Click Me!</button>
        <p onMouseOver={HandleMouseOver}>This parah is for event demo</p>
        <button onDoubleClick={HandleDblClick}>Double Click Me!</button>
      </div>
    );
  }