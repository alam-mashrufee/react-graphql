import React from 'react'
import MainHero from "../components/MainHero/MainHero"
import CategoryDisplay from "../components/CategoryDisplay/CategoryDisplay"
import CardDisplay from "../components/CardDisplay/CardDisplay"
import {useQuery, useMutation, gql} from "@apollo/client"

const ANIMALS_QUERY = gql`
{
    animals {
        image
        id
        price
        slug
        rating
        title
    }
}`;

const ADD_ANIMAL_MUTATION = gql`
mutation (
    $image: String!,
    $category: String!,
    $title: String!,
    $stock: String!,
    $price: String!,
    $description: [String!]!,
    $rating: String!,
    $slug: String!,
) {
  addAnimal(
    image: $image,
    category: $category,
    title: $title,
    stock: $stock,
    price: $price,
    description: $description,
    rating: $rating,
    slug: $slug,
    ) {
       id
    }
}`;

function LandingPage() {

    const {loading, error, data} = useQuery(ANIMALS_QUERY);
    const [addAnimal] = useMutation(ADD_ANIMAL_MUTATION);

    if(loading) return <div>loading...</div>
    if(error) return <div>some error happened</div>

    return (
        <div>
            <MainHero />
            <CategoryDisplay />
            <CardDisplay animals={data.animals}/>
            <button onClick={() => {
                addAnimal({
                    variables: {
                        image: "ostrich",
                        category: "1",
                        title: "this is really cool ostrich",
                        stock: 13,
                        price: "32,322",
                        description: ["description of this ostrich"],
                        rating: 3.5,
                        slug: "ostrich",
                    }
                })
            }}>Add an new Animal</button>
        </div>
    )
}

export default LandingPage
