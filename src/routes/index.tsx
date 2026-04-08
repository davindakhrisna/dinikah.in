import { createFileRoute } from "@tanstack/react-router";
import HeroSection from "#/components/HeroSection";
import AboutSection from "#/components/AboutSection";
import ProductSection from "#/components/ProductSection";
import PricingSection from "#/components/PricingSection";
import ContactSection from "#/components/ContactSection";
import Navbar from "#/components/Navbar";
import Footer from "#/components/Footer";

export const Route = createFileRoute("/")({ component: App });

function App() {
	return (
		<div className="relative flex min-h-screen flex-col">
			<Navbar />
			<main className="flex-1">
				<HeroSection />
				<AboutSection />
				<ProductSection />
				<PricingSection />
				<ContactSection />
			</main>
			<Footer />
		</div>
	);
}
