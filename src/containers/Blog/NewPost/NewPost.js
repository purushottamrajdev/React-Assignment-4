import React, { Component } from 'react';
import axios from 'axios';
import {Redirect } from 'react-router-dom';
import './NewPost.css';

class NewPost extends Component {
    state = {
        name: '',
        username: '',
        email: '',
        phone:'',
        website:'',
        isSubmited: false
    }
componentWillMount(){
    console.log(this.props);
}
    postDataHandler = () => {
        const data = {
            name: this.state.name,
            username: this.state.username,
            email: this.state.email,
            phone:this.state.phone,
            website:this.state.website
        };
        axios.post('/users', data)
            .then(response => {
                console.log(response);
                this.props.history.push('/posts');
               // this.setState({isSubmited: true});
            });
    }
    
    render () {
        let redirect=null;
        if(this.state.isSubmited)
        { 
            redirect=<Redirect to="/posts" />
        }
        return (
            <div className="NewPost">
                {redirect}
                <h1>Add a New User</h1>
                <label>Name</label>
                <input type="text" value={this.state.name} onChange={(event) => this.setState({name: event.target.value})} />
                <label>Username</label>
                <input type="text" value={this.state.username} onChange={(event) => this.setState({username: event.target.value})} />
                <label>Email</label>
                <input type="text" value={this.state.email} onChange={(event) => this.setState({email: event.target.value})} />
                <label>Phone</label>
                <input type="text" value={this.state.phone} onChange={(event) => this.setState({phone: event.target.value})} />
                <label>Website</label>
                <input type="text" value={this.state.website} onChange={(event) => this.setState({website: event.target.value})} />
                <button onClick={this.postDataHandler}>Add Post</button>
            </div>
        );
    }
}

export default NewPost;