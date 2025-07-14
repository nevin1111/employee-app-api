import React, { useEffect, useState } from 'react'
import NavBar from './NavBar'
import axios from 'axios'

const ViewEmployee = () => {
    const [EmployeeData, changeEmployeeData] = useState(
        { "data": [] }
    )

    const fetchData = () => {
        axios.get("https://dummy.restapiexample.com/api/v1/employees").then(
            (response) => {
                changeEmployeeData(response.data)
            }
        ).catch()
    }

    useEffect(() => { fetchData() }, [])


    return (
        <div>
            <NavBar />
            <div className="container">
                <div className="row">
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                        <table class="table table-striped">
                            <thead>
                                <tr>
                                    <th scope="col">Employee ID</th>
                                    <th scope="col">Employee Name</th>
                                    <th scope="col">Employee Age</th>
                                    <th scope="col">Employee Salary</th>
                                    <th scope="col">Profile Pic</th>
                                </tr>
                            </thead>
                            <tbody>
                                {EmployeeData.data.map((value, index) => {
                                    return (
                                        <tr>
                                            <td>{value.id}</td>
                                            <td>{value.employee_name}</td>
                                            <td>{value.employee_age}</td>
                                            <td>{value.employee_salary}</td>
                                            <td>{value.profile_image}</td>
                                        </tr>
                                    )
                                })}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ViewEmployee