// pages/404.tsx
import Link from "next/link";

export default function Custom404() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-50">
      <div className="bg-white w-full max-w-xl space-y-8 rounded-xl p-10 shadow-md">
        <div className="text-center">
          <h1 className="text-9xl font-bold text-gray-900">404</h1>
          <h2 className="mt-4 text-4xl font-semibold text-gray-700">
            Page Not Found
          </h2>
          <p className="mt-6 text-lg text-gray-600">
            The page youa re looking for does not exist or has been moved.
          </p>
          <div className="mt-10">
            <Link
              href="/"
              className="text-white inline-flex items-center rounded-md border border-transparent bg-blue-600 px-6 py-3 text-base font-medium hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
            >
              Return Home
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
