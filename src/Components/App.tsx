import { useState, type JSX } from "react";
import style from "./styles/RecipeItem.module.css";
import Header from "./Header";
import RecipeItem from "./RecipeItem";
import Form from "./Form";
import buttonStyle from "./styles/App.module.css";
import Footer from "./Footer";
import Recipe from "./Recipe";
import About from "./About";
import RecipeGenerator from "./RecipeGenerator";

export default function App(): JSX.Element {
	const [ingridients, setIngridients] = useState<string[]>([]);
	const [removingItem, setRemovingItem] = useState<string | null>(null);
	const [getRecipe, setGetRecipe] = useState<boolean>(false);
	const [recipeReady, setRecipeReady] = useState<boolean>(false)

	function handleGetRecipe() {
		setGetRecipe(true);
	}

	function handleNewRecipe() {
		setIngridients([]);
		setGetRecipe(false);
		setRecipeReady(false)
	}

	function handleSubmit(formData: FormData): void {
		const ingridient = formData.get("ingridient");

		if (typeof ingridient === "string") {
			setIngridients((prev) => [...prev, ingridient]);
		}
	}

	function handleDelete(ingred: string): void {
		setRemovingItem(ingred);
		setTimeout(() => {
			setIngridients((prev) =>
				prev.filter((item: string) => item !== ingred)
			);
			setRemovingItem(null);
		}, 600);
	}
	return (
		<>
			<Header />
			<main>
				<About />
				<Form handleSubmit={handleSubmit} />
				<RecipeItem>
					{ingridients.map((item) => (
						<li
							key={item}
							className={`${style.item} ${
								removingItem === item ? style.removing : ""
							}`}
						>
							{item}
							<button onClick={() => handleDelete(item)}>
								✕
							</button>
						</li>
					))}
				</RecipeItem>
				{ingridients.length > 3 && (
					<Recipe handleGetRecipe={handleGetRecipe} />
				)}
				{getRecipe && (
					<RecipeGenerator
						ingredients={ingridients}
						prepareRecipe={getRecipe}
						onRecipeReady={()=>setRecipeReady(true)}
					/>
				)}
				{recipeReady && (
					<button
						className={buttonStyle.close_button}
						onClick={handleNewRecipe}
					>
						New Recipe
					</button>
				)}
			</main>
			<Footer />
		</>
	);
}
