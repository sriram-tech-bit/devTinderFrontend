import { Route, Routes } from "react-router-dom"
import Body from "./components/Body"
import Login from "./components/Login"
import SignOut from "./components/SignOut"
import appStore from "./utils/appStore"
import { Provider } from 'react-redux'
import Feed from "./components/Feed"
import Profile from "./components/Profile"
function App() {
 

  return (
    <>
 <Provider store={appStore}>
   <Routes>
   <Route path="/" element={<Body/>}>
   <Route path="/" element={<Feed/>}></Route>
   <Route path="/Login" element={<Login/>}></Route>
   <Route path="/SignOut" element={<SignOut/>}></Route>
   <Route path="/profile" element={<Profile/>}></Route>
   
   </Route>
   </Routes>
   </Provider>
    
    </>
  )
}

export default App
