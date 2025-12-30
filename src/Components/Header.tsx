import type { JSX } from 'react'
import style from './styles/Header.module.css'
import { LuChefHat } from "react-icons/lu";

export default function Header():JSX.Element {
  return (
		<header className={style.header}>
      <LuChefHat className={style.icon}/>
			<h1>Chef Maina</h1>
		</header>
  );
}
