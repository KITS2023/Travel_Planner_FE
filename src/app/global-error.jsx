'use client'
import Link from "next/link"

export default function GlobalError({ error, reset }) {
  console.log("error", error)
  return (
    <html>
      <body>
        <h2>Something went wrong!</h2>
        <button onClick={() => reset()}>Try again</button>
        <br />
        <Link href="/"> Back to Home</Link>
      </body>
    </html>
  )
}