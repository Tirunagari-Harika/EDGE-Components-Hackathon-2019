import React, { Component } from 'react';

import './Star.css';


class Star extends Component{
    state = {
        maxRating:5,
        currentRating:0
    }

    markRate = (id) => {
        this.setState({currentRating:parseInt(id)},() => {
            console.log("Current ",this.state.currentRating);
           // this.props.updateRating(this.state.currentRating);
        });
    }

    addRate = (id) => {
        let classes = ["stars"];
        if(id <= this.state.currentRating){
            classes.push("fullStar");
        }
        return classes;
    }

    createStars = () => {
        let arr = [];
        for(let i=this.state.maxRating; i>=1; i--){
            let addRate = this.addRate(i);
            arr.push(<div className={[...addRate].join(" ")}
                key={i-1} id={i} onClick={(event) => this.markRate(event.currentTarget.id)}>&#9734;</div>)
        }
        return arr;
    }

    render(){
        console.log(this.props);
        return(<div>
           <div className="myWrapper">
           {this.createStars()}
           </div>
        </div>)
    }
}

export default Star;
