import { Component } from "react";
import { Searchbar } from "./Searchbar/Searchbar";
import { ImageGallery } from "./ImageGallery/ImageGallery";
import { Button } from "./Button/Button";

export class App extends Component  {
  state = {
    value: '',
    page: 1,
  }
  componentDidUpdate(prevProps, prevState) {
    if (prevState.value !== this.state.value) {
      this.setState({page: 1})
      console.log('page', this.state.page)
      console.log('value', this.state.value)      
    }
  }

  handleButtonClick = () => {
    console.log(this.state.page)
    this.setState(prevState => {
      return {page: prevState.page + 1}
    })

  }
  handleFormSubmit = (value) => {
    this.setState({value})
  }
  render () {
    const {page, value} = this.state
    return (
    <div className="App">
      <Searchbar onSubmit={this.handleFormSubmit}/>
      <ImageGallery searchQuery={value} page={page}/>
      {value && <Button onClick={this.handleButtonClick}/>}
    </div>
  );}
};
