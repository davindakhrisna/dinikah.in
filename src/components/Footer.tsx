import { Link } from "@tanstack/react-router";
import { Mail, Phone, MapPin, Instagram } from "lucide-react";

const exploreLinks = [
	{ label: "Home", href: "/" },
	{ label: "Product", href: "/product" },
	{ label: "FAQ", href: "/faq" },
];

const contactInfo = [
	{
		icon: Mail,
		label: "hello@dinikah.in",
		href: "mailto:hello@dinikah.in",
	},
	{ icon: Phone, label: "+1 (555) 123-4567", href: "tel:+15551234567" },
	{ icon: MapPin, label: "Jakarta, Indonesia", href: "#" },
];

const socialLinks = [
	{
		icon: (props: React.ComponentProps<"svg">) => (
			<svg
				xmlns="http://www.w3.org/2000/svg"
				viewBox="0 0 24 24"
				fill="none"
				stroke="currentColor"
				strokeWidth="2"
				strokeLinecap="round"
				strokeLinejoin="round"
				{...props}
			>
				<path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5" />
			</svg>
		),
		href: "https://tiktok.com",
		label: "TikTok",
	},
	{ icon: Instagram, href: "https://instagram.com", label: "Instagram" },
];

export default function Footer() {
	return (
		<footer className="border-t border-border bg-background">
			<div className="container mx-auto px-4 py-12">
				<div className="grid grid-cols-2 gap-8 md:grid-cols-4">
					{/* Brand */}
					<div className="col-span-2 md:col-span-1">
						<Link to="/" className="text-xl font-bold">
							diNikah<span className="text-yellow-500">.in</span>
						</Link>
						<p className="mt-3 text-sm text-muted-foreground">
							Building great products, one step at a time.
						</p>
						<div className="mt-4 flex items-center gap-3">
							{socialLinks.map(({ icon: Icon, href, label }) => (
								<a
									key={label}
									href={href}
									target="_blank"
									rel="noopener noreferrer"
									className="text-muted-foreground transition-colors hover:text-foreground"
									aria-label={label}
								>
									<Icon className="size-6" />
								</a>
							))}
						</div>
					</div>

					{/* Explore */}
					<div>
						<h3 className="text-sm font-semibold">Explore</h3>
						<ul className="mt-4 space-y-2">
							{exploreLinks.map((link) => (
								<li key={link.href}>
									<Link
										to={link.href}
										className="text-sm text-muted-foreground transition-colors hover:text-foreground"
									>
										{link.label}
									</Link>
								</li>
							))}
						</ul>
					</div>

					{/* Get In Touch */}
					<div>
						<h3 className="text-sm font-semibold">Get In Touch</h3>
						<ul className="mt-4 space-y-3">
							{contactInfo.map(({ icon: Icon, label, href }) => (
								<li key={label}>
									<a
										href={href}
										className="flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
									>
										<Icon className="size-4 shrink-0" />
										<span>{label}</span>
									</a>
								</li>
							))}
						</ul>
					</div>

					{/* Newsletter / CTA */}
					<div>
						<h3 className="text-sm font-semibold">Our Team's Service</h3>
						<p className="mt-3 text-sm text-muted-foreground">
							Interested in our other services? Check out our portfolio
							credentials, then contact us afterwards.
						</p>
						<div className="mt-4 flex gap-2">
							<button
								type="submit"
								className="shrink-0 rounded-md bg-primary px-3 py-1.5 text-sm font-medium text-primary-foreground hover:bg-primary/90"
							>
								Download Credentials
							</button>
						</div>
					</div>
				</div>

				{/* Bottom Bar */}
				<div className="mt-12 border-t border-border pt-8">
					<div className="flex flex-col items-center justify-between gap-4 md:flex-row">
						<p className="text-sm text-muted-foreground">
							© {new Date().getFullYear()} diNikah.in. All rights reserved.
						</p>
						<p className="text-sm text-muted-foreground">
							Made with love from our crew.
						</p>
					</div>
				</div>
			</div>
		</footer>
	);
}
