import Marquee from "react-fast-marquee";
import { Link } from "react-router-dom";
const LatestNews = () => {
    return (
        <div className="flex gap-2 items-center w-11/12 mx-auto">
            <p className="bg-[#D72050] text-white px-3 py-1">Latest</p>
            <Marquee pauseOnHover speed={100} className=" space-x-10 flex bg-base-200 py-2">
                <Link to="/news" > <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima enim libero recusandae nihil </p></Link>
                <Link to="/news" > <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima enim libero recusandae nihil </p></Link>
                <Link to="/news" > <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima enim libero recusandae nihil </p></Link>
            </Marquee>
        </div>
    );
};

export default LatestNews;