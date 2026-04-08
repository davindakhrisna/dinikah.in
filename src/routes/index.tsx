import { createFileRoute } from "@tanstack/react-router";
import HeroSection from "#/components/HeroSection";

export const Route = createFileRoute("/")({ component: App });

function App() {
	return (
		<main className="page-wrap p-8 pt-14">
			<HeroSection />
		</main>
	);
}
