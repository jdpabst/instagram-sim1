import React, { Component } from 'react';
import axios from 'axios';
import ImageUploader from 'react-images-upload';

import './Feed.css'
import { AutoScaling } from 'aws-sdk';

class Feed extends Component{
    constructor(props){
        super(props);

        this.state = {
            arr: [],
            img: '',
            desc: '',
        }

        this.addPost = this.addPost.bind(this);
        this.uploadImages = this.uploadImages.bind(this);
    }

    componentDidMount(){
        axios.get('/api/posts')
        .then((res) => {
            console.log(res);
            setTimeout(() => {
                this.setState({
                    arr: res.data
                })
            }, 2000)
            
        })
    }

    addPost(picture){
        this.setState({
            // add whatever is coming back to what's already in the arr on state
            arr: this.state.arr.concat(picture)
        })
        console.log(this.state.arr);
    }

    uploadImages(){
        let uploadPromises = this.state.arr.map(image =>{
            let data = new FormData();
            data.append('image', image, image.name)
            return axios.post('/api/posts/add', data)
        })

        axios.all(uploadPromises)
        .then(res => {
            console.log('server response: ')
            console.log(res)
        }).catch( e =>{
            console.log(e);
        })
    }

    render(){
        let { arr } = this.state;
        return(
            <div id='feed-container'>

                <ImageUploader
                    withIcon={true}
                    withPreview={true}
                    buttonText='Choose a picture to add to your feed'
                    onChange={this.addPost}
                    imgExtension={['.jpg', '.gif', '.png', '.gif']}
                    maxFileSize={5242880}
                />
                <button onClick={this.uploadImages}>upload picture</button>

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