import './App.scss';
import CoinsTable from '../CoinsTable/CoinsTable';
import Header from '../Header/Header';
import data from '../../data/data';

function App() {
  return (
    <>
      <Header data={data} />
      <CoinsTable data={data} />
    </>
  );
}

export default App;

