import React, { Component } from 'react';
import './FooterWithScrollStyle.css'

class FooterWithScroll extends Component {
    componentDidMount(){
        if (window.scrollY>200) {
            this.setState({scrolll:true})
        }
        console.log(this.scrolll);
    }

  
    
    render() {
        return (
            <div className='col-12 col-md-8 footer_with_scrll mx-auto'>
                
            </div>
        );
    }
}

export default FooterWithScroll;