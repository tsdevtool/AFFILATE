import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/home/HomePage";
import JobPage from "./pages/jobs/JobPage";
import JobDetailPage from "./pages/jobs/JobDetailPage";
import JobApplyPage from "./pages/jobs/JobApplyPage";
import ConfirmApplicationPage from "./pages/jobs/ConfirmApplicationPage";
import ApplicationSuccessPage from "./pages/jobs/ApplicationSuccessPage";
import MyApplicationsPage from "./pages/jobs/MyApplicationsPage";
import CompaniesPage from "./pages/companies/CompaniesPage";
import CompanyDetail from "./pages/companies/CompanyDetail";
import LoginPage from "./pages/auth/LoginPage";
import RegisterPage from "./pages/auth/RegisterPage";
import CoursesPage from "./pages/courses/CoursesPage";
import CourseDetailPage from "./pages/courses/CourseDetailPage";
import CourseRegisterPage from "./pages/courses/CourseRegisterPage";
import CourseLearnPage from "./pages/courses/CourseLearnPage";
import MyCoursesPage from "./pages/courses/MyCoursesPage";
import CoursePaymentPage from "./pages/courses/CoursePaymentPage";
import BlogsPage from "./pages/blogs/BlogsPage";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/companies" element={<CompaniesPage />} />
        <Route path="/company/:id" element={<CompanyDetail />} />
        <Route path="/jobs" element={<JobPage />} />
        <Route path="/jobs/:id" element={<JobDetailPage />} />
        <Route path="/jobs/:id/apply" element={<JobApplyPage />} />
        <Route
          path="/jobs/:id/apply/confirm"
          element={<ConfirmApplicationPage />}
        />
        <Route
          path="/jobs/:id/apply/success"
          element={<ApplicationSuccessPage />}
        />
        <Route path="/my-applications" element={<MyApplicationsPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/courses" element={<CoursesPage />} />
        <Route path="/courses/:id" element={<CourseDetailPage />} />
        <Route path="/courses/:id/register" element={<CourseRegisterPage />} />
        <Route path="/courses/:id/payment" element={<CoursePaymentPage />} />
        <Route path="/courses/:id/learn" element={<CourseLearnPage />} />
        <Route path="/my-courses" element={<MyCoursesPage />} />
        <Route path="/companies/:id" element={<CompanyDetail />} />
        <Route path="/blogs" element={<BlogsPage />} />
        <Route path="/*" element={<JobPage />} />
      </Routes>
    </>
  );
}

export default App;
