import React from "react";
import MarketCardList from "./MarkerCardList/MarketCardList";

export default class App extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            balloons: []
        }
    }

    componentDidMount() {
        fetch('https://balloons-api-project.herokuapp.com/balloons')
            .then((response) => response.json())
            .then((result) => {
                console.log(result);
                this.setState({balloons: result});
            })
    }

    renderBalloons() {
        if (this.state.balloons.length) {
            return <MarketCardList productList={this.state.balloons}/>
        }

        return  <div className="loading">
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            Loading...
        </div>
    }

    render() {
        return (
            <div className={'App'}>
                <br/>
                <br/>
                <h2>Список товаров<br/><br/></h2>
                <div>
                    {this.renderBalloons()}
                </div>
                <br/>
                <br/>
            </div>
        )
    }
}