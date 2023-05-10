import { Link } from 'react-router-dom';
import Swal from 'sweetalert2'


const CoffeeCard = ({ coffee }) => {
    const { _id, name, quantity, supplier, taste, category, details, photo } = coffee

    const handleDelete = _id => {
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`http://localhost:4000/coffee/${_id}`, {
                    method: 'DELETE'
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data);
                        if (data.deletedCount > 0) {
                            Swal.fire(
                                'Deleted!',
                                'Your Coffee has been deleted.',
                                'success'
                            )
                        }
                    })
            }
        })
    }

    return (

        <div>
            <div className="card card-side bg-base-100 shadow-xl">
                <figure><img src={photo} alt="Movie" /></figure>
                <div className="flex w-full px-4 justify-between items-center">
                    <div>
                        <h2 className="card-title">{name}</h2>
                        <p>Taste: {taste}</p>
                        <p>Quantity: {quantity}</p>
                    </div>
                    <div className="card-actions">
                        <div className="flex flex-col space-y-2">
                            <button className="btn rounded-full p-2">View</button>
                            <Link to={`update-coffee/${_id}`}>
                                <button className="btn rounded-full p-2">Edit</button>
                            </Link>
                            <button onClick={() => handleDelete(_id)} className="btn rounded-full p-2">X</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CoffeeCard;