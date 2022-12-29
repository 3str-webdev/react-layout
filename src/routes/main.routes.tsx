import { IRoute } from "./routesTypes";

const PlugComponent = () => {
  return <>Welcome</>;
};

export const mainRoutes: IRoute[] = [
  { id: 1, path: "/", element: <PlugComponent /> },
];
