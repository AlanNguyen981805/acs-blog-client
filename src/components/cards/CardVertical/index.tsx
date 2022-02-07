import React, { useEffect, useState } from 'react';
import { IBlog } from '../../../utils/TypeScript';

interface IProps {
  blog: IBlog,
  img: any
}

const CardVertical: React.FC<IProps> = ({ blog, img }) => {
    const [preview, setPreview] = useState<string>()

    useEffect(() => {
      if(!img)  {
          setPreview(undefined)
          return
      }
      const objectUrl = URL.createObjectURL(img)
      setPreview(objectUrl)
      return () => URL.revokeObjectURL(objectUrl)
      console.log(img)
  }, [img])

    return (
        <div className="card">
            <div className="card-img">
              <img src={preview ?? "https://assets.codepen.io/285131/uslmOwQpdRRUwr6AmBP6JdzeHjS.jpg"} />
            </div>
            <div className="card-body">
              <h2 className="card-title">
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