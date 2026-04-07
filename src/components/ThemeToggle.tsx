import { useEffect, useState } from "react";
import { Sun, Moon } from "lucide-react";

type ThemeMode = "light" | "dark" | "auto";

function getInitialMode(): ThemeMode {
	if (typeof window === "undefined") {
		return "auto";
	}

	const stored = window.localStorage.getItem("theme");
	if (stored === "light" || stored === "dark" || stored === "auto") {
		return stored;
	}

	return "auto";
}

function applyThemeMode(mode: ThemeMode) {
	if (typeof window === "undefined") return;

	const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
	const resolved = mode === "auto" ? (prefersDark ? "dark" : "light") : mode;

	document.documentElement.classList.remove("light", "dark");
	document.documentElement.classList.add(resolved);

	if (mode === "auto") {
		document.documentElement.removeAttribute("data-theme");
	} else {
		document.documentElement.setAttribute("data-theme", mode);
	}

	document.documentElement.style.colorScheme = resolved;
}

function getIsDark(mode: ThemeMode): boolean {
	if (typeof window === "undefined") return false;
	return (
		mode === "dark" ||
		(mode === "auto" &&
			window.matchMedia("(prefers-color-scheme: dark)").matches)
	);
}

export default function ThemeToggle() {
	const [mode, setMode] = useState<ThemeMode>("auto");
	const [isDark, setIsDark] = useState(false);

	useEffect(() => {
		const initialMode = getInitialMode();
		setMode(initialMode);
		setIsDark(getIsDark(initialMode));
		applyThemeMode(initialMode);
	}, []);

	useEffect(() => {
		if (mode !== "auto") {
			return;
		}

		const media = window.matchMedia("(prefers-color-scheme: dark)");
		const onChange = () => {
			setIsDark(getIsDark("auto"));
			applyThemeMode("auto");
		};

		media.addEventListener("change", onChange);
		return () => {
			media.removeEventListener("change", onChange);
		};
	}, [mode]);

	function toggleMode() {
		const nextMode: ThemeMode =
			mode === "light" ? "dark" : mode === "dark" ? "auto" : "light";
		setMode(nextMode);
		setIsDark(getIsDark(nextMode));
		applyThemeMode(nextMode);
		window.localStorage.setItem("theme", nextMode);
	}

	const label =
		mode === "auto"
			? "Theme mode: auto (system). Click to switch to light mode."
			: `Theme mode: ${mode}. Click to switch mode.`;

	return (
		<button
			type="button"
			onClick={toggleMode}
			aria-label={label}
			title={label}
			className="group inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-none border border-border transition-colors dark:bg-stone-900 bg-yellow-300 hover:bg-yellow-400 dark:hover:bg-white"
		>
			{isDark ? (
				<Moon className="size-5 transition-colors group-hover:text-black" />
			) : (
				<Sun className="size-5" />
			)}
		</button>
	);
}
