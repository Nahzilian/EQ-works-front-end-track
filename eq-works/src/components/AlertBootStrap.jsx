import React, { useState } from 'react'
import Button from 'react-bootstrap/Button'
import Alert from 'react-bootstrap/Alert'
export default function AlertBootStrap(props) {
    return (
        <div>
            <Alert variant="danger" onClose={() => props.setShow(false)} dismissible>
                <Alert.Heading>Oh snap! You got an error!</Alert.Heading>
                <p>
                    You are requesting data too many time, please try again later!
                </p>
            </Alert>
        </div>
    );
}
