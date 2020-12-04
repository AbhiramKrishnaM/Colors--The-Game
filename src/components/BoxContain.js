import React, { Component} from 'react';
import Box from './Box';
import '../css/BoxContain.css';
class BoxContain extends Component {
    static defaultProps = {
        nBox:18
    }
    render(){
        const boxes = Array.from({length:this.props.nBox});
        return(
            <div className="Contain">
                {boxes.map(st => <Box />)}
            </div>
        )
    }
}
 

export default BoxContain;