import React, { useState } from "react";
import data from './data.json'
import Dashboard from "./components/Dashboard";
import "./App.css";

function App() {
  const [categories, setCategories] = useState(data.categories);
  const [isPanelOpen, setIsPanelOpen] = useState(false);
  const [selectedCategoryIndex, setSelectedCategoryIndex] = useState(0);
  const [searchQuery, setSearchQuery] = useState("");

  const addWidget = (categoryIndex, widget) => {
      const newCategories = [...categories];
      newCategories[categoryIndex].widgets.push(widget);
      setCategories(newCategories);
  };

  const removeWidget = (categoryIndex, widgetIndex) => {
      const newCategories = [...categories];
      newCategories[categoryIndex].widgets.splice(widgetIndex, 1);
      setCategories(newCategories);
  };

  const openPanel = (categoryIndex) => {
      setSelectedCategoryIndex(categoryIndex);
      setIsPanelOpen(true);
  };

  const closePanel = () => {
      setIsPanelOpen(false);
  };

  const handleSearch = (e) => {
      setSearchQuery(e.target.value.toLowerCase());
  };

  const clearField = () => {
    document.querySelector(".input-field:nth-child(2)").value = "";
    document.querySelector(".input-field:nth-child(3)").value = "";
  }

  return (
      <div className="app">
          <h1 className="header">Dynamic Dashboard</h1>
          <div className="search-container">
              <input
                  type="text"
                  placeholder="Search widgets..."
                  value={searchQuery}
                  onChange={handleSearch}
                  className="search-input"
              />
          </div>
          <Dashboard
              categories={categories}
              onRemoveWidget={removeWidget}
              onOpenPanel={openPanel}
              searchQuery={searchQuery}
          />
          <div className={`side-panel ${isPanelOpen ? "open" : ""}`}>
              <button className="close-panel" onClick={closePanel}>X</button>
              <div className="panel-content">
                  <h3>Add Widget</h3>
                  <input
                      type="text"
                      placeholder="Widget Name"
                      className="input-field"
                  />
                  <input
                      type="text"
                      placeholder="Widget Content"
                      className="input-field"
                  />
                  <button
                      className="add-widget-btn"
                      onClick={() => {
                          addWidget(selectedCategoryIndex, {
                              name: document.querySelector(".input-field:nth-child(2)").value,
                              content: document.querySelector(".input-field:nth-child(3)").value
                          });
                          clearField();
                          closePanel();
                      }}
                  >
                      Add Widget
                  </button>
              </div>
          </div>
      </div>
  );
}

export default App;