import { Link } from "react-router-dom";
import { memo } from "react";

type HeaderProps = {
    firstname: string;
};

const Header = memo(function Header({ firstname }: HeaderProps) {
    return (
        <header className="flex items-center justify-between px-8 py-4 bg-white shadow-md">
            <nav className="flex gap-6 text-lg font-medium">
                <Link to="/" className="hover:text-blue-600 transition-colors">
                    Home
                </Link>
                <Link
                    to="/blog"
                    className="hover:text-blue-600 transition-colors"
                >
                    Blog
                </Link>
            </nav>
            <span className="ml-auto font-bold text-blue-700 text-lg">
                {firstname}
            </span>
        </header>
    );
});

export default Header;
