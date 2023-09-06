import { RouterProvider, createBrowserRouter } from "react-router-dom";
import {
	About,
	HomeLayout,
	Landing,
	Cocktail,
	Error,
	Newsletter,
} from "./pages";

const router = createBrowserRouter([
	{
		path: "/",
		element: <HomeLayout />,
		children: [
			{
				path: "about",
				element: <About />,
			},
			{
				path: "error",
				element: (
					<div>
						<Error />
					</div>
				),
			},
			{
				index: true,
				element: (
					<div>
						<Landing />
					</div>
				),
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
