// Home.tsx
export default function Home() {
    return (
        <div className="max-w-2xl mx-auto mt-24 p-16 bg-gradient-to-br from-yellow-100 via-purple-100 to-indigo-100 rounded-2xl shadow-2xl border-4 border-yellow-400 text-center font-fantasy">
            <h1 className="text-5xl font-extrabold mb-6 text-purple-900 drop-shadow-lg tracking-widest">
                Welcome to the Magic Blog
            </h1>
            <p className="text-xl text-indigo-800 mb-2 tracking-wide">
                Create, edit, and manage your magical posts with ease.
            </p>
            <p className="text-lg text-yellow-700 italic">
                Let your imagination cast a spell!
            </p>
        </div>
    );
}
