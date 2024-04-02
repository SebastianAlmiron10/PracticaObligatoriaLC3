import './App.css'
import AllBeers from './components/allBeers/allBeers'
import AvailableBeers from './components/AvailableBeers/AvailableBeers'
import beers from './components/Beers/Beers'
import ContainerP from './components/ContainerP/ContainerP'
import Idea from './components/Idea/Idea'
import RedIPABeers from './components/RedIPABeers/RedIPABeers'
import StyleBeers from './components/StyleBeers/StyleBeers'

function App() {

  return (
    <ContainerP>

      <StyleBeers beers={beers} />

      <Idea beers={beers} />

      <AvailableBeers beers={beers} />

      <AllBeers beers={beers} />

      <RedIPABeers beers={beers} />

    </ContainerP>
  )
}

export default App
