import type { MetaFunction } from "@remix-run/node"

export const meta: MetaFunction = () => {
  return [
    { title: "New Remix App" },
    { name: "description", content: "Welcome to Remix!" },
  ]
}

export default function Index() {
  return (
    <div style={{ fontFamily: "system-ui, sans-serif", lineHeight: "1.8" }}>
      <div className="h-screen grid place-items-center">
        <div className="bg-blue-300 font-semibold h-9 flex items-center px-4 text-lg/none rounded shadow text-blue-600">
          <span>Tailwind installed</span>
        </div>
      </div>
    </div>
  )
}
