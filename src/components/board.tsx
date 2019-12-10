import * as React from "react";
import Hero from "./hero";
import food from "../css/food.svg";

export default class Board extends React.Component<any,any> {
    constructor(props: any) {
        super(props);
        this.state = {
            touched : false
        }
    }
    componentDidMount(): void {
        setTimeout(() => {
            // @ts-ignore
            var foodElement = document.getElementById("food").getBoundingClientRect();
            // @ts-ignore
            var heroElement = document.getElementById("hero-image").getBoundingClientRect();
            // @ts-ignore
            if (foodElement.x === heroElement.x)
               this.setState({touched : true})

        },1000)
    }
    render(): React.ReactNode {
        return <div className="Board">
            {
                !this.state.touched && <img id="food" src={food} alt=""/>
            }

            <Hero />
        </div>
    }
}