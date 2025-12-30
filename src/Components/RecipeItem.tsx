import type { JSX, ReactNode } from "react";
import style from './styles/RecipeItem.module.css'
type RecipeItemProp = {
    children: ReactNode
}

export default function RecipeItem({ children }: RecipeItemProp): JSX.Element {
	return <ul className={style.list}>{children}</ul>;
}
