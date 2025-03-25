import HelloWorld from "../../components/HelloWorld.js"; //I don't get why here's ../../ works instead ../ 
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <HelloWorld name="Focus Bear" />
      <Link href="/counter">
        <button className="px-4 py-2 bg-green-500 text-white rounded-md hover:bg-green-700 transition">
          Go to Counter Page
        </button>
      </Link>
    </div>
  );
}
