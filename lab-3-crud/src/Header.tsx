import { Link } from "react-router-dom";
import { memo } from "react";

type HeaderProps = {
    firstname: string;
};

const Header = memo(function Header({ firstname }: HeaderProps) {
    return (
        <header className="flex items-center justify-between px-8 py-6 bg-gradient-to-r from-purple-900 via-indigo-800 to-yellow-700 shadow-lg border-b-4 border-yellow-400 font-fantasy">
            <nav className="flex gap-8 text-xl font-bold text-yellow-200 drop-shadow-lg">
                <Link
                    to="/"
                    className="hover:text-yellow-400 transition-colors tracking-widest"
                >
                    Home
                </Link>
                <Link
                    to="/blog"
                    className="hover:text-yellow-400 transition-colors tracking-widest"
                >
                    Blog
                </Link>
            </nav>
            <span className="ml-auto font-extrabold text-2xl text-yellow-300 tracking-wider drop-shadow-lg italic">
                {firstname}
            </span>
        </header>
    );
});

export default Header;
