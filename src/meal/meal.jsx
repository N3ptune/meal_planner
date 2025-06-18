import React from "react";
import 'meal.css';

{/*

    This will house the meals, with the ingredients. This is what users will see when they have completed
    or clicked onto a post. Eventually, this may contain cooking instructions as well, although that will
    remain to be seen if I can train an AI agent to generate those. 

*/}

export function meal() {
    return (
        <>
            <header>
            <div><h1>Meal Image</h1></div>
            <div><h1>Meal Name</h1></div>
        </header>

        <main>
            Serving size Prep time Cook time 
            <div><h3>Ingredients list</h3></div>
        </main>

        <footer>

        </footer>
        </>
    )
}