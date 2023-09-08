import { useRouteError } from "react-router-dom";
import { Link } from "react-router-dom";
const SinglePageError = () => {
	const error = useRouteError();
	return (
		<div
			style={{
				display: "grid",
				padding: "10px",
				justifyContent: "center",
			}}
		>
			<h2>something went wrong...</h2>
			<button className="btn">
				<Link to="/">back home</Link>
			</button>
		</div>
	);
};
export default SinglePageError;
