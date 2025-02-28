import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/home/HomePage";
import JobPage from "./pages/jobs/JobPage";
import CompaniesPage from "./pages/companies/CompaniesPage";
import CompanyDetail from "./pages/companies/CompanyDetail";
import LoginPage from "./pages/auth/LoginPage";
import RegisterPage from "./pages/auth/RegisterPage";
import CoursesPage from "./pages/courses/CoursesPage";
import CourseDetailPage from "./pages/courses/CourseDetailPage";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/companies" element={<CompaniesPage />} />
        <Route path="/company/:id" element={<CompanyDetail />} />
        <Route path="/jobs" element={<JobPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/courses" element={<CoursesPage />} />
        <Route path="/courses/:id" element={<CourseDetailPage />} />
        <Route path="/*" element={<JobPage />} />
      </Routes>
    </>
  );
}

export default App;
