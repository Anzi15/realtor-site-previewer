"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"

export default function SeedPage() {
  const [isLoading, setIsLoading] = useState(false)
  const [result, setResult] = useState<any>(null)
  const [error, setError] = useState<string | null>(null)

  const seedDatabase = async () => {
    setIsLoading(true)
    setError(null)

    try {
      const response = await fetch("/api/seed")
      const data = await response.json()

      if (!response.ok) {
        throw new Error(data.error || "Failed to seed database")
      }

      setResult(data)
    } catch (err) {
      setError(err instanceof Error ? err.message : "An unknown error occurred")
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-br from-slate-50 to-slate-100 p-4">
      <Card className="w-full max-w-md">
        <CardHeader>
          <CardTitle>Seed Database</CardTitle>
          <CardDescription>This will populate your Firebase database with sample realtor data.</CardDescription>
        </CardHeader>
        <CardContent>
          <p className="mb-4 text-sm text-slate-600">
            Click the button below to seed your Firebase Firestore database with sample realtor data. This will create a
            &quot;vancouver&quot; collection with sample realtor documents.
          </p>
          <Button onClick={seedDatabase} disabled={isLoading} className="w-full">
            {isLoading ? (
              <span className="flex items-center gap-2">
                <div className="h-4 w-4 animate-spin rounded-full border-2 border-current border-t-transparent" />
                Seeding Database...
              </span>
            ) : (
              "Seed Database"
            )}
          </Button>
        </CardContent>

        {error && (
          <CardFooter className="border-t border-slate-200 bg-red-50 text-red-600">
            <p className="text-sm">{error}</p>
          </CardFooter>
        )}

        {result && (
          <CardFooter className="flex flex-col items-start border-t border-slate-200 bg-emerald-50 text-emerald-600">
            <p className="mb-2 font-medium">{result.message}</p>
            <p className="mb-2 text-sm">Sample URLs:</p>
            <ul className="mb-4 list-disc pl-5 text-sm">
              {result.data.sampleUrls.map((url: string) => (
                <li key={url}>
                  <Link href={url} className="text-emerald-700 underline hover:text-emerald-800">
                    {url}
                  </Link>
                </li>
              ))}
            </ul>
            <Link href="/" className="text-sm text-emerald-700 underline hover:text-emerald-800">
              Return to Home
            </Link>
          </CardFooter>
        )}
      </Card>
    </div>
  )
}
