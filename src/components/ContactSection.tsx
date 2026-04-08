import { Send } from "lucide-react";
import { Button } from "#/components/ui/button";
import { Input } from "#/components/ui/input";
import { Textarea } from "#/components/ui/textarea";

export default function ContactSection() {
	return (
		<section id="contact" className="relative overflow-hidden border-t border-muted-foreground/20 bg-muted py-16 md:py-28 dark:bg-background">
			<div className="container mx-auto px-4">
				{/* Header */}
				<div className="mx-auto max-w-2xl text-center">
					<div className="mb-2 text-sm font-semibold uppercase tracking-wider text-primary">
						Hubungi Kami
					</div>
					<h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl md:text-5xl">
						Hubungi{" "}
						<span className="text-primary">Kami</span>
					</h2>
					<p className="mt-4 text-muted-foreground md:text-lg">
						Punya pertanyaan tentang template kami atau butuh bantuan dengan
						undangan Anda? Kami senang mendengar dari Anda.
					</p>
				</div>

				<div className="mx-auto mt-12 max-w-xl">
					{/* Contact Form */}
					<form className="space-y-5">
						<div className="grid gap-5 sm:grid-cols-2">
							<div className="space-y-2">
								<label
									htmlFor="name"
									className="text-sm font-medium"
								>
									Nama
								</label>
								<Input
									id="name"
									placeholder="Nama Anda"
								/>
							</div>
							<div className="space-y-2">
								<label
									htmlFor="email"
									className="text-sm font-medium"
								>
									Email
								</label>
								<Input
									id="email"
									type="email"
									placeholder="anda@contoh.com"
								/>
							</div>
						</div>

						<div className="space-y-2">
							<label
								htmlFor="subject"
								className="text-sm font-medium"
							>
								Subjek
							</label>
							<Input
								id="subject"
								placeholder="Bagaimana kami bisa membantu?"
							/>
						</div>

						<div className="space-y-2">
							<label
								htmlFor="message"
								className="text-sm font-medium"
							>
								Pesan
							</label>
							<Textarea
								id="message"
								placeholder="Ceritakan lebih detail..."
								rows={5}
							/>
						</div>

						<Button type="submit" size="lg" className="w-full sm:w-auto">
							<Send className="mr-2 h-4 w-4" />
							Kirim Pesan
						</Button>
					</form>
				</div>
			</div>
		</section>
	);
}
