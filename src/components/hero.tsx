import * as React from 'react';
import logo from '../images/pacman.png';
export default class Hero extends React.Component<any,any> {
    constructor(props : any){
        super(props);
        this.state  = {
                top: 400,
                left:500,
        }
    }
    handleMouseDown(event: any){
        console.log(window.screen.width);
        if (!this.isImageInsideTheWindow()) {
        switch (event.key) {
            case 'ArrowLeft' :
                this.setState({left : this.state.left - 10});
                break;
            case "ArrowRight" :
                this.setState({left : this.state.left + 10});
                break;
            case "ArrowUp" :
                this.setState({top: this.state.top - 10})
                break;
            case "ArrowDown" :
                this.setState({top : this.state.top + 10});
                break;

        }
        }
    }

    private isImageInsideTheWindow() {
        return window.screen.width > this.state.left || (window.screen.height === this.state.top);
    }

    componentDidMount(): void {
        document.addEventListener('keydown', this.handleMouseDown.bind(this));
    }

    render(): React.ReactNode {
        return <div>
            <img style= {this.state} id="hero-image" src={logo}  alt="logo"/>
        </div>
    }
}