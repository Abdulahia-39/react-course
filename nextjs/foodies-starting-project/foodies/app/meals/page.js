import Link from "next/link";
import classes from "./page.module.css";
import MealsGrid from "@/components/meals/mealsGrid";
import { getMeals } from "@/lib/meals";
import { Suspense } from "react";

export const metadata = {
    title: 'All meals',
    description: 'Delicious meals, shared by a food loving community',
}

async function Meals(){
    const meals = await getMeals();
    return <MealsGrid meals={meals}/>
}

export default function meals() {
    return (
        <>
            <header className={classes.header}>
                <h1>Delicous meals created <span className={classes.highlight}>by you</span></h1>
                <p>
                    Choose you favorite recipe and cook your self. It is easy and fun
                </p>
                <p className={classes.cta}>
                    <Link href={"meals/share"}>
                        Share your favorite recipe
                    </Link>
                </p>
            </header>
            <main className={classes.main}>
                <Suspense fallback={<p className={classes.loading}>Loading Meals</p>}>
                    <Meals/>
                </Suspense>                
            </main>
        </>
    )
}