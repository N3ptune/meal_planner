import React from "react";
import 'home_page.css';

export function home_page() {
    const something = [];
    
    return (
        <>
            <header>
                <h1>MealPlan</h1>
            </header>

            <div class="thin_line"></div>

            <main>
                    <h3>Your feed (temp)</h3>
            </main>

            <footer>
                <nav>
                    <li><a href="home_page.html">Home</a></li>
                    <li><a href="../meal_pinterest/meal_pinterest.html">Meals</a></li>
                    <li><a href="../meal_plan/meal_plan.html">Your Plan</a></li>
                    <li><a href="../grocery_list/grocery_list.html">Grocery List</a></li>
                </nav>
            </footer>
        </>
    )
}