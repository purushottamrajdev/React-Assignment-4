import React, { Component } from 'react';
// import axios from 'axios';
import axios from '../../axios';
import './Blog.css';
import Posts from './Posts/Posts';
import {Route,NavLink,Switch,Redirect} from 'react-router-dom';
import NewPost from './NewPost/NewPost';
import FullPost from './FullPost/FullPost'
class Blog extends Component {
    render () {
       

        return (
            <div className="Blog">
                <header>
                    <center><h3>USER INFORMATION MANAGEMENT SYSTEM</h3></center>
                    <nav>
                        <ul>
                            <li><NavLink to="/posts" 
                            activeClassName="my-active"
                            activeStyle={{color:'#FF0000',textDecoration: 'underline'}}
                            exact
                            >Home</NavLink></li>
                            <li><NavLink to={{
                                pathname: '/new-post',
                            }}  activeClassName="my-active" activeStyle={{color:'#FF0000ed',textDecoration: 'underline'}} >CREATE NEW USER</NavLink></li>
                        </ul>
                    </nav>
                </header>
               { /*<Route path="/" exact render={()=><h1>Home</h1>} />
                <Route path="/" render={()=><h1>Home 2</h1>} /> */}
                <Switch>
                <Route path='/new-post'  component={NewPost} />
                <Route path="/posts" component={Posts} />
                <Redirect from="/" to="/posts"/>
                {/* <Route path="/" component={Posts} /> */}
                </Switch>
                
            </div>
        );
    }
}

export default Blog;