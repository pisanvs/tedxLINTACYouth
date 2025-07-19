import { useDict } from "@/locales/dict";
import Link from "next/link"

export default function NavActionButton() {
    const { dictionary } = useDict();
    return (
        <button className="w-max select-none rounded-[3px] bg-tedRed font-semibold text-white mr-8" disabled={true}>
            <Link
                href={"https://lu.ma/gpm7usxy"}
                className="flex h-full w-full justify-center px-4 py-2 lg:py-1"
            >
                { dictionary.navbar.cta }
            </Link>
        </button>
    );
}
