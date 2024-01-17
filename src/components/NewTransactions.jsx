
import React from 'react';
import { useState } from 'react';
import { Box, Typography, TextField, Button, styled } from '@mui/material'
const Container = styled(Box)`
    display: flex;
    flex-direction: column;
    & > h5, & > div, & > button {
        margin-top: 30px
    }
`
const NewTransactions = ({ setTransactions }) => {

    const [text, setText] = useState('');
    const [amount, setAmount] = useState();

    const addTranaction = () => {
        const transaction = {
            id: Math.floor(Math.random() * 1000000),
            text: text,
            amount: +amount
        }
        setTransactions(PrevState => [transaction, ...PrevState]);

    }

    return (
        <Container>
        <Typography variant="h5">NewTransactions</Typography>
        <TextField label="Enter Expenditure" onChange = {(e) => setText(e.target.value)}/>
        <TextField label="Enter Amount" onChange = {(e) => setAmount(e.target.value)}/>
        <Button variant = "contained" onClick={() => addTranaction()}>Add Transaction</Button>
        </Container>
    )

}
export default NewTransactions;