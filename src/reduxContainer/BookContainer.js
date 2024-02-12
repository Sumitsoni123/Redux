import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import purchase_book from './BookAction';

const BookContainer = () => {
    const books = useSelector(state => state.NumberOfBooks);
    const dispatch = useDispatch();

    return (
        <React.Fragment>
            <h1>BookContainer</h1>
            <h3>No of Books: {books}</h3>
            <button onClick={() => dispatch(purchase_book())}>Purchase Book</button>
        </React.Fragment>
    )
}

export default BookContainer