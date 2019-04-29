import React, { Component } from 'react';
import './Home.css'

class Home extends Component{
    render(){
        return(
            <div id='home'>

                <div id='header'>
                    <div id='logo-container'>
                        <img id='logo'  className='img' src="https://saltislandseaplanes.com/wp-content/uploads/2017/12/instagram-png-instagram-icon-1600-600x600.png"/>
                        <div id='line'></div>
                        <h1>Instagram</h1>
                    </div>
                    
                    <input id='search-box' />
                    {/* src for the img http://www.stickpng.com/assets/images/585e4ae9cb11b227491c3394.png */}

                    <div id='navigations-container'>
                        <img id='compass' className='img' src="https://www.freeiconspng.com/uploads/compass-icon-22.png"/>
                        <img id='heart' className='img' src="http://chittagongit.com/download/348095"/>
                        <img id='profile' className='img' src="http://simpleicon.com/wp-content/uploads/user-1.svg" />
                    </div>
                    
                </div>

                {/* <div id='home-feed-wrapper'>
                
                </div> */}
            </div>
        )
    }
}

export default Home;