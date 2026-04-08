import { Check } from "lucide-react";
import { Button } from "#/components/ui/button";
import { Link } from "@tanstack/react-router";

const packages = [
	{
		name: "Ekonomis",
		price: "99k",
		priceLabel: "Rp 99.000",
		description: "Paket hemat untuk undangan digital sederhana",
		features: [
			"Kapasitas nama tamu unlimited",
			"Masa aktif 6 bulan",
			"Navigasi maps",
			"Background music",
			"Fitur RSVP",
			"Desain statis",
		],
		highlight: false,
	},
	{
		name: "Standar",
		price: "149k",
		priceLabel: "Rp 149.000",
		description: "Paling populer untuk pernikahan impian",
		features: [
			"Kapasitas nama tamu unlimited",
			"Masa aktif 1 tahun",
			"Navigasi maps",
			"Background music",
			"Fitur RSVP",
			"Desain animasi",
			"Galeri maksimal 5 foto dan 1 video",
			"Fitur kirim angpao/hadiah digital",
			"Gratis revisi",
		],
		highlight: true,
	},
	{
		name: "Premium",
		price: "249k",
		priceLabel: "Rp 249.000",
		description: "Pengalaman terbaik tanpa batas",
		features: [
			"Kapasitas nama tamu unlimited",
			"Masa aktif 16 bulan",
			"Navigasi maps",
			"Background music request sendiri",
			"Fitur RSVP",
			"Desain animasi",
			"Galeri maksimal 15 foto dan 3 video",
			"Fitur kirim angpao/hadiah digital",
			"Gratis revisi",
			"Tanpa watermark",
			"Custom domain",
		],
		highlight: false,
	},
];

export default function PricingSection() {
	return (
		<section
			id="pricing"
			className="relative overflow-hidden border-t border-muted-foreground/20 bg-background py-16 md:py-28"
		>
			<div className="container mx-auto px-4">
				{/* Header */}
				<div className="mx-auto max-w-2xl text-center">
					<div className="mb-2 text-sm font-semibold uppercase tracking-wider text-primary">
						Harga
					</div>
					<h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl md:text-5xl">
						Pilih <span className="text-primary">Paket Anda</span>
					</h2>
					<p className="mt-4 text-muted-foreground md:text-lg">
						Harga terjangkau untuk undangan digital yang memukau. Pilih paket
						yang sesuai dengan kebutuhan Anda.
					</p>
				</div>

				{/* Pricing Cards */}
				<div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
					{packages.map(
						({ name, price, priceLabel, description, features, highlight }) => (
							<div
								key={name}
								className={`relative flex flex-col rounded-xl border border-border bg-background p-6 shadow-sm transition-shadow hover:shadow-md dark:bg-card ${
									highlight ? "border-primary shadow-md" : ""
								}`}
							>
								{highlight && (
									<div className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-primary px-3 py-0.5 text-xs font-medium text-primary-foreground">
										Paling Populer
									</div>
								)}

								{/* Header */}
								<div className="text-center">
									<h3 className="text-lg font-semibold">{name}</h3>
									<p className="mt-1 text-sm text-muted-foreground">
										{description}
									</p>
									<div className="mt-4">
										<span className="text-4xl font-extrabold">{price}</span>
									</div>
									<p className="mt-1 text-xs text-muted-foreground">
										{priceLabel}
									</p>
								</div>

								{/* Features */}
								<ul className="mt-6 space-y-3">
									{features.map((feature) => (
										<li
											key={feature}
											className="flex items-start gap-2 text-sm"
										>
											<Check className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
											<span className="text-muted-foreground">{feature}</span>
										</li>
									))}
								</ul>

								{/* CTA */}
								<div className="mt-auto pt-6">
									<Link to="/dashboard" className="block">
										<Button
											className="w-full"
											variant={highlight ? "default" : "outline"}
										>
											Pilih {name}
										</Button>
									</Link>
								</div>
							</div>
						),
					)}
				</div>
			</div>
		</section>
	);
}
