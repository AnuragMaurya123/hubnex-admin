import { Route, Routes } from "react-router-dom";

import AuthLayout from "./_auth/AuthLayout";
import Signin from "./_auth/forms/Signin";
import RootLayout from "./_root/RootLayout";
import Dashboard from "./_root/pages/Dashboard";

function App() {
  return (
    <main className="">
      <Routes>
        {/* PUBLIC ROUTE */}
        <Route element={<AuthLayout />}>
          <Route path="/sign-in" element={<Signin />} />
        </Route>

        {/* PRIVATE ROUTE */}
        <Route element={<RootLayout />}>
          <Route index element={<Dashboard />} />
        </Route>
      </Routes>
    </main>
  );
}

export default App;
