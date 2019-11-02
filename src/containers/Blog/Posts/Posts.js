import React,{Component} from 'react';
import axios from '../../../axios';
import Post from '../../../components/Post/Post';
import { Route } from 'react-router-dom';
import './Posts.css';
import FullPost from '../FullPost/FullPost'
class Posts extends Component{
    state = {
        posts: []
        
    }
    componentDidMount () {
        console.log(this.props);
        axios.get( '/users' )
            .then( response => {
                const posts = response.data.slice(0, 10);
                this.setState({posts: posts});
                // console.log( response );
            } )
            .catch(error => {
                 console.log(error);
               // this.setState({error: true});
            });
    }
    postSelectedHandler = (id) => {
        this.props.history.push({pathname: '/posts/'+id})
    }

     render()
     {
        let posts = <p style={{textAlign: 'center'}}>Something went wrong!</p>;
        if (!this.state.error) {
            posts = this.state.posts.map(post => {
                return (
                //<Link to={'/posts' + post.id}  >
                <Post 
                    key={post.id}
                    name={post.name} 
                clicked={() => this.postSelectedHandler(post.id)} />
                //</Link>
                );
            });
        }
          return(
              <div>
                <section className="Posts">
                 {posts}
                </section>
                <Route path={this.props.match.url+ '/:id'} exact component={FullPost} />
              </div>
           
          );
     }
}

export default Posts;