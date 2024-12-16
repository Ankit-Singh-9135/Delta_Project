// import "./App.css";
import Button from "@mui/material/Button";
import DeleteIcon from "@mui/icons-material/Delete";
import Alert from '@mui/material/Alert';
import WeatherApp from "./WeatherApp";



function App() {
  //   let handelClick = () => {
  //     console.log("Button was Clicked");
  //   };
  return (
    <>
      {/* <h1>Material UI Demo</h1>
      <Button
        variant="contained"
        onClick={handelClick}
        startIcon={<DeleteIcon />}
      >
        Delete!
      </Button>
      {/* <Button
        variant="contained"
        onClick={handelClick}
        color="success"
        size="small"
      >
        Click Me!
      </Button> */}
      {/* <Alert severity="error">Delete Option is given.</Alert>  */}
     <WeatherApp/>
    </>
  );
}

export default App;