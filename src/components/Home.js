import React, { Component } from 'react'
import axios from "axios";
import { response } from 'express';
import { Card, Button } from 'react-bootstrap'
export class Home extends Component {
    state = {
        drink: []
    }


    componentDidMount = () => {
        axios.get(`${process.env.REACT_APP_SERVER}/getDrinks`).then((response) => {
            this.setState({ drink: response.data })
        })

    };



 addFav=(i)=> {
    axios.post(`${process.env.REACT_APP_SERVER}/addDrink`,this.state.drink[i])
}










    render() {
        return (
            <div className="card-container">
                {this.state.drink.map((obj, i) => {
                    return (
                        <Card style={{ width: '18rem' }} key={i}>
                            <Card.Img variant="top" src={obj.strDrinkThumb} />
                            <Card.Body>
                                <Card.Title>{obj.strDrink}</Card.Title>
                                <Button variant="primary" onClik={()=>addFav(i)} >Add</Button>
                            </Card.Body>
                        </Card>
                    ); }
                )}
            </div>
        )
    }
}

export default Home
