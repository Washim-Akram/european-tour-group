import { faPhoneSquareAlt, faPlusSquare } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Card } from 'react-bootstrap';
import './User.css';


const User = (props) => {
    const {name,gender,location,email,fee,picture} = props.user;

    const phoneSquareAltIcon = <FontAwesomeIcon icon={faPhoneSquareAlt} />
    const addMeIcon = <FontAwesomeIcon icon={faPlusSquare} />


    return (
        <div>
                <Card className = "single-card" style={{ width: '18rem' }}>
                    <Card.Img variant="top" src={picture.large} alt="user" />
                        <Card.Body>
                            <Card.Title>{name.title} {name.first} {name.last}</Card.Title>
                                <Card.Text>
                                    <h5>Gender : {gender}</h5>
                                    <h6>Country : {location.country}</h6>
                                    <p>Email : <br />{email}</p>
                                    <h3>Fee : {fee}</h3>
                                </Card.Text>
                            <button className = "btn btn-secondary btn-outline-info m-2 p-2"> Add Me {addMeIcon}</button>
                            <button className = "btn btn-secondary btn-outline-info m-2 p-2">Contact Me {phoneSquareAltIcon}</button>
                        </Card.Body>
                </Card>
        </div>
    );
};

export default User;
