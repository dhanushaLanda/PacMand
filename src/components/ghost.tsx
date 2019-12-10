import * as React from "react";
import ghost from '../images/ghost.png';
export default class Ghost extends React.Component<any,any> {
    move(){

    }
    render(): React.ReactNode {
        return <div>
            <img id="ghost-image" src={ghost} alt="ghost"/>
        </div>
    }
}