import { Heart } from "lucide-react";

interface AboutSectionProps {
	imageSrc?: string;
	imageAlt?: string;
}

const features = [
	{
		title: "Template Elegan",
		description:
			"Pilih dari puluhan desain indah yang dibuat untuk setiap gaya pernikahan.",
	},
	{
		title: "Detail Personal",
		description:
			"Tambahkan cerita cinta, foto, info venue, dan pesan khusus dengan mudah.",
	},
	{
		title: "Kirim Instan",
		description:
			"Bagikan undangan via WhatsApp, media sosial, atau tautan unik.",
	},
	{
		title: "RSVP & Manajemen Tamu",
		description:
			"Pantau respons, kelola daftar tamu, dan tetap terorganisir tanpa ribet.",
	},
];

export default function AboutSection({
	imageSrc,
	imageAlt = "About diNikah.in",
}: AboutSectionProps) {
	return (
		<section id="about" className="relative overflow-hidden border-t border-muted-foreground/20 bg-muted py-16 md:py-28 dark:bg-background">
			<div className="container mx-auto px-4">
				<div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
					{/* Image - shown second on mobile via order */}
					<div className="order-1 lg:order-none relative flex justify-center">
						<div className="relative w-full max-w-sm sm:max-w-md">
							{/* Image container */}
							<div className="relative overflow-hidden rounded-xl border border-border bg-background shadow-xl sm:rounded-2xl dark:bg-card">
								{imageSrc ? (
									<img
										src={imageSrc}
										alt={imageAlt}
										className="h-auto w-full object-cover"
										loading="lazy"
									/>
								) : (
									<div className="flex aspect-[4/3] items-center justify-center">
										<div className="text-center">
											<Heart className="mx-auto h-12 w-12 text-primary/30 sm:h-16 sm:w-16" />
											<p className="mt-2 text-xs text-muted-foreground sm:mt-3 sm:text-sm">
												Your image here
											</p>
										</div>
									</div>
								)}
							</div>

							{/* Decorative accent */}
							<div className="absolute -bottom-3 -right-3 -z-10 h-full w-full rounded-xl bg-secondary/20 dark:bg-secondary/10 sm:-bottom-4 sm:-right-4 sm:rounded-2xl" />
						</div>
					</div>

					{/* Content - shown first on mobile */}
					<div className="order-2 lg:order-none">
						<div className="mb-2 text-sm font-semibold uppercase tracking-wider text-primary">
							Tentang Kami
						</div>
						<h2 className="text-2xl font-extrabold tracking-tight sm:text-3xl md:text-4xl lg:text-5xl">
							Buat Pernikahanmu{" "}
							<span className="text-primary">Tak Terlupakan</span>
						</h2>
						<p className="mt-3 text-sm text-muted-foreground sm:mt-4 sm:text-base md:text-lg">
							diNikah.in membantu pasangan membuat undangan pernikahan digital
							yang indah dalam hitungan menit. Tanpa perlu keahlian desain —
							cukup pilih template, sesuaikan, dan bagikan ke orang tersayang.
						</p>

						{/* Features */}
						<div className="mt-8 grid gap-4 sm:mt-10 sm:grid-cols-2 sm:gap-6">
							{features.map(({ title, description }) => (
								<div
									key={title}
									className="rounded-xl border border-border bg-background p-5 shadow-sm dark:bg-card"
								>
									<h3 className="text-base font-semibold">{title}</h3>
									<p className="mt-2 text-sm text-muted-foreground">
										{description}
									</p>
								</div>
							))}
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
