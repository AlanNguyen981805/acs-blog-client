import React, { useEffect, useState } from 'react';

interface IProps {
    img?: any
}
const PreviewImg: React.FC<IProps> = ({img}) => {
    const [preview, setPreview] = useState<string>()

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
        <div>
            <img src={preview} alt="" />
        </div>
    );
};

export default PreviewImg;