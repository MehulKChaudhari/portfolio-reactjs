import React, { Component } from 'react';
import Social from '../Components/Social';

class Skills extends Component {
    constructor(props) {
        super(props);
        this.state={
            'myskills':['HTML5','CSS3','JavaScript','react js', 'Python', 'C/C++', 'Linux', 'docker', 'MySQL', ]
        };
    }
    render() {
        return (
            <div className="condiv Skills">
                <h1 className="subtopic">Tools & Technologies!</h1>
                <ul className="skill">
                    {this.state.myskills.map((value)=> {
                        return <li>{value}</li>
                    })}
                </ul>
                <div>
                    <Social />
                </div>
                
            </div>
        )   
    }
}

export default Skills