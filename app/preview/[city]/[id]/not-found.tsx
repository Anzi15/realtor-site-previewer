import Link from "next/link"

export default function NotFound() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-br from-slate-50 to-slate-100 p-4 text-center">
      <div className="max-w-md space-y-6">
        <h1 className="text-4xl font-bold tracking-tight text-slate-900">Realtor Not Found</h1>
        <p className="text-lg text-slate-600">
          We couldn't find the realtor profile you're looking for in this city collection.
        </p>
        <p className="text-sm text-slate-500">
          Make sure the city name and realtor ID are correct, or the data exists in your Firebase database.
        </p>
        <div className="flex flex-col gap-4">
          <Link
            href="/seed"
            className="inline-block rounded-md bg-blue-600 px-6 py-3 text-base font-medium text-white shadow-md transition-all hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
          >
            Seed Database
          </Link>
          <Link
            href="/"
            className="inline-block rounded-md border border-slate-300 bg-white px-6 py-3 text-base font-medium text-slate-700 shadow-md transition-all hover:bg-slate-50 focus:outline-none focus:ring-2 focus:ring-slate-500 focus:ring-offset-2"
          >
            Return Home
          </Link>
        </div>
      </div>
    </div>
  )
}
