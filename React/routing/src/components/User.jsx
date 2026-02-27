import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useParams } from "react-router-dom";

const User = () => {

    const [user, setUser] = useState(null)
    const { id } = useParams();

    const fetchUser = async () => {
        try {
            const response = await axios.get(
                `https://dummyjson.com/users/${id}`
            );

            setUser(response.data);

        } catch (err) {
            console.log(err)
        }
    };

    useEffect(() => {
        fetchUser();
    }, [id])
 
    if (!user) {
        return <div className="text-center mt-5">Loading...</div>;
    }


    return (
        <div className="container mt-5">
            <div className="card shadow-lg border-0 rounded-4">
 
                <div className="card-header bg-primary text-white text-center rounded-top-4">
                    <h2 className="mb-0">User Profile</h2>
                </div>

                <div className="card-body">

                    <div className="row">
 
                        <div className="col-md-4 text-center">
                            <img
                                src={user.image}
                                alt="user"
                                className="img-fluid rounded-circle mb-3 border border-3 border-primary"
                                style={{ width: "150px", height: "150px", objectFit: "cover" }}
                            />

                            <h4>{user.firstName} {user.lastName}</h4>
                            <p className="text-muted">@{user.username}</p>

                            <span className="badge bg-success">{user.role}</span>
                        </div>

 
                        <div className="col-md-8">

                            <h5 className="mb-3">Personal Information</h5>

                            <table className="table table-striped">

                                <tbody>

                                    <tr>
                                        <th>Email</th>
                                        <td>{user.email}</td>
                                    </tr>

                                    <tr>
                                        <th>Phone</th>
                                        <td>{user.phone}</td>
                                    </tr>

                                    <tr>
                                        <th>Age</th>
                                        <td>{user.age}</td>
                                    </tr>

                                    <tr>
                                        <th>Gender</th>
                                        <td>{user.gender}</td>
                                    </tr>

                                    <tr>
                                        <th>Birth Date</th>
                                        <td>{user.birthDate}</td>
                                    </tr>

                                    <tr>
                                        <th>Blood Group</th>
                                        <td>{user.bloodGroup}</td>
                                    </tr>

                                    <tr>
                                        <th>Height</th>
                                        <td>{user.height} cm</td>
                                    </tr>

                                    <tr>
                                        <th>Weight</th>
                                        <td>{user.weight} kg</td>
                                    </tr>

                                </tbody>

                            </table>

 
                            <h5 className="mt-4">Address</h5>

                            <p className="mb-1">
                                {user.address.address}
                            </p>

                            <p className="mb-1">
                                {user.address.city}, {user.address.state}
                            </p>

                            <p>
                                {user.address.country} - {user.address.postalCode}
                            </p>

 
                            <h5 className="mt-4">Company</h5>

                            <p className="mb-1">
                                <strong>{user.company.name}</strong>
                            </p>

                            <p className="mb-1">
                                {user.company.title}
                            </p>

                            <p>
                                {user.company.department}
                            </p>

                        </div>

                    </div>

                </div>

            </div>
        </div>
    )
}

export default User