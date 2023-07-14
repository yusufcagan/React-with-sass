import React from "react";
import "../../scss/pages/PremiumPage.css";
import image from "../../assets/image.png";

export default function PremiumPage() {
  return (
    <div className="pageContainer">
      <div className="pageContainer-loginCard">
        <div className="pageContainer-loginCard-content">
          <h1>Premium'a Uye Ol</h1>
          <p className="pageContainer-loginCard-content-text">
            Diam ultrices turpis accumsan venenatis. Parturient aliquet dui
            feugiat morbi diam tortor nunc. Vel, interdum pretium sed sed lectus
            auctor sed blandit lacus. Mauris commodo sit non tincidunt sed sed.
            Mauris diam nisl sed iaculis. Rhoncus euismod quam morbi nec commodo
            euismod tempus. Eu, ultrices faucibus vel tristique sem amet, at
            sed. Ut facilisis sagittis suscipit auctor ultrices et, magnis
            auctor. Vestibulum at amet, amet lorem aliquam sagittis, iaculis.
          </p>
        </div>
        <img className="pageContainer-loginCard-content-image" src={image} />
      </div>
      <div className="pageContainer-cardDiv">
        <div className="pageContainer-cardDiv-cardOne">
          <div className="pageContainer-cardDiv-cardOne-card">
            <div className="pageContainer-cardDiv-content">
              <p className="pageContainer-cardDiv-content-h">Kariyer</p>
              <p className="pageContainer-cardDiv-content-c">
                İşe alının ve devam edin
              </p>
              <div className="pageContainer-cardDiv-content-line" />
              <p className="pageContainer-cardDiv-content-p">
                Öne çıkın ve işe alım yöneticileri ile iletişim kurun{" "}
              </p>
              <p className="pageContainer-cardDiv-content-p">
                Rekabetteki yerinizi görüntüleyin
              </p>
              <p className="pageContainer-cardDiv-content-p">
                Kariyerinizde ilerlemek için yeni yetenekler edinin
              </p>
              <div
                style={{ marginTop: 85 }}
                className="pageContainer-cardDiv-content-button"
              >
                <h5 className="pageContainer-cardDiv-content-button-buttonText">
                  Daha fazla bilgi edinin
                </h5>
              </div>
            </div>
          </div>
        </div>
        <div className="pageContainer-cardDiv-cardTwo">
          <div className="pageContainer-cardDiv-cardTwo-card">
            <div className="pageContainer-cardDiv-content">
              <p style={{ fontSize: 20, color: "#56687A" }}>Business</p>
              <p className="pageContainer-cardDiv-content-c">
                İşe alının ve devam edin
              </p>
              <div className="pageContainer-cardDiv-content-line" />
              <p style={{ fontSize: 14, color: "black", fontWeight: "bold" }}>
                Tüm kariyer özellikleri, ayrıca:
              </p>
              <p className="pageContainer-cardDiv-content-p">
                Öne çıkın ve işe alım yöneticileri ile iletişim kurun{" "}
              </p>
              <p className="pageContainer-cardDiv-content-p">
                Rekabetteki yerinizi görüntüleyin
              </p>
              <p className="pageContainer-cardDiv-content-p">
                Kariyerinizde ilerlemek için yeni yetenekler edinin
              </p>
              <div
                style={{ marginTop: 45 }}
                className="pageContainer-cardDiv-content-button"
              >
                <h5 className="pageContainer-cardDiv-content-button-buttonText">
                  Daha fazla bilgi edinin
                </h5>
              </div>
            </div>
          </div>
        </div>
        <div className="pageContainer-cardDiv-cardThree">
          <div className="pageContainer-cardDiv-cardThree-card">
            <div className="pageContainer-cardDiv-content">
              <p style={{ fontSize: 20, color: "#80597E" }}>
                Sales Navigator Core
              </p>
              <p className="pageContainer-cardDiv-content-c">
                İşe alının ve devam edin
              </p>
              <div className="pageContainer-cardDiv-content-line" />
              <p style={{ fontSize: 14, color: "black", fontWeight: "bold" }}>
                Tüm kariyer özellikleri, ayrıca:
              </p>
              <p className="pageContainer-cardDiv-content-p">
                Öne çıkın ve işe alım yöneticileri ile iletişim kurun{" "}
              </p>
              <p className="pageContainer-cardDiv-content-p">
                Rekabetteki yerinizi görüntüleyin
              </p>
              <p className="pageContainer-cardDiv-content-p">
                Kariyerinizde ilerlemek için yeni yetenekler edinin
              </p>
              <div
                style={{ marginTop: 45 }}
                className="pageContainer-cardDiv-content-button"
              >
                <h5 className="pageContainer-cardDiv-content-button-buttonText">
                  Daha fazla bilgi edinin
                </h5>
              </div>
            </div>
          </div>
        </div>
        <div className="pageContainer-cardDiv-cardFour">
          <div className="pageContainer-cardDiv-cardFour-card">
            <div className="pageContainer-cardDiv-content">
              <p style={{ fontSize: 20, color: "#8F5849" }}>Recruiter Lite</p>
              <p className="pageContainer-cardDiv-content-c">
                İşe alının ve devam edin
              </p>
              <div className="pageContainer-cardDiv-content-line" />
              <p style={{ fontSize: 14, color: "black", fontWeight: "bold" }}>
                Tüm kariyer özellikleri, ayrıca:
              </p>
              <p className="pageContainer-cardDiv-content-p">
                Öne çıkın ve işe alım yöneticileri ile iletişim kurun{" "}
              </p>
              <p className="pageContainer-cardDiv-content-p">
                Rekabetteki yerinizi görüntüleyin
              </p>
              <p className="pageContainer-cardDiv-content-p">
                Kariyerinizde ilerlemek için yeni yetenekler edinin
              </p>
              <div
                style={{ marginTop: 45 }}
                className="pageContainer-cardDiv-content-button"
              >
                <h5 className="pageContainer-cardDiv-content-button-buttonText">
                  Daha fazla bilgi edinin
                </h5>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
