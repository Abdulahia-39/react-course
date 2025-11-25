'use server';

import saveMeal from "./meals";
import { redirect } from "next/navigation";

function isEmpty(text){
    return !text || text.trim() == '';
}

export async function getData(prevState, formData){
    const mealData = {
        name: formData.get('name'),
        email: formData.get('email'),
        title: formData.get('title'),
        summary: formData.get('summary'),
        instructions: formData.get('instructions'),
        image: formData.get('image')
    }

    if(
        isEmpty(mealData.name) ||
        isEmpty(mealData.email) ||
        isEmpty(mealData.title) ||
        isEmpty(mealData.summary) ||
        isEmpty(mealData.instructions) ||
        isEmpty(mealData.image) ||
        !mealData.email.contains('@')
    ) {
        return {
            message: "Invalid Input",
        }
    }

    // console.log(mealData);
    await saveMeal(mealData);
    redirect('/meals');
}