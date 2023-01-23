import Image from './Image';
import staringCat from './cat.jpg'

function App() {
  return (
    <Image source={staringCat} alternativeText={'cat-photo'}/>
  );
}

export default App;
