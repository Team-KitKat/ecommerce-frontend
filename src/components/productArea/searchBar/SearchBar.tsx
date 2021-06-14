import React from 'react';
import {Col, Container, Form, FormControl, InputGroup, Row} from "react-bootstrap";

const SearchBar: React.FC = () => {
    return (
            <Row className='search-bar text-center my-5'>
                <Col xs={{span: 5, offset: 4}}>
                    <Form className='search-form'>
                        <InputGroup className="mb-3 search-box">
                        <InputGroup.Prepend >
                            <InputGroup.Text id="basic-addon1"><i className='feather-search'/></InputGroup.Text>
                        </InputGroup.Prepend>
                        <FormControl type="text" placeholder="Search..." className="search-txt mr-sm-2" />
                        </InputGroup>
                    </Form>
                </Col>
            </Row>
    );
};

export default SearchBar;