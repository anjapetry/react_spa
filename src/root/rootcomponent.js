import React from 'react';
import Content from '../spa/content';
import Menu from '../spa/menu';

class Rootcomponent extends React.Component {
    state = {  } 
    render() { 
        return (
            <div>
                   <h1>SPA</h1>
                   <Menu></Menu>
                   <Content></Content>
            </div>
         
        );
    }
}
 
export default Rootcomponent;