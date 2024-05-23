import React from "react";

function CategoryFilter(props) {
  function handleClick(category) {
    props.setSelectedCategory(category);
  }

  return (
    <div className="categories">
      <h5>Category filters</h5>
      {props.categories.map((category) => (
        <button
          onClick={() => handleClick(category)}
          key={category}
          className={category === props.selectedCategory ? "selected" : ""}
        >
          {category}
        </button>
      ))}
    </div>
  );
}

export default CategoryFilter;
