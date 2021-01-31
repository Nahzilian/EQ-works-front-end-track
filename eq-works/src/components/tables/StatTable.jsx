import React from 'react'
import Table from 'react-bootstrap/Table'

export default function StatTable(props) {
    return (
        <div className = "chart-wrapper">
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Date</th>
                        <th>Impressions</th>
                        <th>Clicks</th>
                        <th>Revenue</th>
                    </tr>
                </thead>
                <tbody>
                    {props.data?props.data.map((x,index) => <tr>
                        <td>{index+1}</td>
                        <td>{x.name}</td>
                        <td>{x.date}</td>
                        <td>{x.impressions}</td>
                        <td>{x.clicks}</td>
                        <td>{x.revenue?parseFloat(x.revenue).toFixed(2):null}</td>
                    </tr>):null}
                </tbody>
            </Table>
        </div>
    )
}
