import Image from 'next/image';
import React from 'react';
import LogoSite from "./../../../../public/img/LOGO_ACS-chu.png"

interface IProps {
    width: number,
    height: number
}
const LogoGlobal: React.FC<IProps> = ({width, height}) => {
    return (
        <>
            <Image
                src={LogoSite}
                width={width}
                height={height}
            />
        </>
    );
};

export default LogoGlobal;