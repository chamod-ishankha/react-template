import { useEffect, useState, Suspense } from "react";
import { ColorModeContext, useMode } from "./theme";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { Navigate, Route, Routes, useLocation } from "react-router-dom";
import Topbar from "./scenes/global/TopBar";
import Sidebar from "./scenes/global/Sidebar";
import { authComponents, adminComponents } from "./routes";

function App() {
  const [theme, colorMode] = useMode();
  const [sideBar, setSidebar] = useState(false);
  const sideRoutes = adminComponents;
  const location = useLocation();

  useEffect(() => {
    setSidebar(!location.pathname.startsWith("/auth"));
    if (location.pathname === "/") {
      setSidebar(false);
    }
  }, [location]);

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <Suspense fallback={<div>Loading...</div>}>
          <CssBaseline />
          <div className="app">
            {sideBar && <Sidebar routes={sideRoutes} />}
            <main className="content">
              {sideBar && <Topbar />}
              {sideBar ? (
                <div className="main-content">
                  <Routes>
                    {adminComponents.map((route, index) => (
                      <Route
                        key={index}
                        path={route.layout + route.path}
                        element={route.component}
                      />
                    ))}
                  </Routes>
                </div>
              ) : (
                <Routes>
                  {authComponents.map((route, index) => (
                    <Route
                      key={index}
                      path={route.layout + route.path}
                      element={route.component}
                    />
                  ))}
                  <Route
                    path="/auth"
                    element={<Navigate to="/auth/login" replace />}
                  />
                  <Route
                    path="/"
                    element={<Navigate to="/auth/login" replace />}
                  />
                </Routes>
              )}
            </main>
          </div>
        </Suspense>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;
