import Counter from "./Counter";
// this is a functional component
import List from "./List";

//returns html

//you can think of components as partials

const App = () => {
  const myFaveFoods = ['a', 'b', 'c', 'd', 'e', 'f',];
  const myFaveCryptos = ['a', 'b', 'c', 'd', 'e', 'f',];
  const msg1 = 'my favorite foods are';
  const msg2 = 'my favorite foods are';

  
  return (
    //jsx fragment
    // in react the html element can only have one parent element
    <div>
      <Counter />
      <List 
        message={msg1}
        items={myFaveFoods}
      
      />
      <Counter />
      <List 
        message={msg2}
        items={myFaveCryptos}
      
      />
    </div>
  );
};

export default App;
