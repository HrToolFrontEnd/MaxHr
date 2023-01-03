import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "../components/Navbar/Navbar";
import Container from "../components/Container/Container";
import TopNavbar from "../components/TopNavbar/TopNavbar";
import Dashboard from "../page/Dashboard";
import { Benchmark } from "../page/Benchmark";

import NavContext from "../Context/NavContext";
import { ClientProfile } from "../components/pages/Dashboard/page/ClientProfilePage";
import { ProjectList } from "../components/pages/Dashboard/page/ProjectList";
import { ProjectDetails } from "../components/pages/Dashboard/page/ProjectDetails";
import { AssignProject } from "../components/pages/Dashboard/page/AssignProject";
import { CreateTask } from "../components/pages/Dashboard/page/CreateTask";
import { Tasks } from "../page/Tasks";

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
                <Route path="/client_Profile" element={<ClientProfile />} />
                <Route path="/benchmark" element={<Benchmark />} />
                <Route path="/project_list" element={<ProjectList />} />
                <Route path="/project_details" element={<ProjectDetails />} />
                <Route path="/assign_project" element={<AssignProject />} />
                <Route path="/create_task" element={<CreateTask />} />
                <Route path="/tasks" element={<Tasks />} />

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
