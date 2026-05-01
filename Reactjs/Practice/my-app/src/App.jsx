import {Route, Routes} from 'react-router-dom'
import CounterApp from './pages/CounterApp'
import Form from './pages/Form'
import Dashboard from './pages/Dashboard'
import Profile from './pages/Profile'
import User from './pages/User'
import Todo from './pages/Todo'
import Search from './pages/Search'
import NotFound from './pages/NotFound'
import PrivateRoute from './pages/PrivateRoute'
import Layout from './components/Layout'
import Form3 from './pages/Form3'

function App() {
  return (
    <>
   {/* <Routes>
       <Route path='/' element={<Layout/>}>
        <Route index element={<CounterApp/>}/>
       <Route path='form' element={<Form/>}/>
       <Route path='dashboard' element={<PrivateRoute><Dashboard/></PrivateRoute>}>
          <Route path='profile' element={<Profile/>}/>
       </Route>
       <Route path='user/:id' element={<User/>}/>
       <Route path='search' element={<Search/>}/>
       <Route path='*' element={<NotFound/>}/>
       </Route>
    </Routes> */}
    
    <Form3/>
   
    </>
    
  )
}

export default App
