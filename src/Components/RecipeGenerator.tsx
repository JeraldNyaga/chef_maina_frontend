import { useState, useEffect, useCallback, useRef } from "react";
import { generateRecipe } from "../../api";
import ReactMarkdown from "react-markdown";
import styles from "./styles/ReactGenerator.module.css";
import styleSpinner from "./styles/Spinner.module.css";
import Spinner from "./Spinner";

type RecipeGeneratorProp = {
	ingredients: string[];
	prepareRecipe: boolean;
	onRecipeReady: ()=>void
};


export default function RecipeGenerator({
	ingredients,
	prepareRecipe,
	onRecipeReady,
}: RecipeGeneratorProp) {
	const [recipe, setRecipe] = useState("");
	const [loading, setLoading] = useState(false);
	const [error, setError] = useState("");
	const recipeRef = useRef<HTMLDivElement | null>(null)

	const handleGenerate = useCallback(async () => {
		setLoading(true);
		setError("");
		try {
			const data = await generateRecipe(ingredients);
			setRecipe(data.recipe);
			onRecipeReady()
		} catch (err) {
			setError("Failed to generate recipe. Please try again.");
			console.error(err);
		} finally {
			setLoading(false);
		}
	}, [ingredients, onRecipeReady]);

	useEffect(() => {
		if (prepareRecipe && ingredients.length > 0) {
			handleGenerate();
		}
	}, [prepareRecipe, ingredients.length, handleGenerate]);

	useEffect(()=>{
		if(recipe && recipeRef.current){
			recipeRef.current.scrollIntoView({behavior: "smooth"})
		}
	},[recipe])

	return (
		<div className={styles.markdownContainer}>
			{loading && (
				<div className={styleSpinner.spinnerWrapper}>
					<Spinner />
				</div>
			)}

			{error && <p className={styles.error}style={{ color: "red" }}>{error}</p>}

			{recipe && (
				<div ref={recipeRef} className={styles.container}>
					<div className={styles.markdown}>
						<ReactMarkdown>{recipe}</ReactMarkdown>
					</div>
				</div>
			)}
		</div>
	);
}
