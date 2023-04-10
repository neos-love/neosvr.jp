import { createRoot } from "react-dom/client"
import { Suspense } from "react"
import { App } from "./App"
import { Underlay, Overlay } from "./DirtyFigmaExport"
import "./styles.css"

createRoot(document.getElementById("root")).render(
  <>
    <Underlay />
    <Suspense fallback={null}>
      <App />
    </Suspense>
    {/* <Overlay /> */}
  </>,
)
