import React from "react";
import "./SearchPage.css";
import { useStateValue } from "../StateProvider";
import useGoogleSearch from "../useGoogleSearch";
import response from "../response";
import { Link } from "react-router-dom";
import Search from "../components/Search";
import SearchIcon from "@mui/icons-material/Search";
import DescriptionIcon from "@mui/icons-material/Description";
import ImageIcon from "@mui/icons-material/Image";
import LocalOfferIcon from "@mui/icons-material/LocalOffer";
import RoomIcon from "@mui/icons-material/Room";
import MoreVertIcon from "@mui/icons-material/MoreVert";

function SearchPage() {
  const [{ term }, dispatch] = useStateValue();

  //  LIVE API CALL
  // const { data } = useGoogleSearch(term);

  const data = response;

  // https://developers.google.com/custom-search/v1/using_rest
  // https://cse.google.com/cse/create/new

  console.log(data);
  return (
    <div className="searchPage">
      <div className="searchPage__header">
        <Link to="/">
          <img
            className="searchPage__logo"
            src="https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png"
            alt=""
          />
        </Link>
        <div className="searchPage__headerBody">
          <Search hideButtons />
          <div className="searchPage__options">
            <div className="searchPage__optionsLeft">
              <div className="searchPage__option">
                <Link to="/all">
                  <SearchIcon />
                  All
                </Link>
              </div>
              <div className="searchPage__option">
                <Link to="/news">
                  <DescriptionIcon />
                  News
                </Link>
              </div>
              <div className="searchPage__option">
                <Link to="/images">
                  <ImageIcon />
                  Images
                </Link>
              </div>
              <div className="searchPage__option">
                <Link to="/shopping">
                  <LocalOfferIcon />
                  Shopping
                </Link>
              </div>
              <div className="searchPage__option">
                <Link to="/maps">
                  <RoomIcon />
                  Maps
                </Link>
              </div>
              <div className="searchPage__option">
                <Link to="/more">
                  <MoreVertIcon />
                  More
                </Link>
              </div>
            </div>
            <div className="searchPage__optionsRight">
              <div className="searchPage__option">
                <Link to="/settings">Settings</Link>
              </div>
              <div className="searchPage__option">
                <Link to="/tools">Tools</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="searchPage__results"></div>
    </div>
  );
}

export default SearchPage;
