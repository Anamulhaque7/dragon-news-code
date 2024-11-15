import { useLoaderData } from "react-router-dom";
import NewsCard from "../component/NewsCard";

const CategoryNews = () => {
    const { data: news } = useLoaderData();

    return (
        <div>
            <h1 className="font-bold mb-3 text-center">Dragon News Home</h1>
            <div>
                {
                    news.map(singleNews => <NewsCard news={singleNews} key={singleNews._id}></NewsCard>)
                }
            </div>
        </div>
    );
};

export default CategoryNews;