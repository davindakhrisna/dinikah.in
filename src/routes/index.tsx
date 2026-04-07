import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/")({ component: App });

function App() {
	return (
		<main className="page-wrap p-8 pt-14">
			<div></div>
		</main>
	);
}
