import type { JSX } from "react";
import style from "./styles/Footer.module.css";

export default function Footer(): JSX.Element {
	return (
		<footer className={style.footer}>
			© {new Date().getFullYear()} Chef Maina
		</footer>
	);
}
