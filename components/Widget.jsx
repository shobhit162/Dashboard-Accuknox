import React from "react";
import "./Widget.css";

function Widget({ name, content, onRemove }) {
    return (
        <div className="widget">
            <div className="widget-content">
                <h3>{name}</h3>
                <p>{content}</p>
            </div>
            <div className="widget-remove" onClick={onRemove}>X</div>
        </div>
    );
}

export default Widget;
