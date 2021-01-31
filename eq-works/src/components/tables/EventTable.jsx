import React, { useState } from 'react'
import Table from 'react-bootstrap/Table'

import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Pagination from 'react-bootstrap/Pagination'

export default function EventTable(props) {
    const [date, onChangeDate] = useState(props.min);
    const dateSelector = (val) => {
        onChangeDate(val);
        console.log(val)
        props.repopulateRecall()
    }
    return (
        <div className="chart-wrapper">
            <Row>
                <Col>
                    <input type="date"
                        onChange={(e) => dateSelector(e.target.value)}
                        value={date}
                        min={props.min}
                        max={props.max} />
                </Col>
                <Col>
                    <Pagination>
                        <Pagination.Prev />
                        <Pagination.Item>{1}</Pagination.Item>
                        <Pagination.Ellipsis />
                        <Pagination.Item>{20}</Pagination.Item>
                        <Pagination.Next />
                    </Pagination>
                </Col>
            </Row>

            <Table striped bordered hover responsive width={"100%"}>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Events</th>
                        {props.hourly ? <th>Hour</th> : null}
                        <th>Date</th>
                    </tr>
                </thead>
                <tbody>
                    {props.data ? props.data.map((x, index) => <tr className={x.poi_id === date ? "with-data" : ""}>
                        <td>{index + 1}</td>
                        <td>{x.name}</td>
                        <td>{x.events}</td>
                        {props.hourly ? <td>{x.hour}</td> : null}
                        <td>{x.date}</td>
                    </tr>) : null}
                </tbody>
            </Table>
        </div>
    )
}
