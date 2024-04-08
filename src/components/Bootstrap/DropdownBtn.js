"use client"
import Dropdown from "react-bootstrap/Dropdown"
import Button from "react-bootstrap/Button"
import { useEffect } from "react";

export default function DropdownBtn() {
    useEffect(()=>{
        require('bootstrap/dist/js/bootstrap.bundle.min.js');
      }, []);
    return (
        <Dropdown>
            <Button variant="primary" className="dropdown-toggle" id="dropdown-button-example">
                Dropdown button
            </Button>
            <Dropdown.Menu>
                <Dropdown.Item href="#/action-1">Link 1</Dropdown.Item>
                <Dropdown.Item href="#/action-2">Link 2</Dropdown.Item>
                <Dropdown.Item href="#/action-3">Link 3</Dropdown.Item>
            </Dropdown.Menu>
        </Dropdown>
    )
}