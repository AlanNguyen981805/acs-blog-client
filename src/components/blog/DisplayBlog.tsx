import React, { useEffect } from 'react';
import { IBlog } from '../../utils/TypeScript';

interface IProps {
    detailBlog: IBlog
}

const DisplayBlog: React.FC<IProps> = ({detailBlog}) => {
    useEffect(() => {
    }, [detailBlog])
    return (
        <div className="display-blog">
            <div className="left-blog">
                <h1 style={{ textAlign: "center" }}>{detailBlog.title}</h1>
                h2
                <img src={detailBlog.thumbnail} alt="" />
                <div key={detailBlog._id} dangerouslySetInnerHTML={{
                    __html: `${detailBlog.content}`
                }}></div>
            </div>
            {/* <div className="right-blog">
                Right Blog
            </div> */}
        </div>
    );
};

export default DisplayBlog;