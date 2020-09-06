import React, {useEffect, useState} from "react"
import {NavLink} from "react-router-dom";
import "./Header.css"

export default function Header() {

    let [categories, setCategories] = useState([]);

    useEffect(() => {
        fetch("/api")
            .then(data => data.json())
            .then(data => setCategories(data))
    }, [])

    return (
        <header className={"Header"}>
            <ul>
                {categories.map((category, idx) => {
                    return (
                        <li key={idx}>
                            <NavLink exact to={category.href}>{category.title}</NavLink>
                        </li>
                    )
                })}
            </ul>
        </header>
    )
}
