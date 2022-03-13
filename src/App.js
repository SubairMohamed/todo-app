import Left from './components/Asides/Left';
import Right from './components/Asides/Right';
import Main from './components/Main/Main';

const App = () => {
  return (
    <div className="flex min-h-screen">
      {/* left side  */}
      <Left />

      {/* Main */}
      <Main />

      {/* aside right */}
      <Right />
    </div>
  );
}

export default App;
