import Link from "next/link"


export default function Navbar(){
    return(
        <nav className="bg-[#034694] text-white px-8 py-4 flex items-center justify-between border-b border-blue-400">
            <span className="text-xl font-bold tracking-wide">Chelsea MI</span>
            <div className="flex gap-6 text-sm font-medium">
                <Link href="/" className="hover:text-blue-300 transition-colors">Home</Link>
                <Link href="/analyst" className="hover:text-blue-300 transition-colors">Analyst</Link>
                <Link href="/stadiums" className="hover:text-blue-300 transition-colors">Stadiums</Link>
            </div>
        </nav>
    )
}