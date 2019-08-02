import React, { Component } from 'react';
import axios from 'axios';

import './FullPost.css';

class FullPost extends Component {
    state = {
        loadedPost: null
    }

    componentDidMount() {
        console.log(this.props);
        this.loadData();
        
    }
    componentDidUpdate()
    {
         console.log(this.props);
         this.loadData();
    }
    loadData(){
        if ( this.props.match.params.id ) {
            if ( !this.state.loadedPost || (this.state.loadedPost && this.state.loadedPost.id !== +this.props.match.params.id) ) {
               console.log('inside');
                axios.get( '/users/' + this.props.match.params.id )
                    .then( response => {
                        // console.log(response);
                        this.setState( { loadedPost: response.data } );
                    } );
            }
        }
    }

    
    render () {
        let post = <p style={{ textAlign: 'center' }}>Please select a Post!</p>;
        if ( this.props.match.params.id) {
            post = <p style={{ textAlign: 'center' }}>Loading...!</p>;
        }
        if ( this.state.loadedPost ) {
            post = (
                <div className="FullPost">
                    <h1>{this.state.loadedPost.name}</h1>
                    <p>Username:{this.state.loadedPost.username}</p>
                    <p>Email:{this.state.loadedPost.email}</p>
                    <p>Phone:{this.state.loadedPost.website}</p>
                    <p>Website:{this.state.loadedPost.website}</p>
                </div>

            );
        }
        return post;
    }
}

export default FullPost;