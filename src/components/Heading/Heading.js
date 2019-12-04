import React, {Component} from 'react';
import './Heading.scss';
import propTypes from 'prop-types';


export default class Heading extends Component{
    constructor(props){
        super(props);
    }

    render(){
        const H = 'h' + this.props.headingLevel;
        return(
            <H>
                {this.props.text}
            </H>
        )
    }
}

Heading.propTypes = {
    display: propTypes.string,
    fontColor: propTypes.string,
    fontFamily: propTypes.string,
    fontSize: propTypes.oneOfType([propTypes.number, propTypes.string]),
    headingLevel: propTypes.string,
    text: propTypes.string,
};

Heading.defaultProps = {
    display: 'block',
    fontColor: 'rgb(0, 0, 0)',
    fontFamily: '',
    fontSize: '1em',
    headingLevel: '1',
    text: '',
}