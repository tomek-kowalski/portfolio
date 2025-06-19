import React, {useState} from "react";
import { Container, Row, Col } from "react-bootstrap";
import homeLogo from "../../Assets/home-main.svg";
import Type from "./Type";
import { useTranslation } from "react-i18next";
import StarBackground from "../StarsBackground"
import GetinTouch from "../Form/GetinTouch";
import styles from "./home.module.css"
import Skillitemgrid from "../SkillitemGrid/Skillitemgrid";
import skillsData from "../skills.json";


function Home() {
  const { t } = useTranslation();

  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleGetInTouch = () => setIsModalOpen(true);
  const handleClose = () => setIsModalOpen(false);

  return (
    <>
      <StarBackground />
      <Container fluid className={styles.homesection} id="home">
        <Container className={styles.homecontent}>
          <Row>
            <Col md={7} className={styles.homeheader}>
              <h1 style={{ paddingBottom: 15 }} className="heading">
                {t("greeting")}{" "}
                <span className="wave" role="img" aria-labelledby="wave">
                  👋🏻
                </span>
              </h1>

              <h1 className="heading-name">
                I'm
                <strong className="main-name"> {t("person")}</strong>
              </h1>

              <div style={{ padding: 50, textAlign: "left" }}>
                <Type />
              </div>
            </Col>

            <Col md={5} style={{ paddingBottom: 20 }}>
              <img
                src={homeLogo}
                alt="home pic"
                className="img-fluid"
                style={{ maxHeight: "450px" }}
              />
            </Col>
          </Row>
          <Row>
            <button className={styles.getintouch} onClick={handleGetInTouch}>
              Get in Touch
            </button>
            <GetinTouch open={isModalOpen} onClose={handleClose} />
          </Row>
          <Row>
              <Skillitemgrid skills={skillsData} />
          </Row>

        </Container>
      </Container>
      </>
  );
}

export default Home;
