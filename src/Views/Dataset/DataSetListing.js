import React from 'react'
import DataSetCard from '../../Components/Datasets/DataSetCard'
import { Col, Row } from 'react-bootstrap'
import Button from "@mui/material/Button";

export default function DataSetListing(props) {
  return (
    <div>
        <Row style={{"margin-left":"-44px","width":"150%"}}>
            <DataSetCard
                margingtop={'supportcard supportcardmargintop20px'}
            />
            <DataSetCard
                margingtop={'supportcard supportcardmargintop20px'}
            />
            <DataSetCard
                margingtop={'supportcard supportcardmargintop20px'}
            />
            <DataSetCard
                margingtop={'supportcard supportcardmargintop20px'}
            />
            <DataSetCard
                margingtop={'supportcard supportcardmargintop20px'}
            />
            <DataSetCard
                margingtop={'supportcard supportcardmargintop20px'}
            />
            <DataSetCard
                margingtop={'supportcard supportcardmargintop20px'}
            />
            <DataSetCard
                margingtop={'supportcard supportcardmargintop20px'}
            />
            <DataSetCard
                margingtop={'supportcard supportcardmargintop20px'}
            />
            <DataSetCard
                margingtop={'supportcard supportcardmargintop20px'}
            />
            <Row style={{"margin-left":"40px","margin-top":"20px"}}>
                <Col xs={12} sm={12} md={6} lg={3}></Col>
                {props.isShowLoadMoreButton ? (
                    <Col xs={12} sm={12} md={6} lg={6}>
                        <Button
                            onClick={() => props.getDatasetList()}
                            variant="outlined"
                            className="cancelbtn">
                            Load More
                        </Button>
                    </Col>
                ) : (
                    <></>
                )}
            </Row>
            
        </Row>
    </div>
  )
}
