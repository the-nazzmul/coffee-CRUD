import { useLoaderData } from "react-router-dom"
import CoffeeCard from "./Components/CoffeeCard"
import { useState } from "react";


function App() {

  const loadedCoffees = useLoaderData()
  const [coffees, setCoffees] = useState(loadedCoffees)


  return (
    <div className="container mx-auto">
      <h1 className="text-4xl font-bold text-center my-8">Hoot Hoot Coffee: {coffees.length}</h1>
      <div className="grid grid-cols-2 gap-4">
        {
          coffees.map(coffee => <CoffeeCard key={coffee._id} coffee={coffee} coffees={coffees} setCoffees={setCoffees}></CoffeeCard>)
        }
      </div>
    </div>
  )
}

export default App
