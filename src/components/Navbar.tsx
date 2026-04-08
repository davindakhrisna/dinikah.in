import { useState } from "react";
import { Link } from "@tanstack/react-router";
import { Menu, X } from "lucide-react";

import { cn } from "#/lib/utils";
import { Button } from "#/components/ui/button";
import ThemeToggle from "#/components/ThemeToggle";

interface NavItem {
	label: string;
	href: string;
}

const navItems: NavItem[] = [
	{ label: "Home", href: "/" },
	{ label: "About", href: "/about" },
	{ label: "Product", href: "/product" },
	{ label: "Contact", href: "/contact" },
];

export default function Navbar() {
	const [isOpen, setIsOpen] = useState(false);

	return (
		<header className="sticky top-0 z-50 w-full border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
			<div className="container mx-auto flex h-16 items-center justify-between px-4">
				{/* Logo */}
				<Link to="/" className="flex items-center gap-2">
					<span className="text-xl font-bold">
						diNikah<span className="text-yellow-500">.in</span>
					</span>
				</Link>

				{/* Desktop Navigation */}
				<nav className="hidden md:flex items-center gap-6">
					{navItems.map((item) => (
						<Link
							key={item.href}
							to={item.href}
							className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
							activeProps={{
								className: "text-foreground font-semibold",
							}}
						>
							{item.label}
						</Link>
					))}
				</nav>

				{/* Desktop Actions */}
				<div className="hidden md:flex items-center gap-2">
					<ThemeToggle />
					<Button
						variant="outline"
						size="sm"
						className="bg-red-500/90 text-white hover:bg-red-600 hover:text-white"
					>
						Get Started
					</Button>
				</div>

				{/* Mobile Menu Button */}
				<Button
					variant="ghost"
					size="icon"
					className="md:hidden"
					onClick={() => setIsOpen(!isOpen)}
					aria-label="Toggle menu"
				>
					{isOpen ? <X className="size-5" /> : <Menu className="size-5" />}
				</Button>
			</div>

			{/* Mobile Menu */}
			<div
				className={cn(
					"container mx-auto px-4 md:hidden",
					"max-h-0 overflow-hidden transition-all duration-300 ease-in-out",
					isOpen && "max-h-[500px] pb-4",
				)}
			>
				<nav className="flex flex-col gap-2 py-4">
					{navItems.map((item) => (
						<Link
							key={item.href}
							to={item.href}
							className="rounded-md px-3 py-2 text-sm font-medium text-muted-foreground transition-colors hover:bg-accent hover:text-foreground"
							activeProps={{
								className: "bg-accent text-foreground font-semibold",
							}}
							onClick={() => setIsOpen(false)}
						>
							{item.label}
						</Link>
					))}
					<div className="flex items-center gap-2 pt-2 border-t border-border mt-2">
						<ThemeToggle />
						<Button
							variant="outline"
							size="sm"
							className="flex-1 bg-red-500 text-white hover:bg-blue-500 hover:text-white"
						>
							Get Started
						</Button>
					</div>
				</nav>
			</div>
		</header>
	);
}
