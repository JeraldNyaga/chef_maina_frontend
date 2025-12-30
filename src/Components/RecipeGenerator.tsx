import { useState, useEffect } from "react";
import { generateRecipe } from "../../api";
import ReactMarkdown from "react-markdown";
import styles from "./styles/ReactGenerator.module.css";
import styleSpinner from "./styles/Spinner.module.css";
import Spinner from "./Spinner";

type RecipeGeneratorProp = {
	ingredients: string[];
	prepareRecipe: boolean;
};

export default function RecipeGenerator({
	ingredients,
	prepareRecipe,
}: RecipeGeneratorProp) {
	const [recipe, setRecipe] = useState("");
	const [loading, setLoading] = useState(false);
	const [error, setError] = useState("");

	const handleGenerate = async () => {
		setLoading(true);
		setError("");
		try {
			const data = await generateRecipe(ingredients);
			setRecipe(data.recipe);
			console.log(data)
		} catch (err) {
			setError("Failed to generate recipe. Please try again.");
			console.error(err);
		} finally {
			setLoading(false);
		}
	};
	useEffect(() => {
		if (prepareRecipe && ingredients.length > 0) {
			handleGenerate();
		}
	}, [prepareRecipe]);

	return (
		<div>
			{loading && (
				<div className={styleSpinner.spinnerWrapper}>
					<Spinner />
				</div>
			)}

			{error && <p style={{ color: "red" }}>{error}</p>}

			{recipe && (
				<div className={styles.container}>
					<div className={styles.markdown}>
						<ReactMarkdown>{recipe}</ReactMarkdown>
					</div>
				</div>
			)}
		</div>
	);
}
