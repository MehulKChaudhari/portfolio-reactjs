import React, {Component} from 'react';
import Social from '../Components/Social'

class About extends Component {
    render() {
        return (
            <div className="condiv">
                <h1 className="subtopic">About Me</h1>

                <h4>Sie da! 👋 I'm Mehul.</h4>
                <br></br>

                <p> I started my journey in the world of computers from a yound age, I was very fascinated and curious about how computers work and how they do so much in neglible time, Now I'm 20 Years old, Pursing my Computer Science Degree in MIT School of Engineering, Pune. Web Development is what started looking at my friends but now its my center of interest, I am always curious to learn about things I hear or come across. My current goals are to learn CyberSecurity and DevOps Side. I love the Idea of docker and Kubernetes using containers to develop and deploy site with surity of security.
                     A Open source enthusiast I also love the idea of Open Source. A naive open sourcer today and a core contributer tomorrow.

                </p>
                <Social />
            </div>
        )
    }
}

export default About