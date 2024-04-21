import './App.css'
import Table from './components/table/Table';

function App() {
  const netIncomes = [
    { brand: "McDonalds", income: 1291283 },
    { brand: "Burger King", income: 1927361 },
    { brand: "KFC", income: 1098463 }
  ];

  const average = (netIncomes.reduce((promedio, ingreso) => promedio + ingreso.income, 0) / netIncomes.length).toFixed(2)

  return (
    <>
        <Table companies={netIncomes} />
        <p>Average income: {average}</p>
    </>
  )
}

export default App
