import { Route, Routes, useLocation } from "react-router-dom";
import { AppWrapper } from "./components/layout";
import { Toaster } from "sonner";
import QueryProvider from "./context/QueryProvider";
import Home from "./pages/Home";


function App() {
  const location = useLocation();

  // The `backgroundLocation` state is the location that we were at when one of
  // the gallery links was clicked. If it's there, use it as the location for
  // the <Routes> so we show the gallery in the background, behind the modal.
  const state = location.state as { backgroundLocation?: Location };

  return (
    <>
      <QueryProvider>
        <Toaster theme="system" toastOptions={{}} />
        <Routes location={state?.backgroundLocation || location}>
          <Route element={<AppWrapper />}>
            <Route  path="/" element={<Home />} />
          </Route>
          <Route
            path="*"
            element={<div style={{ fontWeight: 900, margin: "50vh auto" }}>Not found ...</div>}
          />
        </Routes>
        {state?.backgroundLocation && (
          <Routes>
            <Route element={<AppWrapper />}>

            </Route>
     
          </Routes>
        )}
      </QueryProvider>
    </>
  )
}

export default App
