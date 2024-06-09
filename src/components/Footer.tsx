import { barlow400, notoSansJP500 } from "@/constants/fonts";
import classNames from "classnames";

export default function Footer() {
    return (
        <footer className="h-[80px] bg-dark px-[24px] flex justify-center lg:justify-between items-center">
            <p className={classNames(
                "h-[8px]",
                barlow400.className,
                "text-[12px] text-light-gray leading-[10.8px]"
            )}>
                ® 2024 Earlyworks Co., Ltd.
            </p>
            <p className={classNames(
                "hidden lg:block h-[9px]",
                notoSansJP500.className,
                "text-[12px] text-light-gray leading-[10.8px]"
            )}>
                〒110-0005 東京都台東区上野5丁目7番11号 MRビル 3F　/　03-5614-0978
            </p>
        </footer>
    );
}