import { Injectable } from '@angular/core';

import { Recipe } from "./recipe.model";
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';

@Injectable()
export class RecipeService {

    private recipes: Recipe[] = [
        new Recipe(
            'Potatoe Soup', 
            'A blend of creme fresh, potatoes and herbs',
            'http://images.media-allrecipes.com/userphotos/250x250/962656.jpg',
            [
                new Ingredient('Russet Potatoes', 5),
                new Ingredient('Heavy Cream', 1),
                new Ingredient('Butter', 0.5),
                new Ingredient('Rosemary', 1),
                new Ingredient('Asiago Cheese', 2)
            ]),
        new Recipe(
            'Cheese Burger',
            'A delicous juciey burger with the secret ingredient inside',
            'https://upload.wikimedia.org/wikipedia/commons/b/be/Burger_King_Angus_Bacon_%26_Cheese_Steak_Burger.jpg',
            [
                new Ingredient('Angus Beef Patty', 1),
                new Ingredient('Buns', 2),
                new Ingredient('Cheddar Cheese', 2),
                new Ingredient('Iceberg Lettuce', 1),
                new Ingredient('Beefsteak Tomatoe', 1),
                new Ingredient('Onion', 1),
                new Ingredient('Mustard', 1)
            ]
        )    
    ];

    constructor(private shoppingListService: ShoppingListService) {}

    getRecipes() {
        return this.recipes.slice();
    }

    getRecipe(id: number) {
        return this.recipes[id];
    }

    addIngredientsToShoppingList(ingredients: Ingredient[]) {
        this.shoppingListService.addIngredients(ingredients);
    }
}