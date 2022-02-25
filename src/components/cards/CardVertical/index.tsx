import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import { IBlog } from '../../../utils/TypeScript';

interface IProps {
  blog: IBlog,
  img?: any
}

const CardVertical: React.FC<IProps> = ({ blog, img }) => {
    const [preview, setPreview] = useState<string>()
    const router = useRouter()

    useEffect(() => {
      if(!img)  {
          setPreview(undefined)
          return
      }
      const objectUrl = URL.createObjectURL(img)
      setPreview(objectUrl)
      return () => URL.revokeObjectURL(objectUrl)
  }, [img])
  

    return (
        <div className="card">
            <div className="card-img">
              <img src={preview ?? blog?.thumbnail} />
            </div>
            <div className="card-body">
              <h2 className="card-title" onClick={() => router.push(`/blog/${blog.slug}`)}>
                  {blog?.title ?? ''}
              </h2>
              <p className="card-intro">
                {blog?.description ?? ''}
              </p>
            </div>
          </div>
    );
};

export default CardVertical;