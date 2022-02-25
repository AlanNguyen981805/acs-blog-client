import { useRouter } from 'next/router';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import CardVertical from '../../components/cards/CardVertical';
import { getBlogsByCategoryStart } from '../../redux/blog-by-category/actions';
import { IBlog, RootStore } from '../../utils/TypeScript';

const BlogByCategory = () => {
    const {query} = useRouter()
    const dispatch = useDispatch();
    const {blogsByCategory} = useSelector((state: RootStore) => state)
    
    useEffect(() => {
        dispatch(getBlogsByCategoryStart(query.slug))
    }, [query])

    useEffect(() => {
    }, [blogsByCategory])
    return (
        <div className="category-by-blog">
            <h3>#{query.slug}</h3>
            <div className="containerCard">
                {
                    blogsByCategory?.blogs?.length > 0 ? blogsByCategory.blogs.map((item: IBlog) => {
                        return <CardVertical blog={item} />
                    }) : <h1>Không có bài viết nào</h1>
                }
            </div>
        </div>
    );
};

export default BlogByCategory;
