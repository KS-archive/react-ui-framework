import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { Container, Page, Label, a } from './styles';

class Pagination extends PureComponent{
    
    constructor(props) {
        super(props);
        this.state = {
             array: [],
             currentPage: 1
         }
    //   this.createArray = this.createArray.bind(this);
    }

    componentDidMount(){
        var index = 1,
            array1 = [];
    while( index<=this.props.pageCount)
        {
           array1.push(<Page key={index}>{index}</Page>);
             console.log({index});
          index++;
        }
       this.setState({array: array1})
    }

    render(){
        return (
        <Container pageCount={this.props.pageCount}>
                <Label previousLabel={this.props.previousLabelClass}><i class="fas fa-arrow-left"></i></Label>
              {this.state.array}
                <Label nextLabelClass={this.props.nextLabelClass}><i class="fas fa-arrow-right"></i> </Label>
        </Container>
    );
    }
    
};

Pagination.propTypes = {
    pageCount: PropTypes.number.isRequired,
    previousLabelClass: PropTypes.string,
    nextLabelClass: PropTypes.string
};

Pagination.defaultProps = {
    pageCount: 1
};

export default Pagination;
// array = { this.createArray(this.props.pageCount) }