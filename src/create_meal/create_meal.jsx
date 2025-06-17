import React from "react";
import './create_meal.css';

// This will be a form that the user will use to create meals. It will suggest a photo, or ask
// for one. Maybe some sort of engine query taking images and asking if it fits the meal. This is
// also where users will put in ingredients, serving size, and other pertinent details. Possible use
// of an AI model to generate user tailored cooking instructions, if possible/plausible.

export function create_meal() {
    return(
        <>
            <header>
                <h1>New Meal</h1>
            </header>

            <main>
                <div><input type = "image" src = "../../public/submit_button.png" alt = "Submit Image" /></div>
                <div><input type = "text" name = "Meal Name" placeholder = "Meal Name" /></div>
                <div>
                    <input type = "text" name = "Serving Size" placeholder = "Serving Size" />
                    <input type = "text" name = "Prep Time" placeholder = "Prep Time" />
                    <input type = "text" name = "Cook Time" placeholder = "Cook Time" />
                </div>
                <div><label for = "listInput">Enter your ingredients (comma separated):</label></div>
                <input type = "text" id = "listInput" name = "ingredients" />
            </main>

            <footer>
                <button onclick  = "location.href = '../meal/meal.html'">Create</button>
            </footer>
        </>
    )
}