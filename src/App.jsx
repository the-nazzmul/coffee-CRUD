import { useLoaderData } from "react-router-dom"
import CoffeeCard from "./Components/CoffeeCard"


function App() {

  const coffees = useLoaderData()
  console.log(coffees);
  return (
    <div className="container mx-auto">
      <h1 className="text-4xl font-bold text-center my-8">Hoot Hoot Coffee: {coffees.length}</h1>
      <div className="grid grid-cols-2 gap-4">
        {
          coffees.map(coffee => <CoffeeCard key={coffee._id} coffee={coffee} ></CoffeeCard>)
        }
      </div>
    </div>
  )
}

export default App
