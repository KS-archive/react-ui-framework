import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { Container, Label, PageActive, PageDisabled } from './styles';
// import {Page} from '../Page/index';


class Pagination extends PureComponent{
    
    constructor(props) {
        super(props);
        this.state = {
             currentPage: 1,
         }
    this.createArray = this.createArray.bind(this);
    this.nextPage = this.nextPage.bind(this);
    this.previousPage = this.previousPage.bind(this);
    // this.handleClick = this.handleClick.bind(this);
    // this.goToPage = this.goToPage.bind(this);
    }

    createArray(currentPage){
        var index = 1,
            array= [];
        while (index <= this.props.pageCount) {
            if(index == currentPage){
               array.push(<PageActive id={index} href={index} target="_blank">{index}</PageActive>);
            }
            else{
                array.push(<PageDisabled  id={index} href={index} target="_blank">{index}</PageDisabled>);
            }
            index++;
        }
        return array;
    }

    nextPage(){
        
        if(this.state.currentPage<this.props.pageCount){
             this.setState({currentPage: this.state.currentPage + 1});
        }
        this.createArray(this.state.currentPage);
    }
    previousPage(){
        if(this.state.currentPage>1){
             this.setState({currentPage: this.state.currentPage - 1});
        }
        this.createArray(this.state.currentPage);
    }
 
    componentDidMount(){
        this.createArray(this.state.currentPage);
    }
    // shouldComponentUpdate(nextProps, nextState){
    //     let shouldUpdate = this.state.status !== nextState.status;
    //     return shouldUpdate;
    // }
    // componentWillUpdate(prevState){
    //     if(prevState.data != this.state.data){
    //         this.createArray();
    //         console.log('I did updated!');
    //     }
    // }
 
    render(){
        return (
        <Container pageCount={this.props.pageCount}>
            <Label previousLabel={this.props.previousLabelClass}
                   onClick={this.previousPage}><i class="fas fa-arrow-left"></i></Label>
                     {this.createArray(this.state.currentPage)}
            <Label nextLabelClass={this.props.nextLabelClass}
                   onClick={this.nextPage}><i class="fas fa-arrow-right"></i> </Label>
    
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
{/* <Page id={index} href={index} target="_blank">{index}</Page>
<PageActive id={index} href={index} target="_blank">{index}</PageActive> */}