import React from "react";
import Widget from "./Widget";
import "./Dashboard.css";

function Dashboard({ categories, onRemoveWidget, onOpenPanel, searchQuery }) {
    return (
        <div className="dashboard">
            {categories.map((category, categoryIndex) => (
                <div key={category.name} className="category">
                    <h2>{category.name}</h2>
                    <div className="widget-grid">
                        {category.widgets
                            .filter(widget => widget.name.toLowerCase().includes(searchQuery))
                            .map((widget, widgetIndex) => (
                                <Widget
                                    key={widget.name}
                                    name={widget.name}
                                    content={widget.content}
                                    onRemove={() => onRemoveWidget(categoryIndex, widgetIndex)}
                                />
                            ))}
                        <div className="widget empty-widget" onClick={() => onOpenPanel(categoryIndex)}>
                            <p>+ Add Widget</p>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
}

export default Dashboard;
