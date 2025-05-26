import { Link } from "react-router-dom";
import { memo } from "react";

type HeaderProps = {
    firstname: string;
};

const Header = memo(function Header({ firstname }: HeaderProps) {
    return (
        <header
            style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                padding: "1rem",
                background: "#f5f5f5",
            }}
        >
            <nav style={{ display: "flex", gap: "1rem" }}>
                <Link to="/">Home</Link>
                <Link to="/blog">Blog</Link>
            </nav>
            <span style={{ marginLeft: "auto", fontWeight: "bold" }}>
                {firstname}
            </span>
        </header>
    );
});

export default Header;
