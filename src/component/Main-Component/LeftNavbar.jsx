import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

const LeftNavbar = () => {

    const [categores, setCategory] = useState([])

    useEffect(() => {
        fetch('https://openapi.programming-hero.com/api/news/categories')
            .then(res => res.json())
            .then(data => setCategory(data.data.news_category))
    }, [])

    return (
        <div>
            <h2 className="font-bold">All Category</h2>
            <div className="flex flex-col gap-4 bg-slate-500 p-3 rounded-lg">
                {
                    categores.map(category => (
                        <NavLink to={`/category/${category.category_id}`} className="btn" key={category.category_id}>{category.category_name}</NavLink>
                    ))
                }
            </div>
        </div>
    );
};



export default LeftNavbar;