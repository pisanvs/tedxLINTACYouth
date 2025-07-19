import { useDict } from "@/locales/dict";
import Link from "next/link";

export default function NavActionButton() {
    const { dictionary } = useDict();

    return (
        <>
            {/* Define moving gradient styles using styled-jsx */}
            <style jsx>{`
                .gradient-btn {
                    background: linear-gradient(-30deg, #eb0028, #8F5CE6, #EB0028);
                    background-size: 400% 400%;
                    animation: gradient 3s linear infinite;
                }
                @keyframes gradient {
                    0% { background-position: 0% 50%; }
                    50% { background-position: 100% 50%; }
                    100% { background-position: 0% 50%; }
                }
            `}</style>
            <button
                className="w-max select-none rounded-[3px] font-semibold text-white gradient-btn"
                disabled={false}
            >
                <Link
                    href="https://lu.ma/gpm7usxy"
                    className="flex h-full w-full justify-center px-4 py-2 lg:py-1"
                >
                    {dictionary.navbar.cta}
                </Link>
            </button>
        </>
    );
}