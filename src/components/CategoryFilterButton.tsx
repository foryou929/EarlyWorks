import { barlow500, notoSansJP500 } from "@/constants/fonts";
import classNames from "classnames";

export interface Props {
    children?: React.ReactNode;
    label?: string;
    count?: number;
    active?: boolean;
}

export default function CategoryFilterButton({ children, count, active }: Props) {
    return (
        <button
            className={classNames(
                "h-[40px] p-[10px_14px] lg:p-[10px_24px] rounded-[40px]",
                active ? "bg-dark" : "border border-dark-gray"
            )}
        >
            <div className="flex gap-[3px] items-end">
                <span className={classNames(
                    "h-[12px]",
                    notoSansJP500.className,
                    "text-[16px] leading-[12px] tracking-[0.05em]",
                    active ? "text-white" : "text-black"
                )}
                >
                    {children}
                </span>
                <span className={classNames(
                    "hidden lg:block h-[7px]",
                    barlow500.className,
                    "text-[10px] leading-[7px] tracking-[0.05em]",
                    active ? "text-white" : "text-black"
                )}>
                    {count}
                </span>
            </div>
        </button >
    );
}