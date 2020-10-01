import React, { Component } from 'react';
import Header from '../components/Header';
import Meta from '../components/Meta';
import styled from 'styled-components'

const MyButton = styled.button`
    background: red ;
    font-size: ${props => props.size? props.size+'px': '50px' };
    .poop{
        font-size: 100px
    }
`;

class Page extends Component {
    render() {
        return (
            <div>
                <Meta/>
                <Header/>
                <MyButton size='100'>
                    Click Me
                    <span className='poop'>💩</span>
                </MyButton>
                <MyButton >
                    Click Me
                    <span className='poop'>💩</span>
                </MyButton>
                {this.props.children}      
            </div>
        );
    }
}

export default Page;