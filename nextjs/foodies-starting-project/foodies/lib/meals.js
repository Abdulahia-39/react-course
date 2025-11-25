import sql from "better-sqlite3";
import slugify from "slugify";
import xss from "xss";
import fs from "node:fs";

const db = sql("meals.db");

export async function getMeals(){
    await new Promise((resolve) => setTimeout(resolve, 5000));
    // throw new Error("failed to load meal data");
    return db.prepare("SELECT * FROM meals").all();
}

export function getMeal(slug){
    return db.prepare("SELECT * FROM meals WHERE slug = ?").get(slug);
}

export default async function saveMeal(meal){
    meal.slug = slugify(meal.title, {lower: true});
    meal.instructions = xss(meal.instructions);

    const extension = meal.image.name.split('.').pop();
    const fileName = `${meal.slug}.${extension}`;

    //this line creates the file in the images folder
    const stream = fs.createWriteStream(`public/images/${fileName}`);
    //this line takes the image object and converts it to raw array of binary data
    const bufferedImage = await meal.image.arrayBuffer();

    //finally this line writes the raw binary data of the image in to the file
    stream.write(Buffer.from(bufferedImage), (error) => {
        if(error){
            throw new Error("Saving Image failed");
        }
    });

    meal.image = `/images/${fileName}`;

    db.prepare(`
            INSERT INTO meals 
                (title, summary, instructions, creator, creator_email, image, slug)
            VALUES (
                @title,
                @summary,
                @instructions,
                @name,
                @email,
                @image,
                @slug
            )
    `).run(meal);
}