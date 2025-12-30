import type { JSX } from 'react'
import style from "./styles/Recipe.module.css";

export default function Recipe({handleGetRecipe}:{handleGetRecipe:()=>void}):JSX.Element {
  return (
    <section className={style.recipe}>
        <div className={style.card}>
            <p className={style.text}>Click on the button to get your own personalized Kenyan cuisine recipe.</p>
            <button onClick={()=>handleGetRecipe()} className={style.button}>Get Recipe</button>
        </div>
    </section>
  )
}
