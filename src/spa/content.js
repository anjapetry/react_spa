import React from 'react';
import { Route, Routes } from 'react-router-dom';
import About from './pages/about';
import Contact from './pages/contact';
import Home from './pages/home';
import Services from './pages/services';


class Content extends React.Component {
    state = {  } 
    render() { 
        return (
            <Routes>
                <Route path='/' element={<Home></Home>}></Route>
                <Route path='/about' element={<About></About>}></Route>
                <Route path='/services' element={<Services></Services>}></Route>
                <Route path='/contact' element={<Contact></Contact>}></Route>
            </Routes>
        );
    }
}
 
export default Content;