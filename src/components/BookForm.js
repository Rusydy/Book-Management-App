import React, { useState } from "react"; // useState is a hook
import { Form, Button } from "react-bootstrap"; // Form is a component from react-bootstrap
import { v4 as uuidv4 } from "uuid"; // uuidv4 is a function from uuid

const BookForm = (props) => {
    const [book, setBook] = useState({
        bookname: props.book ? props.book.bookname : '',
        author: props.book ? props.book.author : '',
        quantity: props.book ? props.book.quantity : '',
        price: props.book ? props.book.price : '',
        date: props.book ? props.book.date : ''
    }) 
    // book is an object with the book's data
    // setBook is a function that updates the book's data

    const [errorMsg, setErrorMsg] = useState('') 
    // errorMsg is a string with the error message
    // setErrorMsg is a function that updates the error message

    const { bookname, author, price, quantity } = book; // destructuring book object to get the book's data 

    const handleOnSubmit = (event) => {
        event.preventDefault() // prevent the default behavior of the form
        const values = [bookname, author, price, quantity] // values is an array with the book's data 
        let errorMsg = '' // errorMsg is a string with the error message

        const allFieldsFilled = values.every((field) => {
            const value = `${field}`.trim();
            return value !== '' && value !== '0';
        }) // allFieldsFilled is a boolean that checks if all the fields are filled

        if (allFieldsFilled) {
            const book = {
                id: uuidv4(),
                bookname,
                author,
                price,
                quantity,
                date: new Date().toLocaleDateString()
            }
            props.handleOnSubmit(book) // call the handleOnSubmit function from props
        } else {
            errorMsg = 'Please fill out all the fields.';
        }
        setErrorMsg(errorMsg);
    }

    // handleInputChange is a function that updates the book's data when the user types in the form
    const handleInputChange = (event) => {
        const { name, value } = event.target;
        switch (name) {
            case 'quantity':
                if (value === '' || parseInt(value) === +value) {
                    setBook({ ...book, [name]: value }) // update the book's data
                }
                break;
            case 'price':
                if (value === '' || value.match(/^\d{1,}(\.\d{0,2})?$/)) {
                    setBook({ ...book, [name]: value }) // update the book's data
                }
                break;
            default:
                setBook({ ...book, [name]: value }) // update the book's data
        }
    }

    return (
        <div className="main-form">
            {errorMsg && <p className="errorMsg">{errorMsg}</p>}
            <Form onSubmit={handleOnSubmit}>
                <Form.Group controlId="name">
                    <Form.Label>Book Name</Form.Label>
                    <Form.Control
                        className="input-control"
                        type="text"
                        name="bookname"
                        value={bookname}
                        placeholder="Enter name of book"
                        onChange={handleInputChange}
                    />
                </Form.Group>
                <Form.Group controlId="author">
                    <Form.Label>Book Author</Form.Label>
                    <Form.Control
                        className="input-control"
                        type="text"
                        name="author"
                        value={author}
                        placeholder="Enter name of author"
                        onChange={handleInputChange}
                    />
                </Form.Group>
                <Form.Group controlId="quantity">
                    <Form.Label>Quantity</Form.Label>
                    <Form.Control
                        className="input-control"
                        type="number"
                        name="quantity"
                        value={quantity}
                        placeholder="Enter available quantity"
                        onChange={handleInputChange}
                    />
                </Form.Group>
                <Form.Group controlId="price">
                    <Form.Label>Book Price</Form.Label>
                    <Form.Control
                        className="input-control"
                        type="text"
                        name="price"
                        value={price}
                        placeholder="Enter price of book"
                        onChange={handleInputChange}
                    />
                </Form.Group>
                <Button variant="primary" type="submit" className="submit-btn">
                    Submit
                </Button>
            </Form>
        </div>
    )
}

export default BookForm;