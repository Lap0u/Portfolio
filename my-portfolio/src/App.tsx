import BackgroundImage from './components/BackgroundImage';
import NavBar from './components/NavBar';
import BigTitle from './components/BigTitle';

const App = () => {
  return (
    <div className="w-screen h-[200vh] bg-gradient-to-b from-darkGradiantBg to-lightGradiantBg">
      <BackgroundImage />
      <NavBar />
      <BigTitle />
    </div>
  );
};

export default App;
