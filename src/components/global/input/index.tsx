import React, { ChangeEvent } from 'react';

interface IProps {
    onChange: (e: ChangeEvent<HTMLInputElement>) => void
}
const Input: React.FC<IProps> = ({onChange}) => {
    return (
        <div className="label-float">
            <input onChange={onChange} type="text" placeholder=" "/>
            <label>Telefone</label>
        </div>
    );
};

export default Input;