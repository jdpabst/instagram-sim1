import React, { Component } from 'react';
import Feed from '../Feed/Feed';
import './Home.css'


class Home extends Component{
    render(){
        return(
            <div id='home'>

                <div id='header'>
                    <div id='flex-wrapper'>
                        <div id='logo-container'>
                            <img id='logo'  className='img' src="https://saltislandseaplanes.com/wp-content/uploads/2017/12/instagram-png-instagram-icon-1600-600x600.png"/>
                            <div id='line'></div>
                            <h1>Instagram</h1>
                        </div>
                        
                        <div id='search-box-wrapper'>
                            <img src='https://cdn2.iconfinder.com/data/icons/ios-7-icons/50/search-512.png' id='search-icon' />
                            <input id='search-box' placeholder='Search' />
                        </div>
                       

                        <div id='navigations-container'>
                            <img id='compass' className='img' src="https://www.freeiconspng.com/uploads/compass-icon-22.png"/>
                            <img id='heart' className='img' src="http://chittagongit.com/download/348095"/>
                            <img id='profile' className='img' src="http://simpleicon.com/wp-content/uploads/user-1.svg" />
                        </div>
                    </div>
                </div>

                <div id='home-feed-wrapper'>
                    < Feed />
                </div>
                {/* will map through the items given to us from the database to fill the feed here. Should just create a new component for each. */}
            </div>
        )
    }
}

export default Home;