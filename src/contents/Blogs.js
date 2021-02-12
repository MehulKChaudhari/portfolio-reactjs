import React, { Component } from 'react';
import Social from '../Components/Social';

class Blogs extends Component {
    render() {
        return (
            <div className="condiv Skills">
                <h1 className="subtopic">Blogs</h1>
                <h2> Algorithm-A deep dive</h2>
                <a href="https://blog.codestrike.in/algorithms-a-deep-dive">Check here to read the Blog!</a>
                <div>
                    <Social />
                </div>
                
            </div>
        )   
    }
}
export default Blogs