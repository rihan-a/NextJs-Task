import categoriesData from "./Categories.json";


export async function GET(Request) {
    return new Response(JSON.stringify(categoriesData.data.categories));
}
