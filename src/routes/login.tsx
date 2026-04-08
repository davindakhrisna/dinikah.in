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

export const Route = createFileRoute("/login")({ component: LoginPage });

function LoginPage() {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");

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
						<CardTitle className="text-2xl">Selamat Datang Kembali</CardTitle>
						<CardDescription>
							Masuk ke akun Anda untuk mengelola undangan
						</CardDescription>
					</CardHeader>
					<CardContent>
						<form className="space-y-4">
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
								<div className="flex items-center justify-between">
									<label htmlFor="password" className="text-sm font-medium">
										Kata Sandi
									</label>
									<a
										href="#"
										className="text-xs text-primary hover:underline"
									>
										Lupa kata sandi?
									</a>
								</div>
								<Input
									id="password"
									type="password"
									placeholder="••••••••"
									value={password}
									onChange={(e) => setPassword(e.target.value)}
								/>
							</div>

							<Button type="submit" className="w-full">
								Masuk
							</Button>
						</form>
					</CardContent>
					<CardFooter className="flex flex-col gap-4 border-t pt-6">
						<p className="text-center text-sm text-muted-foreground">
							Belum punya akun?{" "}
							<Link
								to="/register"
								className="font-medium text-primary hover:underline"
							>
								Buat akun
							</Link>
						</p>
					</CardFooter>
				</Card>
			</div>
		</div>
	);
}
