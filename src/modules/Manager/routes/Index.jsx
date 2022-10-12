import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "../components/Navbar/Navbar";
import Container from "../components/Container/Container";
import TopNavbar from "../components/TopNavbar/TopNavbar";
import Dashboard from "../page/Dashboard";
import { Benchmark } from "../page/Benchmark";

import NavContext from "../Context/NavContext";
import { Notes } from "../components/pages/Dashboard/page/Notes";
import { ClientProfile } from "../components/pages/Dashboard/page/ClientProfilePage";
import { PiplineProjects } from "../components/pages/Dashboard/page/PiplineProjects";

const Index = () => {
  const [nav, setNav] = useState(true);
  const value = { nav, setNav };
  return (
    <>
      <div className="App">
        <NavContext.Provider value={value}>
          <Navbar />
          <Container
            stickyNav={<TopNavbar />}
            content={
              <Routes>
                <Route path="/" element={<Dashboard />} />
                <Route path="/dashboard" element={<Dashboard />} />
                <Route path="/notes" element={<Notes />} />
                <Route path="/client_Profile" element={<ClientProfile />} />
                <Route path="/benchmark" element={<Benchmark />} />
                <Route path="/pipline_projects" element={<PiplineProjects />} />

                <Route path="*" element={<main>NOT FOUND</main>} />
              </Routes>
            }
          />
        </NavContext.Provider>
      </div>
    </>
  );
};
export default Index;
