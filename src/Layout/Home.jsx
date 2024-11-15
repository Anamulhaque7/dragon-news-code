import { Outlet } from "react-router-dom";
import Header from "../component/Header";
import LatestNews from "../component/LatestNews";
import LeftNavbar from "../component/Main-Component/LeftNavbar";
import RightNav from "../component/Main-Component/RightNav";
import Navbar from "../component/Navbar";

const Home = () => {
    return (
        <div className="font-Poppins">
            <header>
                <Header></Header>
                <section>
                    <LatestNews></LatestNews>
                </section>

            </header>
            <nav className="w-11/12 mx-auto py-3">
                <Navbar></Navbar>
            </nav>
            <main className="w-11/12 mx-auto pt-5 grid md:grid-cols-12 gap-3 ">

                <aside className="left col-span-3"><LeftNavbar></LeftNavbar></aside>

                <aside className="col-span-6 ">
                    <Outlet></Outlet>

                </aside>               
                <aside className=" col-span-3"><RightNav></RightNav></aside>


            </main>

        </div>
    );
};

export default Home;