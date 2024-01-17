import logo from './logo.svg';
import './App.css';
import { Component, useState } from 'react';
import { Typography, styled, Box } from '@mui/material';
//components balance.jsx
import Balance from './components/balance';
import Expensecard from './components/ExpenseCard';
import NewTransactions from './components/NewTransactions';
import Transactions from './components/Transactions';

const Header = styled(Typography)`
   font-size: 36px;
   color: green;
   text-transform: uppercase;

`;

const StyledText = styled(Box)`
  display: flex;
  background: #fff;
  width: 800px;
  padding: 10px;
  border-radius: 20px;
  margin: auto;
  & > div {
    height: 80vh;
    width: 50%;
    padding: 10px;

  }

`

function App() {

  const [transactions, setTransactions] = useState([
  { id: 1, text: 'Memos', amount: -20 },
  { id: 2, text: 'Salary', amount: 3000 },
  { id: 3, text: 'Book', amount: -100 },
  { id: 4, text: 'Bonus', amount: 1500 }
  ])
  return (
    <Box className="App">
      <Header>My Expenditure Tracker</Header>
      <StyledText>
        <Box>
          <Balance transactions={transactions}/>
          <Expensecard transactions={transactions}/>
          <NewTransactions setTransactions={setTransactions}/>
          </Box>
        <Box>
          <Transactions transactions={transactions} setTransactions={setTransactions}/>
        </Box>
      </StyledText>
    </Box>
  );
}

export default App;
