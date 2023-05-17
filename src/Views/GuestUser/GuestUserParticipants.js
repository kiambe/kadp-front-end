import React, { useState, useContext, useEffect } from "react";
import { Col, Container, Row } from "react-bootstrap";
import LocalStyle from "./GuestUsetParticipants.module.css";
import GlobalStyle from "../../Assets/CSS/global.module.css";
import {
  Box,
  IconButton,
  InputAdornment,
  TextField,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { FarmStackContext } from "../../Components/Contexts/FarmStackContext";
import UrlConstant from "../../Constants/UrlConstants";
import HTTPService from "../../Services/HTTPService";
import { GetErrorHandlingRoute } from "../../Utils/Common";
import CoStewardAndParticipantsCard from "../../Components/CoStewardAndParticipants/CostewardAndParticipants";
import {useHistory} from "react-router-dom"
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";


function GuestUserParticipants(props) {
  const { title, description, isCosteward, breadcrumbFromRoute } = props;
  const { callLoader, callToast } = useContext(FarmStackContext);
  const theme = useTheme();
  const mobile = useMediaQuery(theme.breakpoints.down("sm"));
  const tablet = useMediaQuery(theme.breakpoints.down("md"));
  const history = useHistory()

  const containerStyle = {
    marginLeft: mobile || tablet ? "30px" : "144px",
    marginRight: mobile || tablet ? "30px" : "144px",
  };
  const [coStewardOrParticipantsList, setCoStewardOrParticipantsList] =
    useState([]);
  const [loadMoreButton, setLoadMoreButton] = useState(false);
  const [loadMoreUrl, setLoadMoreUrl] = useState("");
  const [searcParticipantsName, setSearcParticipantsName] = useState();

  const getParticipants = () => {
    let url = UrlConstant.base_url + "microsite/participant/";
    let params = "";
    if (title) {
      params = { co_steward: "True" };
    }
    callLoader(true);
    HTTPService("GET", url, params, false, false)
      .then((response) => {
        callLoader(false);
        if (response?.data?.next == null) {
          setLoadMoreButton(false);
        } else {
          setLoadMoreButton(true);
          if (response?.data?.next) setLoadMoreUrl(response.data.next);
        }
        if (response?.data?.results)
          setCoStewardOrParticipantsList(response.data.results);
      })
      .catch( async(e) => {
        callLoader(false);
        // let error = GetErrorHandlingRoute(e);
        // console.log("Error obj", error);
        // callToast(error.message, "error", true);
        let error = await GetErrorHandlingRoute(e);
        console.log("Error obj", error);
        console.log(e);
        if(error.toast){
          callToast(error?.message || "Something went wrong", 
            error?.status === 200 ? "success" : "error",
            true);
          }
          if(error.path){
            history.push(error.path)
          }
        console.log(e);
      });
  };

  const getListOnClickOfLoadMore = () => {
    callLoader(true);
    HTTPService("GET", loadMoreUrl, "", false, false)
      .then((response) => {
        callLoader(false);
        if (response?.data?.next == null) {
          setLoadMoreButton(false);
        } else {
          setLoadMoreButton(true);
          if (response?.data?.next) setLoadMoreUrl(response.data.next);
        }
        let datalist = coStewardOrParticipantsList;
        // if (response?.data?.results) {
        let finalDataList = [...datalist, ...response.data.results];
        setCoStewardOrParticipantsList(finalDataList);
        // }
      })
      .catch( async(e) => {
        callLoader(false);
        // let error = GetErrorHandlingRoute(e);
        console.log("Error obj", error);
        // callToast(error.message, "error", true);
        console.log(e);
        let error = await GetErrorHandlingRoute(e);
        console.log("Error obj", error);
        console.log(e);
        if(error.toast){
          callToast(error?.message || "Something went wrong", 
            error?.status === 200 ? "success" : "error",
            true);
          }
          if(error.path){
            history.push(error.path)
          }
      });
  };
  const handleSearch = (name, isLoadMore) => {
    setSearcParticipantsName(name);
    let searchTimeout;
    const DEBOUNCE_DELAY = 500;
    clearTimeout(searchTimeout);

    searchTimeout = setTimeout(() => {
      // setSearcParticipantsName(name);
      if (name?.length > 2 || name?.length === 0) {
        let data = {};
        data["name"] = name.trim();

        // setFilterState(data);
        let guestUsetFilterUrl =
          UrlConstant.base_url + UrlConstant.microsite_search_participants;
        HTTPService("GET", guestUsetFilterUrl, data, false, false)
          .then((response) => {
            if (response.data.next == null) {
              // setFilterState({});
              setLoadMoreButton(false);
            } else {
              setLoadMoreUrl(response.data.next);
              setLoadMoreButton(true);
            }
            let finalDataList = [];
            if (isLoadMore) {
              finalDataList = [
                ...coStewardOrParticipantsList,
                ...response.data.results,
              ];
            } else {
              finalDataList = [...response.data.results];
            }
            console.log(finalDataList, "fdlist");
            setCoStewardOrParticipantsList(finalDataList);
          })
          .catch( async(e) => {
            console.log(e);
            let error = await GetErrorHandlingRoute(e);
            console.log("Error obj", error);
            console.log(e);
            if(error.toast){
              callToast(error?.message || "Something went wrong", 
                error?.status === 200 ? "success" : "error",
                true);
              }
              if(error.path){
                history.push(error.path)
              }
          });
      }
    }, DEBOUNCE_DELAY);
  };

  useEffect(() => {
    getParticipants();
  }, []);

  console.log("something", coStewardOrParticipantsList);

  return (
    <Box style={containerStyle}>
       <Row>
        <Col>
          <div className="text-left mt-50">
            <span
              className="add_light_text cursor-pointer breadcrumbItem"
              onClick={() => {
              history.push("/home")
              } }
            >
               {breadcrumbFromRoute?? ""}
            </span>
            <span className="add_light_text ml-16">
             {breadcrumbFromRoute? 
              <ArrowForwardIosIcon sx={{ fontSize: "14px", fill: "#00ab55" }} />
            : ""}
            </span>
            <span className="add_light_text ml-16 fw600">
              {isCosteward ? "Co-stewards" : "Participants"}
            
            </span>
          </div>
        </Col>
      </Row>
      <Row className={LocalStyle.titleContainer}>
        <div className={mobile ? LocalStyle.titleSm : LocalStyle.title}>
          {title ?? "Participants Network"}
        </div>
        <div className="d-flex justify-content-center">
          <div
            className={
              mobile
                ? LocalStyle.descriptionSm
                : tablet
                ? LocalStyle.descriptionMd
                : LocalStyle.description
            }
            // style={{ width: description && "74%" }}
          >
            <b style={{ fontWeight: "bold" }}></b>
            {description ??
              "Meet the Change Makers: Our Community Members Who Are Transforming Agriculture."}
            <b style={{ fontWeight: "bold" }}></b>
          </div>
        </div>
      </Row>
      {/* <Row className={LocalStyle.title2}>
        <Typography className={`${GlobalStyle.size24} ${GlobalStyle.bold600}`}>
          Our terms are
        </Typography>
      </Row> */}

      <TextField
      id="search-participants-in-guest-user-id"
        sx={{
          "& .MuiOutlinedInput-root": {
            "& fieldset": {
              borderColor: "#919EAB",
              borderRadius: "30px",
            },
            "&:hover fieldset": {
              borderColor: "#919EAB",
            },
            "&.Mui-focused fieldset": {
              borderColor: "#919EAB",
            },
          },
        }}
        className={
          mobile
            ? LocalStyle.inputFieldSm
            : tablet
            ? LocalStyle.inputFieldMd
            : LocalStyle.inputField
        }
        placeholder={title ? "Search co-steward.." : "Search participant.."}
        value={searcParticipantsName}
        onChange={(e) => handleSearch(e.target.value.trimStart())}
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <IconButton>
                <img
                  src={require("../../Assets/Img/input_search.svg")}
                  alt="search"
                />
              </IconButton>
            </InputAdornment>
          ),
        }}
      />
      <Box className={LocalStyle.participantsContainer}>
        <CoStewardAndParticipantsCard
          guestUser={true}
          isCosteward={isCosteward ? true : false}
          title={title ?? "Our Participants are"}
          viewType={"grid"}
          // setViewType={setViewType}
          coStewardOrParticipantsList={coStewardOrParticipantsList}
          loadMoreButton={loadMoreButton}
          handleLoadMoreButton={getListOnClickOfLoadMore}
        />
      </Box>
    </Box>
  );
}

export default GuestUserParticipants;
