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
import { loader as singleCocktailLoader } from "./pages/Cocktail";
import { action as newsletterAction } from "./pages/Newsletter";

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
				path: "cocktail/:id",
				errorElement: <SinglePageError />,
				loader: singleCocktailLoader,
				element: <Cocktail />,
			},
			{
				path: "newsletter",
				element: <Newsletter />,
				action: newsletterAction,
			},
		],
	},
]);

const App = () => {
	return <RouterProvider router={router} />;
};
export default App;
