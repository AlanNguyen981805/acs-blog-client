import React from 'react';
import { IBlog } from '../../utils/TypeScript';

interface IProps {
    detailBlog: IBlog
}

const DisplayBlog: React.FC<IProps> = ({detailBlog}) => {
    return (
        <div>
            <h1 style={{ textAlign: "center" }}>{detailBlog.title}</h1>
            <img src={detailBlog.thumbnail} alt="" />
            <p dangerouslySetInnerHTML={{
                __html: `${detailBlog.content}`
            }}></p>
        </div>
    );
};

export default DisplayBlog;