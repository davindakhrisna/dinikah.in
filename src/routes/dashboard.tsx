import { useState } from "react";
import { Link, createFileRoute } from "@tanstack/react-router";
import {
	Heart,
	FileText,
	Plus,
	Eye,
	Settings,
	LogOut,
	Calendar,
	Clock,
	MoreHorizontal,
	Edit,
	Trash2,
	Share2,
	User,
	Bell,
} from "lucide-react";
import { Button } from "#/components/ui/button";
import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from "#/components/ui/card";

export const Route = createFileRoute("/dashboard")({ component: DashboardPage });

const myInvitations = [
	{ id: 1, couple: "Ahmad & Siti", template: "Serenity", status: "Published", date: "15 Jun 2025", guests: 150, rsvps: 120 },
	{ id: 2, couple: "Budi & Rina", template: "Blossom", status: "Draft", date: "20 Jun 2025", guests: 0, rsvps: 0 },
	{ id: 3, couple: "Candra & Dewi", template: "Royal Gold", status: "Published", date: "5 Jul 2025", guests: 200, rsvps: 85 },
	{ id: 4, couple: "Dimas & Fitri", template: "Noor", status: "Scheduled", date: "1 Agu 2025", guests: 100, rsvps: 0 },
];

const upcomingEvents = [
	{ title: "Pernikahan Ahmad & Siti", date: "15 Jun 2025", time: "08:00", type: "Akad" },
	{ title: "Batas Waktu RSVP", date: "10 Jun 2025", time: "23:59", type: "Pengingat" },
	{ title: "Pernikahan Candra & Dewi", date: "5 Jul 2025", time: "11:00", type: "Resepsi" },
];

const recentActivity = [
	{ action: "RSVP dikonfirmasi", user: "John Doe", time: "2 menit lalu" },
	{ action: "Tamu baru ditambahkan", user: "Jane Smith", time: "1 jam lalu" },
	{ action: "Template diubah", user: "Anda", time: "3 jam lalu" },
	{ action: "Undangan dibagikan", user: "Anda", time: "Kemarin" },
];

