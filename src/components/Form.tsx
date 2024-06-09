export interface Props {
    children?: React.ReactNode
}

export default function Form({ children }: Props) {
    return (
        <form className="py-[16px] lg:pt-[32px] lg:pb-0 flex flex-col gap-[32px] lg:border-t lg:border-gray">
            {children}
        </form>
    );
}