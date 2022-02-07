import React from 'react';
import { IBlog } from '../../../utils/TypeScript';

interface IProps {
  blog: IBlog
}

const CardVertical: React.FC<IProps> = ({ blog }) => {
  console.log({blog})
    return (
        <div className="card">
            <div className="card-img">
              <img src="https://assets.codepen.io/285131/uslmOwQpdRRUwr6AmBP6JdzeHjS.jpg" />
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