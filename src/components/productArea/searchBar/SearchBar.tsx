import React, {useState} from 'react';
import {Col, Container, Form, FormControl, InputGroup} from "react-bootstrap";
import Autocomplete from 'react-autocomplete';
// @ts-ignore
import { ReactSearchAutocomplete } from 'react-search-autocomplete'
import {useSelector} from "react-redux";
import {RootState} from "../../../redux/store";
const SearchBar: React.FC = () => {
        const products=useSelector((state:RootState)=>state.products.value);
        const newList = products.map(function(val, index){
            return {id:index, name:val.name};
        })

        const handleOnSearch = (string: any, results: any) => {
            // onSearch will have as the first callback parameter
            // the string searched and for the second the results.
            console.log(string, results)
        }

        const handleOnHover = (result: any) => {
            // the item hovered
            console.log(result)
        }

        const handleOnSelect = (item: any) => {
            // the item selected
            console.log(item)
        }

        const handleOnFocus = () => {
            console.log('Focused')
        }

        return (
        <Col xs={12}>
            <Container className='search-bar text-center my-4'>
                <Col xs={{span: 8, offset: 2}}>
                    <div className="AutoComplete">
                        <ReactSearchAutocomplete
                            placeholder="Search..."
                            items={newList}
                            onSearch={handleOnSearch}
                            onHover={handleOnHover}
                            onSelect={handleOnSelect}
                            onFocus={handleOnFocus}
                            autoFocus
                            styling={
                                {
                                    position: "absolute",
                                }
                            }
                        />
                    </div>

                </Col>
            </Container>
        </Col>
    );
};

export default SearchBar;