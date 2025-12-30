export async function generateRecipe(ingredients: string[]) {
	const res = await fetch("http://localhost:8000/generate-recipe", {
		method: "POST",
		headers: {
			"Content-Type": "application/json",
		},
		body: JSON.stringify({ ingredients }),
	});

	if (!res.ok) throw new Error("Failed to fetch recipe");

	return res.json();
}
