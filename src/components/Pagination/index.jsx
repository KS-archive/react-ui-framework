import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { Container, Page, Label, PageActive, PageContainer} from './styles';

class Pagination extends PureComponent{
    
    constructor(props) {
        super(props);
        this.state = {
             array: [],
             currentPage: 1
         }
    this.createArray = this.createArray.bind(this);
    this.nextPage = this.nextPage.bind(this);
    this.previousPage = this.previousPage.bind(this);
    }

    // goToPage(index){
    //     if (index == this.state.currentPage) {
    //       <PageActive href={index} target="_blank">{index}</PageActive>;
    //     } 
    //     else {
    //       <Page href={index} target="_blank">{index}</Page>);
    //     }
    // }

    createArray(){
        var index = 1,
            array1 = [];
        while (index <= this.props.pageCount) {
            if (index == this.state.currentPage){
                array1.push(<PageActive href={index} target="_blank">{index}</PageActive>);
            } 
            else {
                array1.push(<Page href={index} target="_blank">{index}</Page>);
            }
            index++;
        }
        this.setState({ array: array1 })
    }

    nextPage(){
        if(this.state.currentPage<this.props.pageCount){
             this.setState({currentPage: this.state.currentPage + 1});
        }
        else {
            this.setState({ currentPage: this.state.currentPage });
        } 
    }
    previousPage(){
        if(this.state.currentPage>1){
             this.setState({currentPage: this.state.currentPage - 1});
        }
        else {
            this.setState({ currentPage: this.state.currentPage });
        } 
    }

    componentDidMount(){
        this.createArray();
    }
    // componentDidUpdate(){
    //     this.createArray();
    // }
    

    render(){
        return (
        <Container 
                   pageCount={this.props.pageCount}
        >
            <Label previousLabel={this.props.previousLabelClass}
                   onClick={this.previousPage}><i class="fas fa-arrow-left"></i></Label>
        
                {this.state.array}
             
            <Label nextLabelClass={this.props.nextLabelClass}
                   onClick={this.nextPage}><i class="fas fa-arrow-right"></i> </Label>
        {this.state.currentPage}
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