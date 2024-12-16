// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'

// function App() {
//   const [count, setCount] = useState(0)

//   return (
//     <>
//       <div>
//         <a href="https://vitejs.dev" target="_blank">
//           <img src={viteLogo} className="logo" alt="Vite logo" />
//         </a>
//         <a href="https://react.dev" target="_blank">
//           <img src={reactLogo} className="logo react" alt="React logo" />
//         </a>
//       </div>
//       <h1>Vite + React</h1>
//       <div className="card">
//         <button onClick={() => setCount((count) => count + 1)}>
//           count is {count}
//         </button>
//         <p>
//           Edit <code>src/App.jsx</code> and save to test HMR
//         </p>
//       </div>
//       <p className="read-the-docs">
//         Click on the Vite and React logos to learn more
//       </p>
//     </>
//   )
// }

// export default App
// -------------------------------------------------------------------------  
import './App.css';
// import Title from "./Title.jsx";
import ProductsTab from './ProductsTab.jsx';
// import Products from './Products.jsx';
// import MsgBox from "./MsgBox.jsx";
import Button from './Button.jsx';
import Form from './Form.jsx';

function App() {
  return (
    <>
   {/* <MsgBox userName="Ankit" textColor="yellow" />
   <MsgBox userName="National" textColor="blue" /> */}
{/* <h2>Blockbuster Deals | Shop Now</h2> */}
      {/* <ProductsTab /> */}
      {/* <Button /> */}
      <Form />
    </>
  );
}

export default App;


