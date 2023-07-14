import React from "react";
import "../../scss/components/Navbar.css";
import search from "../../assets/search.png";
import alarm from "../../assets/alarm.png";
import connection from "../../assets/user.png";
import message from "../../assets/commnet.png";
import user from "../../assets/personal.png";
import document from "../../assets/document.png";
import setting from "../../assets/setting.png";
import drop from "../../assets/drop.png";
import menu from "../../assets/menu.png";

const Navbar = () => {
  return (
    <div className="container">
      <div className="container-searchBox">
        <img className="container-searchBox-image" src={search} />
        <input className="container-searchBox-input" placeholder="Ara" />
      </div>
      <div>
        <img className="container-row-menu-menuIcon" src={menu} />
      </div>
      <div className="container-row">
        <div className="container-row-menu">
          <img className="container-row-menu-image" src={alarm} />
          <div className="container-row-menu-textdiv">
            <div className="container-row-menu-textdiv-text">Bildirimler</div>
            <img className="container-row-menu-textdiv-image" src={drop} />
          </div>
        </div>
        <div className="container-row-menu">
          <img className="container-row-menu-image" src={connection} />
          <div className="container-row-menu-textdiv">
            <div className="container-row-menu-textdiv-text">Bildirimler</div>
            <img className="container-row-menu-textdiv-image" src={drop} />
          </div>
        </div>
        <div className="container-row-menu">
          <img className="container-row-menu-image" src={message} />
          <div className="container-row-menu-textdiv">
            <div className="container-row-menu-textdiv-text">Bildirimler</div>
            <img className="container-row-menu-textdiv-image" src={drop} />
          </div>
        </div>
        <div className="container-row-menu">
          <img className="container-row-menu-image" src={user} />
          <div className="container-row-menu-textdiv">
            <div className="container-row-menu-textdiv-text">Bildirimler</div>
            <img className="container-row-menu-textdiv-image" src={drop} />
          </div>
        </div>
        <div className="container-row-line" />
        <div className="container-row-menu">
          <img className="container-row-menu-image" src={document} />
          <div className="container-row-menu-textdiv">
            <div className="container-row-menu-textdiv-text">Bildirimler</div>
            <img className="container-row-menu-textdiv-image" src={drop} />
          </div>
        </div>
        <div className="container-row-menu">
          <img className="container-row-menu-image" src={setting} />
          <div className="container-row-menu-textdiv">
            <div className="container-row-menu-textdiv-text">Bildirimler</div>
            <img className="container-row-menu-textdiv-image" src={drop} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
