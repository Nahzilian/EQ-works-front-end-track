import React,{ useState, useEffect }  from 'react'
import Table from 'react-bootstrap/Table'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Pagination from 'react-bootstrap/Pagination'

const pageLimit = 10;
function populatePages(data) {
    const length = data && data.length ? Math.floor(data.length / pageLimit) + 1 : 0;
    var res = []
    for (var i = 0; i < length; i++) {
        res.push(i)
    }
    return res
}

function chunkageData(data, pagesLength) {
    var res = [];
    for(var i = 0; i < pagesLength; i++){
        res.push(data.splice(0,pageLimit))
    }
    return res
}

function paginationData(pageIndex, active, recall, inc) {
    if(pageIndex.length > 0){
        if(pageIndex.length <= 6){
            return (<Pagination>
                <Pagination.Prev onClick={()=>inc(-1)}/>
                {pageIndex.length > 0 ? pageIndex.map((x,index) => <Pagination.Item key = {index} active={active === x?true:false} onClick={()=> recall(x)}>{x+1}</Pagination.Item>) : null}
                <Pagination.Next onClick={()=>inc(1)}/>
            </Pagination>)
        }
        return (<Pagination>
            <Pagination.Prev onClick={()=>inc(-1)}/>
            {active >0 && active < pageIndex.length-3? <Pagination.Ellipsis />:null}
            {pageIndex.length > 0 && active < pageIndex.length-3 ? pageIndex.slice(active,active+3).map((x,index) => <Pagination.Item key = {index} active={active === x?true:false} onClick={()=> recall(x)}>{x+1}</Pagination.Item>) : null}
            <Pagination.Ellipsis />
            {pageIndex.length > 0 ? pageIndex.slice(pageIndex.length - 3,pageIndex.length).map((x,index) => <Pagination.Item key = {index} active={active === x?true:false} onClick={()=> recall(x)}>{x+1}</Pagination.Item>) : null}
            <Pagination.Next onClick={()=>inc(1)}/>
        </Pagination>)
    }
    return (<Pagination>
        <Pagination.Prev />
        <Pagination.Item active>{1}</Pagination.Item>
        <Pagination.Next />
    </Pagination>)
}

export default function StatTable(props) {
    const [pageIndex, setPageIndex] = useState();
    const [data,setData] = useState();
    const [curPage, setCurPage] = useState(0);
    const [date, onChangeDate] = useState(props.min);    
    const repopulateData = (page) => {
        setCurPage(page)
    }
    const incrementPage = (val) => {
        if(curPage < pageIndex[pageIndex.length-1] && curPage > 0) setCurPage(prev => prev + val);
        else if(curPage === pageIndex[pageIndex.length-1] && val < 0) setCurPage(prev => prev + val);
        else if(curPage === 0 && val > 0) setCurPage(prev => prev + val);
    }
    useEffect(() => {
        var indexData = populatePages(props.data);
        setPageIndex(indexData);
        setData(chunkageData(props.data, indexData.length))
    },[props.data])

    const dateSelector = (val) => {
        onChangeDate(val);
        props.repopulateRecall(val)
    }
    return (
        <div className = "chart-wrapper">
            <Row>
                {props.title ? <Col>
                    <h3>{props.title}</h3>
                </Col> : null}
                <Col style={{textAlign:"right"}}>
                {props.hourly ? 
                    <input type="date"
                        onChange={(e) => dateSelector(e.target.value)}
                        value={date}
                        min={props.min}
                        max={props.max} />
                 : null}
            </Col>
            </Row>
            <Row className="justify-content-md-center">{pageIndex ? paginationData(pageIndex, curPage, repopulateData, incrementPage) : null}</Row>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Date</th>
                        {props.hourly ? <th>Hour</th> : null}
                        <th>Impressions</th>
                        <th>Clicks</th>
                        <th>Revenue</th>
                    </tr>
                </thead>
                <tbody>
                    {data ? data[curPage].map((x, index) => <tr key={index} className={x.poi_id === props.curPoi ? "with-data" : ""}>
                        <td>{index+1}</td>
                        <td>{x.name}</td>
                        <td>{x.date}</td>
                        {props.hourly ? <td>{x.hour}</td> : null}
                        <td>{x.impressions}</td>
                        <td>{x.clicks}</td>
                        <td>{x.revenue?parseFloat(x.revenue).toFixed(2):null}</td>
                    </tr>):null}
                </tbody>
            </Table>
        </div>
    )
}
