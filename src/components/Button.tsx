import Image from 'next/image';
import classNames from "classnames";

import { barlow500 } from '@/constants/fonts';

import arrow from '@/assets/images/arrow_tr.svg';

export interface Props {
    children?: React.ReactNode;
    className?: string;
}

export default function Button({ children, className }: Props) {
    return (
        <button className={classNames(
            "w-full h-[72px] bg-dark rounded-[8px] flex justify-center items-center",
            className
        )}>
            <div className="flex items-center gap-[4px]">
                <p className={classNames(
                    barlow500.className,
                    "text-[24px] text-white"
                )}>
                    {children}
                </p>
                <Image className=""
                    src={arrow} alt="arrow" />
            </div>
        </button>
    );
}