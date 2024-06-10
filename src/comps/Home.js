import React from "react";
import "./Home.css";
import NavBar from "./navContainer.js";
import searchIcon from "./../assets/search.svg";
import notificationIcon from "./../assets/notification.svg";
import revenueIcon from "./../assets/revenueIcon.svg";
import transactionsIcon from "./../assets/totalTransIcon.svg";
import totaluserIcon from "./../assets/totalUser.svg";
import likesIcon from "./../assets/likesIcon.svg";
import ChartComponent from "./Chart.js";
import PieChart from "./piechart";

const Home = () => {
  
  return (
    <>
      <div className="homeContainer">
        <NavBar />
        <div className="dashboardContainer">
          <div className="dashHead">
            <h3>Dashboard</h3>
            <div className="dashItems">
              <div className="searchBar">
                <input type="text" placeholder="Search..." />
                <img
                  style={{ cursor: "pointer" }}
                  src={searchIcon}
                  alt="searchIcon"
                />
              </div>
              <img
                style={{ cursor: "pointer" }}
                src={notificationIcon}
                alt="searchIcon"
              />
            </div>
          </div>

          <div className="cardContainer">
            <div className="card" style={{ backgroundColor: "#DDEFE0" }}>
              <img src={revenueIcon} alt="revenueIcon" />
              <div className="cardContent">
                <p>Total Revenues</p>
                <h4>$2,129,430</h4>
              </div>
            </div>
            <div className="card" style={{ backgroundColor: "#F4ECDD" }}>
              <img src={transactionsIcon} alt="revenueIcon" />
              <div className="cardContent">
                <p>Total Transactions</p>
                <h4>1,520</h4>
              </div>
            </div>
            <div className="card" style={{ backgroundColor: "#EFDADA" }}>
              <img src={likesIcon} alt="revenueIcon" />
              <div className="cardContent">
                <p>Total Likes</p>
                <h4>9,721</h4>
              </div>
            </div>
            <div className="card" style={{ backgroundColor: "#DEE0EF" }}>
              <img src={totaluserIcon} alt="revenueIcon" />
              <div className="cardContent">
                <p>Total Users</p>
                <h4>892</h4>
              </div>
            </div>
          </div>
          <ChartComponent />
          <div className="subContainer">
            <PieChart />

            <div className="scheduleContainer">
              <div className="productTop">
                <h3>Top products</h3>
                <p className="see">see all</p>
              </div>
              <div className="allMeeting">
                <div
                  style={{ borderLeft: "5px solid #9BDD7C" }}
                  className="meeting"
                >
                  <h6>Meeting with suppliers from Kuta Bali</h6>
                  <p>14.00-15.00</p>
                  <p>at Sunset Road, Kuta, Bali </p>
                </div>

                <div
                  style={{ borderLeft: "5px solid #6972C3" }}
                  className="meeting"
                >
                  <h6>Check operation at Giga Factory 1</h6>
                  <p>18.00-20.00</p>
                  <p>at Central Jakarta </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
