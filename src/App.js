import Topbar from "./components/topbar/Topbar";
import Home from "./pages/homepage/Homepage";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import Settings from "./pages/settings/Settings";
import Single from "./pages/single/Single";
import Write from "./pages/write/Write";
// import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Contact from "./pages/contact/Contact";
import { About } from "./pages/about/About";
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";


function App() {
  const user = false;
  return (
    <Router>
      <Topbar />
      <Routes>
        <Route path="/"  element={<Home/>} />
        <Route path="/register" element={user ? <Home /> : <Register />} />
        <Route path="/login" element={user ? <Home /> : <Login />} />
        <Route path="/settings" element={user ? <Settings /> : <Register />} />
        <Route path="/write" element={user ? <Write /> : <Register />} />
        <Route path="/post/:postId" element={<Single />} />
        <Route path="/about"  element={<About/>} />
        <Route path="/contact"  element={<Contact/>} />
      </Routes>
    </Router>
//   );
// }
// function App() {
//   const currentUser = true;
//   return (
//     <Router>
//       <Topbar />
//       <Switch>
//         <Route exact path="/">
//           <Homepage />
//         </Route>
//         <Route path="/posts">
//           <Homepage />
//         </Route>
//         <Route path="/contact">
//           <Contact />
//         </Route>
//         <Route path="/about">
//           <About />
//         </Route>
//         <Route path="/register">
//           {currentUser ? <Homepage /> : <Register />}
//         </Route>
//         <Route path="/login">{currentUser ? <Homepage /> : <Login />}</Route>
//         <Route path="/post/:id">
//           <Single />
//         </Route>
//         <Route path="/write">{currentUser ? <Write /> : <Login />}</Route>
//         <Route path="/settings">
//           {currentUser ? <Settings /> : <Login />}
//         </Route>
//       </Switch>
//     </Router>
  );
}

export default App;