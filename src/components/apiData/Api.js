import React, { useEffect, useState } from 'react';
import axios from "axios"
const Api = () => {
    const [api, setApi] = useState([])

    const getApi = async () => {
        try {
            // const res = await fetch("https://hub.dummyapis.com/employee?noofRecords=10&idStarts=1001")
            // const actualData = await res.json()
            const res = await axios.get("https://hub.dummyapis.com/employee?noofRecords=10&idStarts=1001")
            setApi(res.data)
        } catch (error) {
            console.log(error)
        }
    }
    useEffect(() => {
        getApi()
    }, [])

    const [pagination, setPagination] = useState({
        start: 0,
        move: 5
    })

    const next = () => {
        setPagination({ start: pagination.start + 5, move: pagination.move + 5 })
    }
    const previous = () => {
        setPagination({ start: pagination.start - 5, move: pagination.move - 5 })
    }
    return (
        <div>

            <div className='container-fluid mt-5'>
                <div className='main-heading'>
                    <div className='mb-5 text-center'> <span className='font-weight-bold'>employee data</span></div>
                </div>
            </div>

            <div className='tablr-responsive'>
                <table className='table table-hover'>
                    <thead className='thead-dark'>
                        <tr>
                            <th>Id</th>
                            <th>ImageUrl</th>
                            <th>firstName</th>
                            <th>lastName</th>
                            <th>Email</th>
                            <th>salary</th>
                        </tr>
                    </thead>

                    {api.slice(pagination.start, pagination.move).map((elem, index) => {
                        const { id, imageUrl, firstName, lastName, email, salary } = elem
                        return (
                            <tbody key={index}>
                                <tr>
                                    <td>{id}</td>
                                    <td>{imageUrl}</td>
                                    <td>{firstName}</td>
                                    <td>{lastName}</td>
                                    <td>{email}</td>
                                    <td>{salary}</td>
                                </tr>
                            </tbody>
                        )
                    })}
                </table>
            </div>

            <div class="container mt-3">
                <ul class="pagination">
                    <li class="page-item" onClick={previous}><a class="page-link" href="#">Previous</a></li>
                    <li class="page-item" ><a class="page-link" href="#">1</a></li>
                    <li class="page-item"><a class="page-link" href="#">2</a></li>
                    <li class="page-item"><a class="page-link" href="#">3</a></li>
                    <li class="page-item" onClick={next}><a class="page-link" href="#">Next</a></li>
                </ul>
            </div>
        </div>
    )
}

export default Api