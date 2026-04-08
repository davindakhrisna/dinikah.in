import { useState } from "react";
import { Link } from "@tanstack/react-router";
import { createFileRoute } from "@tanstack/react-router";
import { Button } from "#/components/ui/button";
import { Input } from "#/components/ui/input";
import {
	Card,
	CardContent,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle,
} from "#/components/ui/card";

export const Route = createFileRoute("/register")({ component: RegisterPage });

function RegisterPage() {
	const [name, setName] = useState("");
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [confirmPassword, setConfirmPassword] = useState("");

	return (
		<div className="flex min-h-screen items-center justify-center bg-background px-4 py-16">
			<div className="w-full max-w-md space-y-6">
				{/* Logo */}
				<div className="text-center">
					<Link to="/" className="text-2xl font-bold">
						diNikah<span className="text-yellow-500 dark:text-red-500">.in</span>
					</Link>
				</div>

				<Card>
					<CardHeader className="text-center">
						<CardTitle className="text-2xl">Buat Akun Anda</CardTitle>
						<CardDescription>
							Mulai buat undangan pernikahan indah dalam hitungan menit
						</CardDescription>
					</CardHeader>
					<CardContent>
						<form className="space-y-4">
							<div className="space-y-2">
								<label htmlFor="name" className="text-sm font-medium">
									Nama Lengkap
								</label>
								<Input
									id="name"
									type="text"
									placeholder="John Doe"
									value={name}
									onChange={(e) => setName(e.target.value)}
								/>
							</div>

							<div className="space-y-2">
								<label htmlFor="email" className="text-sm font-medium">
									Email
								</label>
								<Input
									id="email"
									type="email"
									placeholder="anda@contoh.com"
									value={email}
									onChange={(e) => setEmail(e.target.value)}
								/>
							</div>

							<div className="space-y-2">
								<label htmlFor="password" className="text-sm font-medium">
									Kata Sandi
								</label>
								<Input
									id="password"
									type="password"
									placeholder="••••••••"
									value={password}
									onChange={(e) => setPassword(e.target.value)}
								/>
							</div>

							<div className="space-y-2">
								<label
									htmlFor="confirmPassword"
									className="text-sm font-medium"
								>
									Konfirmasi Kata Sandi
								</label>
								<Input
									id="confirmPassword"
									type="password"
									placeholder="••••••••"
									value={confirmPassword}
									onChange={(e) => setConfirmPassword(e.target.value)}
								/>
							</div>

							<Button type="submit" className="w-full">
								Buat Akun
							</Button>
						</form>
					</CardContent>
					<CardFooter className="flex flex-col gap-4 border-t pt-6">
						<p className="text-center text-sm text-muted-foreground">
							Sudah punya akun?{" "}
							<Link
								to="/login"
								className="font-medium text-primary hover:underline"
							>
								Masuk
							</Link>
						</p>
					</CardFooter>
				</Card>
			</div>
		</div>
	);
}
