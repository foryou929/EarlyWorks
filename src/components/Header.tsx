import Image from 'next/image';
import classNames from 'classnames';

import { barlow500 } from '@/constants/fonts';

import logo from '@/assets/images/logo_light_hori.svg';
import arrow from '@/assets/images/arrow_tr.svg';
import Link from 'next/link';

export default function Header() {
    return (
        <header className="relative h-[72px] bg-light p-[17px_20px] lg:p-0 flex border-b border-gray">
            <Link href={"/"} className="absolute left-[24px] top-[24px] w-[207.79px]">
                <Image src={logo} alt="logo" />
            </Link>
            <div className="ml-auto flex items-center gap-[30px]">
                <div className="flex gap-[8px]">
                    <span className={classNames(
                        barlow500.className,
                        "text-[14px] text-black"
                    )}>
                        JP
                    </span>
                    <span className={classNames(
                        barlow500.className,
                        "text-[14px] text-black"
                    )}>
                        EN
                    </span>
                </div>
                <Link href={"/contact"} className="hidden lg:block relative w-[200px] h-[72px] bg-[#08121A]">
                    <div className="absolute left-[35px] top-[22.5px] h-[27.05px] flex items-center gap-[4px]">
                        <p className={classNames(
                            barlow500.className,
                            "text-[24px] text-white"
                        )}>
                            CONTACT
                        </p>
                        <Image src={arrow} alt="arrow" />
                    </div>
                </Link>
            </div>
        </header>
    );
}