import React, { Component } from 'react'
import PopupModal from '../PopUp/PopupModal'

export class Home extends Component {
    constructor(props){
        super(props)
        this.state = {
            show: false
        }
        this.popupHandler = this.popupHandler.bind(this)
        this.closeModal = this.closeModal.bind(this)
    }
    popupHandler(){
        this.setState(state => ({
            show: !this.state.show
            })
        )
    }
    closeModal(){
        this.setState(state=>({
            show: false
        })
        )
    }
    render() {
        return (
            <div>
                Home
                DropDown upcoming

                <br/>
                <button onClick={this.popupHandler} >Click for PopUp</button>
                <PopupModal show={this.state.show} closeModal={this.closeModal} />
                <br/>
            </div>
        )
    }
}

export default Home
