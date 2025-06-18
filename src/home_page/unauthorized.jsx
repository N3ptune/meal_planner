import { useNavigate } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import 'unauthorized.css';

export function unauthorized() {

    const navigate = useNavigate();

    return(
        <>
            <header>

            </header>

            <main>
                <h1>Welcome to MealPlan</h1>
                <form method = "get" action = "home_page.html">
                    <div>
                        <input type = "text" name = "username" placeholder = "Username"/>
                    </div>
                    <div>
                        <input type = "text" name = "password" placeholder = "Password"/>
                    </div>
                    <button type = "submit" onClick = {async () => {navigate('/authorized')}}>Login</button>
                    <button type = "submit">Create</button>
                </form>
            </main>

            <footer>
                
            </footer>
        </>
    )
}