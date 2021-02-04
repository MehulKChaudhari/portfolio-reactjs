import { render } from '@testing-library/react';
import React, {Component} from 'react';

import Card from '../Components/Card';

class Education extends Component {
    render() {
        return (
            <div className="condiv">
                <h1 className="subtopic">My Education</h1>
                <Card title="Btech Computer Science" where = "MIT School Of Engineering" from="2018" to="2022" />
            </div>
        )
    }
}

export default Education