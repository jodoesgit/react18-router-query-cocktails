import { RouterProvider, createBrowserRouter } from "react-router-dom";
import {
	About,
	HomeLayout,
	Landing,
	Cocktail,
	Error,
	Newsletter,
	SinglePageError,
} from "./pages";
import { loader as landingLoader } from "./pages/Landing";

const router = createBrowserRouter([
	{
		path: "/",
		element: <HomeLayout />,
		errorElement: <Error />,
		children: [
			{
				path: "about",
				element: <About />,
			},
			{
				index: true,
				element: <Landing />,
				errorElement: <SinglePageError />,
				loader: landingLoader,
			},
			{
				path: "cocktail",
				element: (
					<div>
						<Cocktail />
					</div>
				),
			},
			{
				path: "newsletter",
				element: (
					<div>
						<Newsletter />
					</div>
				),
			},
		],
	},
]);

const App = () => {
	return <RouterProvider router={router} />;
};
export default App;
