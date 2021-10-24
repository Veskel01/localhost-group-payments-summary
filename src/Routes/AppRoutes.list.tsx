import { HelmetProps } from "react-helmet";
import { useRoutes, RouteObject } from "react-router-dom";
import MentorsView from "Views/Mentors/Mentors.view";

// views
import PaymentView from "Views/Payments/Payments.view";
import StudentsView from "Views/Students/Students.view";
import SingleRoute from "./SingleRoute";

const mainViewHelmetProps: HelmetProps = {
  title: "Płatności",
};

const studentsViewHelmetProps: HelmetProps = {
  title: "Studenci",
};

const mentorsViewHelmetProps: HelmetProps = {
  title: "Mentorzy",
};

const AppRoutes = () => {
  const routes: RouteObject[] = [
    {
      path: "/",
      element: <SingleRoute view={PaymentView} helmetProps={mainViewHelmetProps} />,
    },
    {
      path: "/students",
      element: <SingleRoute view={StudentsView} helmetProps={studentsViewHelmetProps} />,
    },
    {
      path: "/mentors",
      element: <SingleRoute view={MentorsView} helmetProps={mentorsViewHelmetProps} />,
    },
  ];

  const routing = useRoutes(routes);

  return routing;
};

export default AppRoutes;
