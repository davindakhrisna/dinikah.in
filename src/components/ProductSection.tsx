import { useState } from "react";
import { Link } from "@tanstack/react-router";
import { ChevronLeft, ChevronRight, Heart } from "lucide-react";
import { Button } from "#/components/ui/button";

const themes = [
	"Semua",
	"Minimalis",
	"Floral",
	"Rustic",
	"Elegan",
	"Modern",
	"Vintage",
	"Islami",
	"Pantai",
];

interface Product {
	id: number;
	name: string;
	theme: string;
	description: string;
}

const mockProducts: Product[] = [
	{ id: 1, name: "Serenity", theme: "Minimalis", description: "Garis bersih, elegan sederhana" },
	{ id: 2, name: "Blossom", theme: "Floral", description: "Aksen floral romantis" },
	{ id: 3, name: "Woodland", theme: "Rustic", description: "Pesona alami yang hangat" },
	{ id: 4, name: "Royal Gold", theme: "Elegan", description: "Detail emas mewah" },
	{ id: 5, name: "Urban Chic", theme: "Modern", description: "Desain ramping kontemporer" },
	{ id: 6, name: "Heritage", theme: "Vintage", description: "Keindahan klasik abadi" },
	{ id: 7, name: "Noor", theme: "Islami", description: "Kaligrafi Islami yang indah" },
	{ id: 8, name: "Ocean Breeze", theme: "Pantai", description: "Nuansa pesisir yang tenang" },
	{ id: 9, name: "Pure White", theme: "Minimalis", description: "Kesederhanaan yang sofisticated" },
	{ id: 10, name: "Garden Rose", theme: "Floral", description: "Pola kelopak mawar lembut" },
	{ id: 11, name: "Barn Door", theme: "Rustic", description: "Kehangatan pedesaan" },
	{ id: 12, name: "Crystal", theme: "Elegan", description: "Aksen kristal berkilau" },
	{ id: 13, name: "Geometric", theme: "Modern", description: "Bentuk geometris berani" },
	{ id: 14, name: "Antique Lace", theme: "Vintage", description: "Detail renda halus" },
	{ id: 15, name: "Crescent", theme: "Islami", description: "Motif bulan sabit elegan" },
	{ id: 16, name: "Sunset Cove", theme: "Pantai", description: "Warna sunset hangat" },
	{ id: 17, name: "Zen", theme: "Minimalis", description: "Kesederhanaan yang damai" },
	{ id: 18, name: "Peony Dream", theme: "Floral", description: "Bunga peony yang subur" },
	{ id: 19, name: "Mason Jar", theme: "Rustic", description: "Pesona pedesaan yang menawan" },
	{ id: 20, name: "Silk & Satin", theme: "Elegan", description: "Kelembutan yang halus" },
	{ id: 21, name: "Neo", theme: "Modern", description: "Minimalisme futuristik" },
	{ id: 22, name: "Sepia Love", theme: "Vintage", description: "Nostalgia warna hangat" },
	{ id: 23, name: "Arabesque", theme: "Islami", description: "Pola geometris rumit" },
	{ id: 24, name: "Coral Reef", theme: "Pantai", description: "Warna karang cerah" },
	{ id: 25, name: "Tropical Leaf", theme: "Pantai", description: "Dedaunan tropis subur" },
];

const ITEMS_PER_PAGE = 6;

