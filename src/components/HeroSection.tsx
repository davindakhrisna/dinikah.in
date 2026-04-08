import { useEffect, useState } from "react";
import { Button } from "#/components/ui/button";

const rotatingTexts = [
	"Digitally Delivered",
	"Beautifully Designed",
	"Easily Customizable",
];

export default function HeroSection() {
	const [currentIndex, setCurrentIndex] = useState(0);
	const [isAnimating, setIsAnimating] = useState(false);

	useEffect(() => {
		const interval = setInterval(() => {
			setIsAnimating(true);
			setTimeout(() => {
				setCurrentIndex((prev) => (prev + 1) % rotatingTexts.length);
				setIsAnimating(false);
			}, 300);
		}, 3000);

		return () => clearInterval(interval);
	}, []);

	return (
		<section className="relative overflow-hidden bg-background py-20 md:py-32">
			{/* Background decoration */}
			<div className="absolute inset-0 -z-10">
				<div className="absolute right-0 top-0 h-[500px] w-[500px] translate-x-1/3 translate-y--1/4 rounded-full bg-secondary/20 blur-3xl" />
				<div className="absolute bottom-0 left-0 h-[400px] w-[400px] -translate-x-1/4 translate-y-1/4 rounded-full bg-primary/10 blur-3xl" />
			</div>

			<div className="container mx-auto px-4">
				<div className="mx-auto max-w-4xl text-center">
					{/* Badge */}
					<div className="mb-4 inline-flex items-center gap-2 rounded-full border border-border bg-muted px-3 py-1.5 text-xs font-medium sm:mb-6 sm:px-4 sm:text-sm">
						<span className="relative flex h-2 w-2">
							<span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-75" />
							<span className="relative inline-flex h-2 w-2 rounded-full bg-primary" />
						</span>
						Beautiful invitations, effortlessly crafted
					</div>

					{/* Heading */}
					<h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">
						<span className="block">Your Dream Wedding,</span>
						<span className="relative mt-2 inline-block">
							<span
								className={`relative z-10 inline-block text-primary transition-all duration-300 dark:[--glow-a:0.15] dark:[--glow-b:0.08] dark:[--glow-c:0.04] dark:[--glow-d:0.1] ${
									isAnimating
										? "translate-y-2 opacity-0"
										: "translate-y-0 opacity-100"
								}`}
								style={{
									"--glow-a": "0.5",
									"--glow-b": "0.25",
									"--glow-c": "0.15",
									"--glow-d": "0.35",
									textShadow: `
										0 0 10px rgba(250, 204, 21, var(--glow-a)),
										0 0 20px rgba(250, 204, 21, var(--glow-b)),
										0 0 40px rgba(250, 204, 21, var(--glow-c)),
										0 4px 8px rgba(250, 204, 21, var(--glow-d))
									`,
								} as React.CSSProperties & Record<string, string>}
							>
								{rotatingTexts[currentIndex]}
							</span>
						</span>
					</h1>

					{/* Description */}
					<p className="mx-auto mt-4 max-w-2xl text-base text-muted-foreground sm:mt-6 sm:text-lg md:text-xl">
						Create stunning digital wedding invitations that your guests will
						love. Choose from elegant templates, customize every detail, and
						send with a single click.
					</p>

					{/* CTA Buttons */}
					<div className="mt-8 flex flex-col items-center justify-center gap-4 sm:mt-10 sm:flex-row">
						<Button size="lg" className="w-full sm:w-auto">
							Create Your Invitation
						</Button>
						<Button variant="outline" size="lg" className="w-full sm:w-auto">
							View Templates
						</Button>
					</div>

					{/* Social proof */}
					<div className="mt-8 flex flex-col items-center justify-center gap-4 sm:mt-12 sm:flex-row sm:gap-8">
						<div className="flex -space-x-3">
							{[...Array(5)].map((_, i) => (
								<div
									key={i}
									className="flex h-10 w-10 items-center justify-center rounded-full border-2 border-background bg-muted text-xs font-medium"
								>
									{["A", "B", "C", "D", "E"][i]}
								</div>
							))}
						</div>
						<div className="text-center sm:text-left">
							<div className="text-sm font-semibold">
								Trusted by 10,000+ couples
							</div>
							<div className="text-sm text-muted-foreground">
								Join our growing community today
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
