import './App.css'
import {Routes, Route} from "react-router"
import { AboutUsPage } from './pages/aboutus.tsx';
import { SearchPage } from './pages/searchpage.tsx';
import { LoginPage } from './pages/login.tsx';
import { PostsPage } from './pages/posts.tsx';
import { Container } from './layouts/container.tsx';
import { TransportPage } from './pages/transportpage.tsx';
import { RoadPage } from './pages/roadpage.tsx';
import {HomePage} from "./pages/homepage.tsx";
import { AvailableDrivers } from './pages/availabledrivers.tsx';

function App() {
return (
      <Routes>
        <Route element={<Container/>}>
          <Route path='/' element={<HomePage/>} />
          <Route path="/search" element={<SearchPage/>}/>
          <Route path="/posts" element={<PostsPage/>}/>
          <Route path="/aboutus" element={<AboutUsPage/>}/>
          <Route path="/login" element={<LoginPage/>}/>
          <Route path="/transport" element={<TransportPage/>}/>
          <Route path="/road" element={<RoadPage/>} />
          <Route path='/availabledrivers' element={<AvailableDrivers/>} />
        </Route>
      </Routes> 
  )
}

export default App;
