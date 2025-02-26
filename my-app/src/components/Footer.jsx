import React from "react";
import {Row, Col} from 'react-bootstrap';

const Footer = () => {

    const currentYear = new Date().getFullYear()

    return(
        <footer>
            <Row className="text-center">
                <Col>
                        NPU &copy;{currentYear} || All Right Reserved.
                </Col> 
            </Row>
           
        </footer>
    )
}
export default Footer