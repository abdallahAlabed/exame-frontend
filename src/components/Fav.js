import React, { Component } from 'react';
import UpdateForm from './UpdateForm';

export class Fav extends Component {
    state = {
        favDrink: [],
        show: false,
        favObj: {}
    }
    componentDidMount = () => {
        axios.get(`${process.env.REACT_APP_SERVER}/getFavDrinks`).then((response) => {
            this.setState({ favDrink: response.data });
        });

    };
    deleteFav = (i) => {
        const id = this.state.favDrink[i].idDrink;
        axios.delete(`${process.env.REACT_APP_SERVER}/deleteDrinks/${id}`).then((response) => {
            this.setState({ favDrink: response.data });
        });
    }
    updateFav = (i) => {
        this.state({ show: true, favObj: this.state.favDrink[i] });
    }
    closeModel = () => {
        this.state({ show: false });

    }
    updateData = (e) => {
        e.prevntDefualt();
        let newData ={
            strDrink:e.target.strDrink,
            strDrinkThumb:e.target.strDrinkThumb,
            idDrink:this.state.favObj
        }
        axios.put(`${process.env.REACT_APP_SERVER}/updateDrink`, newData).then((response) => {
            this.setState({ favDrink: response.data })
        })
        this.closeModel();


    }
    render() {
        return (
            <div className="card-container">
                {this.state.favDrink.map((obj, i) => {
                    return (
                        <Card style={{ width: '18rem' }} key={i}>
                            <Card.Img variant="top" src={obj.strDrinkThumb} />
                            <Card.Body>
                                <Card.Title>{obj.strDrink}</Card.Title>
                                <Button variant="primary" onClik={() => deleteFav(i)} >delete</Button>
                                <Button variant="primary" onClik={() => updateFav(i)} >delete</Button>

                            </Card.Body>
                        </Card>
                    );
                }
                )}
                <UpdateForm
                    show={this.state.show}
                    closeModal={this.closeModel}
                    favObj={this.state.favObj}
                    updateData={this.updateData}
                />
            </div>
        )
    }
}

export default Fav
