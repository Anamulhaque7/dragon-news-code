import { AiFillStar } from "react-icons/ai";
import { FaEye } from "react-icons/fa";
import { Link } from "react-router-dom";
const NewsCard = ({ news }) => {

    return (
        <div className=" bg-base-100 w-96 border mb-5 mx-auto shadow-xl">
            <div className="">
                <div className="flex py-1 px-3 space-x-3 w-full rounded-t-sm bg-gray-400">
                    <img className="w-10 h-10 rounded-full" src={news.author.img} alt="" />
                    <div>
                        <h1 className="text-sm font-bold">{news.author.name}</h1>
                        <p className="text-[10px]">{news.author.published_date
                        }</p>
                    </div>
                </div>
                <div className="px-4">
                    <h2 className="font-bold mb-2">{news.title}</h2>
                    <img className="rounded-lg" src={news.image_url} alt="" />
                    <p className="text-[10px]">
                        {news.details.slice(0, 150)}...{''}
                        <Link to={`/news/${news._id}`} className="text-primary">Read More</Link>
                    </p>
                </div>
                <hr />

                <div className="flex py-4 justify-between px-5">
                    <div className="flex space-x-1 items-center">
                        {[...Array(5)].map((_, i) => (
                            <AiFillStar key={i} className={`text-yellow-500${i < Math.round(news.rating.number) ? "" : "opacity-5"}`} />

                        ))}
                        <p>{news.rating.number}</p>
                    </div>
                    <div className="flex justify-center items-center space-x-2">
                        <FaEye />
                        <p>{news.total_view}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default NewsCard;