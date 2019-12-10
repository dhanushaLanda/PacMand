import * as React from "react";
import Hero from "./hero";
import food from "../css/food.svg";
import FoodGenerator from "../foodGenerator";

export default class Board extends React.Component<any,any> {
    constructor(props: any) {
        super(props);
        this.state = {
            touched : false
        }
    }
    renderFood() {
        let foodGenerator = new FoodGenerator(800,1000,30);
        return foodGenerator.generate().map(
            (f) => <img id="food" style={f}  alt="" src={food}/>)
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
        var food = this.renderFood()
        return (
            <div className="Board">
                <div> {this.renderFood()}</div>
                <Hero />
            </div>
            )
    }
}