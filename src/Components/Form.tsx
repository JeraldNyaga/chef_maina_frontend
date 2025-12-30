import type { JSX } from "react";
import style from "./styles/Form.module.css";

type HandleSubmitProp = {
	handleSubmit: (formData: FormData) => void;
};

export default function Form({ handleSubmit }: HandleSubmitProp): JSX.Element {
	return (
		<section className={style.form}>
			<form action={handleSubmit} className={style.formInner}>
				<input type="text" name="ingridient" placeholder="Enter an ingredient..." required/>
				<button type="submit">Add an ingredient</button>
			</form>
		</section>
	);
}
