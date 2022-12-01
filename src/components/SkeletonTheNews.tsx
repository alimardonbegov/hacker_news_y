function SkeletonTheNews() {
    return (
        <>
            <div className="skeleton-the-news">
                <div className="skeleton-the-news__header"> </div>
                <div className="skeleton-the-news__detail">
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
            </div>
            <div className="skeletoncomblock">
                <div className="skeletoncomblock__header"> </div>
                <div className="skeletoncomblock__comment">
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
                <div className="skeletoncomblock__text"></div>
            </div>
        </>
    );
}

export default SkeletonTheNews;