export default function ProductSection() {
	const [selectedTheme, setSelectedTheme] = useState("All");
	const [currentPage, setCurrentPage] = useState(1);

	const filteredProducts =
		selectedTheme === "All"
			? mockProducts
			: mockProducts.filter((p) => p.theme === selectedTheme);

	const totalPages = Math.ceil(filteredProducts.length / ITEMS_PER_PAGE);
	const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
	const paginatedProducts = filteredProducts.slice(
		startIndex,
		startIndex + ITEMS_PER_PAGE,
	);

	const handleThemeChange = (theme: string) => {
		setSelectedTheme(theme);
		setCurrentPage(1);
	};

	return (
		<section id="product" className="relative overflow-hidden bg-background py-12 md:py-20">
			<div className="container mx-auto px-4">
				{/* Header */}
				<div className="mx-auto max-w-2xl text-center">
					<div className="mb-2 text-sm font-semibold uppercase tracking-wider text-primary">
						Template Kami
					</div>
					<h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl md:text-5xl">
						Pilih{" "}
						<span className="text-primary">Tema Sempurna Anda</span>
					</h2>
					<p className="mt-4 text-muted-foreground md:text-lg">
						Jelajahi koleksi template undangan pernikahan kami yang dikurasi
						dan temukan yang menceritakan kisah cinta Anda.
					</p>
				</div>

				{/* Theme Filter */}
				<div className="mt-10 flex flex-wrap items-center justify-center gap-2">
					{themes.map((theme) => (
						<Button
							key={theme}
							variant={selectedTheme === theme ? "default" : "outline"}
							size="sm"
							onClick={() => handleThemeChange(theme)}
							className={
								selectedTheme === theme
									? "bg-primary text-primary-foreground"
									: ""
							}
						>
							{theme}
						</Button>
					))}
				</div>

				{/* Product Grid */}
				<div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
					{paginatedProducts.map((product) => (
						<div
							key={product.id}
							className="group overflow-hidden rounded-lg border border-border bg-background transition-shadow hover:shadow-md"
						>
							{/* Image placeholder */}
							<div className="flex aspect-[3/2] items-center justify-center bg-muted">
								<div className="text-center">
									<Heart className="mx-auto h-6 w-6 text-primary/20 transition-transform group-hover:scale-110" />
									<p className="mt-1 text-[10px] text-muted-foreground">
										{product.theme}
									</p>
								</div>
							</div>

							{/* Content */}
							<div className="p-3">
								<div className="flex items-center justify-between">
									<h3 className="text-sm font-semibold">{product.name}</h3>
									<span className="rounded-full bg-primary/10 px-2 py-0.5 text-[10px] font-medium text-primary">
										{product.theme}
									</span>
								</div>
								<p className="mt-1 text-xs text-muted-foreground">
									{product.description}
								</p>

								{/* Action buttons */}
								<div className="mt-3 flex gap-2">
									<Button
										variant="outline"
										size="xs"
										className="flex-1"
									>
										View
									</Button>
									<Link to="/dashboard" className="flex-1">
										<Button
											size="xs"
											className="w-full bg-primary text-primary-foreground"
										>
											Order
										</Button>
									</Link>
								</div>
							</div>
						</div>
					))}
				</div>

				{/* Empty state */}
				{paginatedProducts.length === 0 && (
					<div className="mt-10 py-12 text-center">
						<p className="text-muted-foreground">
							Tidak ada template untuk tema ini.
						</p>
					</div>
				)}

				{/* Pagination */}
				{totalPages > 1 && (
					<div className="mt-10 flex items-center justify-center gap-2">
						<Button
							variant="outline"
							size="icon-sm"
							disabled={currentPage === 1}
							onClick={() => setCurrentPage((p) => p - 1)}
							aria-label="Previous page"
						>
							<ChevronLeft className="h-4 w-4" />
						</Button>

						{Array.from({ length: totalPages }, (_, i) => i + 1).map(
							(page) => (
								<Button
									key={page}
									variant={currentPage === page ? "default" : "outline"}
									size="sm"
									onClick={() => setCurrentPage(page)}
									className="h-8 w-8 p-0"
								>
									{page}
								</Button>
							),
						)}

						<Button
							variant="outline"
							size="icon-sm"
							disabled={currentPage === totalPages}
							onClick={() => setCurrentPage((p) => p + 1)}
							aria-label="Next page"
						>
							<ChevronRight className="h-4 w-4" />
						</Button>
					</div>
				)}
			</div>
		</section>
	);
}
