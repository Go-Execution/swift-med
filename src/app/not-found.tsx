import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-6 text-center bg-sky-50">
      <h1 className="text-4xl font-bold text-slate-800 mb-4">404 - Page Not Found</h1>
      <p className="text-slate-600 mb-6">The page you are looking for does not exist.</p>
      <Link
        href="/"
        className="px-6 py-3 rounded-full bg-blue-600 text-white font-medium hover:bg-blue-700 transition"
      >
        Return to Home
      </Link>
    </div>
  );
}
