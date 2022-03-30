import { useState } from 'react';
import './App.css';

function App(props) {

  const [categories, setCategories] =useState({
    good: 0,
    neutral: 0,
    bad: 0,
    all: 0
  });

  const handleGood = () => {
    setCategories({
      ...categories,
      good: categories.good + 1,
      all: categories.all +1
    })

  }

  const handleNeutral= () => {
    setCategories({
      ...categories,
      neutral: categories.neutral + 1,
      all: categories.all +1
    })
  }

  const handleBad = () => {
    setCategories({
      ...categories,
      bad: categories.bad + 1,
      all: categories.all +1
    })
  }

  return (
    <div>
      <h1>give feedback</h1>

      <button onClick={handleGood}>good</button>
      <button onClick={handleNeutral}>neutral</button>
      <button onClick={handleBad}>bad</button>

      <h2>statics</h2>

    <p>good {categories.good}</p>  
    <p>neutral {categories.neutral}</p>  
    <p>bad {categories.bad}</p>  
    <p>all {categories.all}</p> 


    </div>
  );
}

export default App;
