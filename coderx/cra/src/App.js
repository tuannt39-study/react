import './App.css';

import Card from "./components/card/Card";
import Card2 from "./components/card/Card2";
import Card3 from "./components/card/Card3";
import AwesomeImage from "./components/hoc/AwesomeImage";
import withHoverOpacity from "./components/hoc/withHoverOpacity";

const HoverOpacityAwesomeImage = withHoverOpacity(AwesomeImage, 0.8);

function App() {
  return (
    <div className="App">
      <Card imageUrl="https://picsum.photos/200/300">
        <p>Card body</p>
      </Card>

      <Card2 imageUrl="https://picsum.photos/200/350">
        <p>Card body 2</p>
      </Card2>

      <Card3>
        <p>Card body 3</p>
      </Card3>

      <HoverOpacityAwesomeImage src="https://picsum.photos/200/300" />
    </div>
  );
}

export default App;
