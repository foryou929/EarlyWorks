import classNames from "classnames";
import { notoSansJP, notoSansJP700 } from "@/constants/fonts";

export interface Props {
    label?: string;
    placeholder?: string;
    required?: boolean;
}

export default function FormInput({ label, placeholder }: Props) {
    return (
        <section className="h-[112px] flex flex-col lg:border-b lg:border-gray">
            <div className="flex flex-col lg:flex-row lg:justify-between gap-[16px]">
                <label className={classNames(
                    notoSansJP700.className,
                    "text-[15px] text-black"
                )}>
                    {label}
                </label>
                <input
                    type="text"
                    className={classNames(
                        notoSansJP.className,
                        "w-full max-w-[732px] p-[16px] lg:p-[24px] flex gap-[10px] bg-gray border border-gray text-[15px] text-black font-bold placeholder:font-normal"
                    )}
                    placeholder={placeholder}
                />
            </div>
        </section>
    );
}