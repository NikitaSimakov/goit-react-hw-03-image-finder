import { Component } from "react";
import { Searchbar } from "./Searchbar/Searchbar";
import { ImageGallery } from "./ImageGallery/ImageGallery";
import { Button } from "./Button/Button";
import { Modal } from "./Modal/Modal";
import { Loader } from "./Loader/Loader";

export class App extends Component  {
  state = {
    value: '',
    page: 1,
    largeImg: '',
    showModal: false,
    isLoading: false,
  }
  componentDidUpdate(prevProps, prevState) {
    if (prevState.value !== this.state.value) this.setState({page: 1})
  }
  handleButtonClick = () => {
    this.setState(prevState => {
      return {page: prevState.page + 1}
    })

  }
  handleFormSubmit = (value) => this.setState({value})

  handleShowModalToggle = () => this.setState(({showModal}) => ({showModal: !showModal}))
  
  handleGetLargeImg = (link) => {
this.setState({largeImg: link})
this.handleShowModalToggle();
  }
  handleLoading = () => {
    this.setState(prevState => {
      return {isLoading: !prevState.isLoading}
    })
  }
  render () {
    const {page, value, largeImg, showModal, isLoading} = this.state;
    const {handleFormSubmit,handleGetLargeImg,handleLoading,handleButtonClick,handleShowModalToggle} = this
    return (
    <div className="App">
      <Searchbar onSubmit={handleFormSubmit}/>
      <ImageGallery searchQuery={value} page={page} getLargeImg={handleGetLargeImg} isLoading={handleLoading}/>
      {isLoading && <Loader />}
      {value && <Button onClick={handleButtonClick}/>}
      {showModal && <Modal link={largeImg} onKeydown={handleShowModalToggle}/>}
    </div>
  );}
};
