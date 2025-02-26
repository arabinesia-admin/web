import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex h-screen items-center justify-center bg-gray-100">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-gray-800">
          404 - Page Not Found
        </h1>
        <p className="mt-4 text-gray-600">
          Sorry, the page you are looking for does not exist.
        </p>
        <Link href={"/"}>
          <button className="mt-6 rounded-md bg-emerald-500 px-4 py-2 text-white hover:bg-emerald-600">
            Go Home
          </button>
        </Link>
      </div>
    </div>
  );
}
