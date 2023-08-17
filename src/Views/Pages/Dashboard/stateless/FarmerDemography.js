import React from "react";
import { Box, Paper, Typography } from "@mui/material";
import styles from "./FarmerDemography.module.css"; // Import your module CSS file
import { Col, Row } from "react-bootstrap";

const FarmerDemographics = (props) => {
  const { records, mobileNumber, counties, subCounties, constituencies } =
    props;

  return (
    <>
      <Typography
        className={styles.title}
        variant="h4"
        sx={{ textAlign: "left" }}
      >
        Farmer Demographics
      </Typography>
      <Row className={styles.container}>
        <Col className={styles.mainCol} sm={12} md={12} lg={12} xl={12}>
          <Paper
            elevation={3}
            className={`${styles.totalRecords} ${styles.demographyCard}`}
          >
            <Typography variant="h6">Total no.of records</Typography>
            <Typography variant="body1" className={`${styles.valueClass}`}>
              {records}
            </Typography>
          </Paper>
          <Paper
            elevation={3}
            className={`${styles.mobileNumber} ${styles.demographyCard}`}
          >
            <Typography variant="h6">Mobile Number</Typography>
            <Typography variant="body1" className={`${styles.valueClass} `}>
              {mobileNumber}
            </Typography>
          </Paper>
          <Paper
            elevation={3}
            className={`${styles.counties} ${styles.demographyCard}`}
          >
            <Typography variant="h6">No.of counties</Typography>
            <Typography variant="body1" className={`${styles.valueClass}`}>
              {counties}
            </Typography>
          </Paper>
          <Paper
            elevation={3}
            className={`${styles.subCounties} ${styles.demographyCard}`}
          >
            <Typography variant="h6">Sub-counties</Typography>
            <Typography variant="body1" className={`${styles.valueClass}`}>
              {subCounties}
            </Typography>
          </Paper>
          <Paper
            elevation={3}
            className={`${styles.counties} ${styles.demographyCard}`}
          >
            <Typography variant="h6">Constituencies</Typography>
            <Typography variant="body1" className={`${styles.valueClass}`}>
              {constituencies}
            </Typography>
          </Paper>
        </Col>
      </Row>
    </>
  );
};

export default FarmerDemographics;
