import React, { Component } from 'react';
import axios from 'axios';

import './Feed.css'
import { AutoScaling } from 'aws-sdk';

class Feed extends Component{
    constructor(props){
        super(props);

        this.state = {
            arr: [],
            img: '',
            desc: ''
        }
    }

    componentDidMount(){
        axios.get('/api/posts').then((res) => {
            this.setState({
                arr: res.data
            })
        })
    }

    render(){
        let { arr } = this.state;
        return(
            <div id='feed-container'>
                {arr.map( (items, id) => {
                    let img = items.img;
                    console.log(img)
                    let desc = items.post_desc;
                    return <div key = { id } id ='feed-wrapper'>
                        <img id="feed-img" src={ items.img } />
                        <div id='feed-desc-box'>
                            <p> { desc} </p>
                        </div>
                    </div>
                })}
            </div>
        )
    }
}

export default Feed