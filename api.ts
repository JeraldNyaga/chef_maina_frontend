export async function generateRecipe(ingredients: string[]) {
	const API_URL = import.meta.env.VITE_API_URL;
	const res = await fetch(`${API_URL}/generate-recipe`, {
		method: "POST",
		headers: {
			"Content-Type": "application/json",
		},
		body: JSON.stringify({ ingredients }),
	});

	if (!res.ok) throw new Error("Failed to fetch recipe");

	return res.json();
}
