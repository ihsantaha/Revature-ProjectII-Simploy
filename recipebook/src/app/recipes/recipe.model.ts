import { Ingredient } from "../shared/ingredient.model";

export class Recipe {
    private name: string;
    private description: string;
    private imagePath: string;
    private ingredients: Ingredient[];

    constructor(name: string, description: string, imagePath: string, ingredients: Ingredient[]) {
        this.name = name;
        this.description = description;
        this.imagePath = imagePath;
        this.ingredients = ingredients;
    }

    getIngredients() {
        return this.ingredients;
    }

    getName() {
        return this.name;
    }
}