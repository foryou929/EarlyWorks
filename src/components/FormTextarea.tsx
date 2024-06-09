import { notoSansJP, notoSansJP700 } from "@/constants/fonts";
import classNames from "classnames";

export interface Props {
    label?: string;
    placeholder?: string;
    required?: boolean;
}

export default function FormTextarea({ label, placeholder }: Props) {
    return (
        <section className="pb-[40px] flex flex-col lg:border-b lg:border-gray">
            <div className="flex flex-col lg:flex-row lg:justify-between gap-[16px]">
                <label className={classNames(
                    notoSansJP700.className,
                    "text-[15px] text-black"
                )}>
                    {label}
                </label>
                <textarea
                    className={classNames(
                        notoSansJP.className,
                        "w-full max-w-[732px] h-[100px] lg:p-[24px] lg:h-[200px] p-[16px] flex gap-[10px] bg-gray border border-gray text-[15px] text-black font-bold placeholder:font-normal"
                    )}
                    placeholder={placeholder}
                />
            </div>
        </section>
    );
}