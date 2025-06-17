import React from "react";
import './grocery_list.css';

{/* 

    This is the grocery list that will be generated from the meal plan. There will be a generate button that
    will generate the list and then take them here. It will be a checklist that moves resolved items to the
    bottom for grocery shopping purposes.

*/}


export function grocery_list() {
    return (
        <>
            <header>
            <h1>Grocery List</h1>
        </header>

        <main>
            <div id="checklist-container">
                <input type="text" id="new-item-input" placeholder="Add a new item"/>
                <button id="add-item-button">Add Item</button>
                <ul id="checklist">
                </ul>
            </div>
        </main>

        <footer>

        </footer>
        </>
    )
}