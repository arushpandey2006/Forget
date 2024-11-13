import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Forget from "./component/Forget"
import OtpPage from './Otp/OtpPage';
import {createBrowserRouter,RouterProvider,Route,
} from "react-router-dom";


// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <Forget/>
//   },
//   {
//     path: "OtpPage",
//     element: <OtpPage/>
//   },
// ]);

//   <RouterProvider router={router}/>


function App() {
  return (
    <div className="App">
      <Forget/>


    </div>
  );
}

export default App;
