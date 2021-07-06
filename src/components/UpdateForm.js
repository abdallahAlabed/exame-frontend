import React, { Component } from 'react'
import {Modal,Form,Button} from 'react-bootstrap'
export class UpdateForm extends Component {
    render() {
        return (
            <div>
                <Modal show={this.props.show} onHide={this.props.closeModal}>
                    <Modal.Header closeButton>
                        <Modal.Title>UpdateForm</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <Form onSubmit={this.props.updateData}>
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label>{this.props.favObj.strDrink}</Form.Label>
                                <Form.Control type="text" placeholder="Enter text" defaultValue="" name="strDrink"/>
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formBasicPassword">
                                <Form.Label>{this.props.favObj.strDrinkThumb}</Form.Label>
                                <Form.Control type="text" placeholder="text" defaultValue="" name="strDrinkThumb"/>
                            </Form.Group>
                            <Button variant="primary" type="submit">
                                Submit
                            </Button>
                        </Form>
                    </Modal.Body>
                </Modal>
            </div>
        )
    }
}

export default UpdateForm
