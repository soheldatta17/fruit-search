import React, { useState } from 'react';
import './App.css';

const App = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const fruits = [
    'Apple', 'Banana', 'Cherry', 'Date', 'Elderberry', 'Fig', 'Grape',
    'Honeydew', 'Indian Fig', 'Jackfruit', 'Kiwi', 'Lemon', 'Mango',
    'Nectarine', 'Orange', 'Papaya', 'Quince', 'Raspberry', 'Strawberry',
    'Tangerine', 'Ugli Fruit', 'Vanilla', 'Watermelon', 'Xigua', 'Yellow Passion Fruit',
    'Zucchini', 'Apricot', 'Blackberry', 'Blueberry', 'Cantaloupe', 'Coconut', 'Cranberry',
    'Dragon Fruit', 'Durian', 'Gooseberry', 'Grapefruit', 'Guava', 'Huckleberry', 'Kumquat',
    'Lychee', 'Mandarin', 'Mulberry', 'Olive', 'Peach', 'Pear', 'Pineapple',
    'Plum', 'Pomegranate', 'Rambutan', 'Starfruit'
  ];

  const handleChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const getHighlightedText = (text, highlight) => {
    if (!highlight) return text;
    const parts = text.split(new RegExp(`(${highlight})`, 'gi'));
    return parts.map((part, index) =>
      part.toLowerCase() === highlight.toLowerCase() ? <strong style={{color: "red"}} key={index}>{part}</strong> : part
    );
  };

  const filteredFruits = fruits.filter((fruit) =>
    fruit.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="container">
      <h1>Fruit Search</h1>
      <input
        type="text"
        placeholder="Search for a fruit..."
        value={searchTerm}
        onChange={handleChange}
      />
      <ul>
        {filteredFruits.map((fruit, index) => (
          <li key={index}>{getHighlightedText(fruit, searchTerm)}</li>
        ))}
      </ul>
    </div>
  );
};

export default App;
