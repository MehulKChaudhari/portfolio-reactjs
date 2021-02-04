import React, {Component} from 'react';
import ReactTypingEffect from 'react-typing-effect';
import Social from '../Components/Social';
import Logo from './logo.jpeg'

class Home extends Component {
    
    
    render() {
        return (
            <div className ="condiv Home">
                <img src={Logo} alt="Mehul Chaudhari" className="profilepic" />
                <br />
                <ReactTypingEffect className="typeff1"
                text={["Hey,"]}
                speed={100} eraseDelay={2500000}
                displayTextRenderer={(text, i) => {
                return (
                    <h1>
                    {text.split('').map((char, i) => {
                        const key = `${i}`;
                        return (
                        <span
                            key={key}
                            style={{color:'#8902be'}}
                        >{char}</span>
                        );
                    })}
                    </h1>
                );
                }}        
            />
             
        
            <br />
        
            <ReactTypingEffect
                text={["I am Mehul,"]}
                speed={100} eraseDelay={25000000}
                
                displayTextRenderer={(text, i) => {
                return (
                    <h1>
                    {text.split('').map((char, i) => {
                        const key = `${i}`;
                        return (
                        <span
                            key={key}
                            style={{color:'rgb(223, 72, 106)'}}
                        >{char}</span>
                        );
                    })}
                    </h1>
                );
                }}        
            />
            <br />
            <ReactTypingEffect
                text={["A front-end developer and Learner."]}
                speed={100} eraseDelay={25000000}
                displayTextRenderer={(text, i) => {
                return (
                    <h1>
                    {text.split('').map((char, i) => {
                        const key = `${i}`;
                        return (
                        <span
                            key={key}
                            style={ {color:'#ee9611'}}
                        >{char}</span>
                        );
                    })}
                    </h1>
                );
                }}        
            />
            
            <Social />
            </div>
        );
        };
}

export default Home