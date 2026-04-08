import { Link } from "@tanstack/react-router";
import { Mail, Phone, MapPin, Instagram } from "lucide-react";

const exploreLinks = [
	{ label: "Beranda", href: "#home" },
	{ label: "Tentang", href: "#about" },
	{ label: "Produk", href: "#product" },
	{ label: "Harga", href: "#pricing" },
	{ label: "Kontak", href: "#contact" },
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
							diNikah
							<span className="inline-block text-yellow-500 transition-colors duration-300 dark:text-red-500">
								.in
							</span>
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
						<h3 className="text-sm font-semibold">Jelajahi</h3>
						<ul className="mt-4 space-y-2">
							{exploreLinks.map((link) => (
								<li key={link.href}>
									<a
										href={link.href}
										onClick={(e) => {
											e.preventDefault();
											const el = document.querySelector(link.href);
											if (el) {
												el.scrollIntoView({ behavior: "smooth" });
											}
										}}
										className="text-sm text-muted-foreground transition-colors hover:text-foreground"
									>
										{link.label}
									</a>
								</li>
							))}
						</ul>
					</div>

					{/* Get In Touch */}
					<div>
						<h3 className="text-sm font-semibold">Hubungi Kami</h3>
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
						<h3 className="text-sm font-semibold">Layanan Tim Kami</h3>
						<p className="mt-3 text-sm text-muted-foreground">
							Tertarik dengan layanan kami lainnya? Lihat portofolio kami, lalu
							hubungi kami setelahnya.
						</p>
						<div className="mt-4 flex gap-2">
							<button
								type="submit"
								className="shrink-0 rounded-md bg-primary px-3 py-1.5 text-sm font-medium text-primary-foreground hover:bg-primary/90"
							>
								Unduh Kredensial
							</button>
						</div>
					</div>
				</div>

				{/* Bottom Bar */}
				<div className="mt-12 border-t border-border pt-8">
					<div className="flex flex-col items-center justify-between gap-4 md:flex-row">
						<p className="text-sm text-muted-foreground">
							© {new Date().getFullYear()} diNikah.in. Hak cipta dilindungi.
						</p>
						<p className="text-sm text-muted-foreground">Made with love.</p>
					</div>
				</div>
			</div>
		</footer>
	);
}
