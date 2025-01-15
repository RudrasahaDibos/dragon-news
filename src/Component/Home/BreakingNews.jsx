import Marquee from "react-fast-marquee";


const BreakingNews = () => {
    return (
        <div className="flex">
               <button className="btn btn-secondary">Breaking News</button>
               <Marquee>The direction the marquee is sliding.
                 Warning: Vertical marquees are currently experimental 
                and may be buggy. Please swap the values of the 
                 height and width when setting them</Marquee>
        </div>
    );
};

export default BreakingNews;