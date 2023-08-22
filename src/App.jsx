import React, { useState } from "react";
import Menu from "./Menu";
import Categories from "./Categories";
import items from "./data";


const uniqueCategories = ['all', ...new Set(items.map(item => item.category))];
console.log(uniqueCategories);

function App() {
  const [menu, setMenu] = useState(items);
  const [categories, setCategories] = useState(uniqueCategories);

  const filterItems = (category) => {
    if(category === 'all'){
      setMenu(items);
      return;
    }
    const newitems = menu.filter((item) => item.category === category);
    setMenu(newitems);
  };

  return (
    <main>
      <section className="menu section">
        <div className="title">
          <h2>Menu</h2>
          <div className="underline"></div>
        </div>
        <Categories  filterItems={filterItems} categories={categories} />
        <Menu  menu={menu} />
      </section>
    </main>
  );
}

export default App;