function DashboardPage() {
	const [sidebarOpen, setSidebarOpen] = useState(false);

	return (
		<div className="flex min-h-screen bg-muted/30">
			{/* Sidebar */}
			<aside
				className={`fixed inset-y-0 left-0 z-50 w-64 border-r border-border bg-background transition-transform duration-300 lg:static lg:translate-x-0 ${
					sidebarOpen ? "translate-x-0" : "-translate-x-full"
				}`}
			>
				<div className="flex h-16 items-center border-b border-border px-6">
					<Link to="/" className="text-xl font-bold">
						diNikah<span className="text-yellow-500 dark:text-red-500">.in</span>
					</Link>
				</div>

				<nav className="space-y-1 p-4">
					{[
						{ label: "Dasbor", icon: FileText, active: true },
						{ label: "Undangan Saya", icon: Heart },
						{ label: "Tamu", icon: User },
						{ label: "Kalender", icon: Calendar },
						{ label: "Pengaturan", icon: Settings },
					].map(({ label, icon: Icon, active }) => (
						<a
							key={label}
							href="#"
							className={`flex items-center gap-3 rounded-lg px-3 py-2 text-sm font-medium transition-colors ${
								active
									? "bg-primary/10 text-primary"
									: "text-muted-foreground hover:bg-muted hover:text-foreground"
							}`}
						>
							<Icon className="h-4 w-4" />
							{label}
						</a>
					))}
				</nav>

				<div className="absolute bottom-4 left-0 right-0 px-4">
					<a
						href="#"
						className="flex items-center gap-3 rounded-lg px-3 py-2 text-sm font-medium text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
					>
						<LogOut className="h-4 w-4" />
						Keluar
					</a>
				</div>
			</aside>

			{/* Overlay for mobile */}
			{sidebarOpen && (
				<div
					className="fixed inset-0 z-40 bg-black/50 lg:hidden"
					onClick={() => setSidebarOpen(false)}
				/>
			)}

			{/* Main content */}
			<div className="flex flex-1 flex-col">
				{/* Top bar */}
				<header className="flex h-16 items-center justify-between border-b border-border bg-background px-6">
					<Button
						variant="ghost"
						size="icon"
						className="lg:hidden"
						onClick={() => setSidebarOpen(!sidebarOpen)}
					>
						<MoreHorizontal className="h-5 w-5" />
					</Button>
					<div className="flex items-center gap-4">
						<Button variant="ghost" size="icon" className="relative">
							<Bell className="h-5 w-5" />
							<span className="absolute right-1 top-1 h-2 w-2 rounded-full bg-primary" />
						</Button>
						<div className="flex items-center gap-3">
							<div className="text-right">
								<p className="text-sm font-medium">Ahmad Fauzi</p>
								<p className="text-xs text-muted-foreground">ahmad@email.com</p>
							</div>
							<div className="flex h-9 w-9 items-center justify-center rounded-full bg-primary text-sm font-medium text-primary-foreground">
								A
							</div>
						</div>
					</div>
				</header>

				{/* Content */}
				<main className="flex-1 p-6">
					{/* Welcome + CTA */}
					<div className="mb-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
						<div>
							<h1 className="text-2xl font-bold">Selamat Datang, Ahmad</h1>
							<p className="text-sm text-muted-foreground">
								Kelola undangan pernikahan Anda dan pantau RSVP
							</p>
						</div>
						<Link to="/login">
							<Button>
								<Plus className="mr-2 h-4 w-4" />
								Buat Undangan
							</Button>
						</Link>
					</div>

					{/* Stats */}
					<div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
						<Card>
							<CardContent className="p-6">
								<div className="flex items-center justify-between">
									<div>
										<p className="text-sm text-muted-foreground">
											Total Undangan
										</p>
										<p className="mt-1 text-2xl font-bold">4</p>
									</div>
									<div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
										<Heart className="h-5 w-5" />
									</div>
								</div>
							</CardContent>
						</Card>
						<Card>
							<CardContent className="p-6">
								<div className="flex items-center justify-between">
									<div>
										<p className="text-sm text-muted-foreground">
											Diterbitkan
										</p>
										<p className="mt-1 text-2xl font-bold">2</p>
									</div>
									<div className="flex h-10 w-10 items-center justify-center rounded-lg bg-green-500/10 text-green-600">
										<Eye className="h-5 w-5" />
									</div>
								</div>
							</CardContent>
						</Card>
						<Card>
							<CardContent className="p-6">
								<div className="flex items-center justify-between">
									<div>
										<p className="text-sm text-muted-foreground">
											Total Tamu
										</p>
										<p className="mt-1 text-2xl font-bold">450</p>
									</div>
									<div className="flex h-10 w-10 items-center justify-center rounded-lg bg-blue-500/10 text-blue-600">
										<User className="h-5 w-5" />
									</div>
								</div>
							</CardContent>
						</Card>
						<Card>
							<CardContent className="p-6">
								<div className="flex items-center justify-between">
									<div>
										<p className="text-sm text-muted-foreground">
											RSVP Diterima
										</p>
										<p className="mt-1 text-2xl font-bold">205</p>
									</div>
									<div className="flex h-10 w-10 items-center justify-center rounded-lg bg-yellow-500/10 text-yellow-600">
										<Clock className="h-5 w-5" />
									</div>
								</div>
							</CardContent>
						</Card>
					</div>

					{/* Main grid */}
					<div className="mt-6 grid gap-6 lg:grid-cols-3">
						{/* My Invitations */}
						<div className="lg:col-span-2">
							<Card>
								<CardHeader>
									<CardTitle className="text-lg">Undangan Saya</CardTitle>
									<CardDescription>
										Kelola undangan pernikahan Anda
									</CardDescription>
								</CardHeader>
								<CardContent>
									<div className="space-y-4">
										{myInvitations.map((inv) => (
											<div
												key={inv.id}
												className="flex flex-col gap-3 rounded-lg border border-border p-4 sm:flex-row sm:items-center sm:justify-between"
											>
												<div className="flex items-center gap-4">
													<div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
														<Heart className="h-5 w-5" />
													</div>
													<div>
														<p className="text-sm font-medium">{inv.couple}</p>
														<p className="text-xs text-muted-foreground">
															{inv.template} · {inv.date}
														</p>
													</div>
												</div>
												<div className="flex items-center gap-3">
													<span
														className={`rounded-full px-2 py-0.5 text-[10px] font-medium ${
															inv.status === "Published"
																? "bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400"
																: inv.status === "Draft"
																	? "bg-gray-100 text-gray-700 dark:bg-gray-800 dark:text-gray-400"
																	: "bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400"
														}`}
													>
														{inv.status}
													</span>
													<div className="flex gap-1">
														<Button variant="ghost" size="icon-xs">
															<Eye className="h-3.5 w-3.5" />
														</Button>
														<Button variant="ghost" size="icon-xs">
															<Edit className="h-3.5 w-3.5" />
														</Button>
														<Button variant="ghost" size="icon-xs">
															<Share2 className="h-3.5 w-3.5" />
														</Button>
														<Button variant="ghost" size="icon-xs">
															<Trash2 className="h-3.5 w-3.5" />
														</Button>
													</div>
												</div>
											</div>
										))}
									</div>
								</CardContent>
							</Card>
						</div>

						{/* Right column */}
						<div className="space-y-6">
							{/* Upcoming Events */}
							<Card>
								<CardHeader>
									<CardTitle className="text-lg">Acara Mendatang</CardTitle>
									<CardDescription>Tanggal penting</CardDescription>
								</CardHeader>
								<CardContent>
									<div className="space-y-4">
										{upcomingEvents.map((event, i) => (
											<div key={i} className="flex gap-3">
												<div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
													<Calendar className="h-4 w-4" />
												</div>
												<div>
													<p className="text-sm font-medium">{event.title}</p>
													<p className="text-xs text-muted-foreground">
														{event.date} · {event.time}
													</p>
												</div>
											</div>
										))}
									</div>
								</CardContent>
							</Card>

							{/* Recent Activity */}
							<Card>
								<CardHeader>
									<CardTitle className="text-lg">Aktivitas Terbaru</CardTitle>
									<CardDescription>Pembaruan terbaru</CardDescription>
								</CardHeader>
								<CardContent>
									<div className="space-y-4">
										{recentActivity.map((activity, i) => (
											<div key={i} className="flex items-start gap-3">
												<div className="mt-1 h-2 w-2 shrink-0 rounded-full bg-primary" />
												<div>
													<p className="text-sm">{activity.action}</p>
													<p className="text-xs text-muted-foreground">
														{activity.user} · {activity.time}
													</p>
												</div>
											</div>
										))}
									</div>
								</CardContent>
							</Card>
						</div>
					</div>
				</main>
			</div>
		</div>
	);
}
