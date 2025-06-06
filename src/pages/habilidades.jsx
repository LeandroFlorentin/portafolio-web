import { useState } from "react";
import Tab from "../components/Tab/Tab.jsx";
import Badge from "../components/Badge/Badge.jsx";
import { Fade } from "react-awesome-reveal";
const Habilidades = ({ reference }) => {
  const [activeTab, setActiveTab] = useState("front-end");
  let badgesFront = ["React.js", "Vue.js", "JavaScript", "JQuery", "Redux", "Vuex", "Context", "Material UI", "PrimeVue", "Bootstrap", "Sass", "CSS3", "HTML5"];
  let badgesBack = ["Node.js", "Express.js", "Jest", "JavaScript", "TypeScript", "Python", "FastAPI", "Sequelize", "PostgreSQL", "MySQL", "SQLite", "Firebase"];
  let badgesAws = ["EC2", "S3", "CloudFront", "Lambda", "SQS"];
  let badgesSoftwate = ["Docker", "Jenkins", "Git", "GitHub", "Bitbucket", "Visual Studio Code"];
  let badgesMetodologias = ["SCRUM"];
  let tabs = [
    { name: "Front-end", funcion: handleTabClick, seteo: "front-end" },
    { name: "Back-end", funcion: handleTabClick, seteo: "back-end" },
    { name: "AWS", funcion: handleTabClick, seteo: "aws" },
    { name: "Software", funcion: handleTabClick, seteo: "software" },
    { name: "Metodologías", funcion: handleTabClick, seteo: "metodologias" },
  ];
  function handleTabClick(tabName) {
    setActiveTab(tabName);
  }
  return (
    <section ref={reference} id="habilidades" className="h-auto pt-5">
      <div className="tab-content no-select-text">
        <div className="p-2">
          <h5 className="f-20">Front-End</h5>
          <div className="d-flex flex-wrap gap-2 mt-3">
            {badgesFront.map((value, key) => (
              <div key={key}>
                <Fade delay={120 * key}>
                  <Badge className="no-select-text badge rounded-pill bg-custom padding-badge scale pointer" description={value} />
                </Fade>
              </div>
            ))}
          </div>
        </div>
        <hr />
        <div className="p-2">
          <h5 className="f-20">Back-End</h5>
          <div className="d-flex flex-wrap gap-2 mt-3">
            {badgesBack.map((value, key) => (
              <div key={key}>
                <Fade delay={120 * key}>
                  <Badge className="no-select-text badge rounded-pill bg-custom padding-badge scale pointer" description={value} />
                </Fade>
              </div>
            ))}
          </div>
        </div>
        <hr />
        <div className="p-2">
          <h5 className="f-20">AWS</h5>
          <div className="d-flex flex-wrap gap-2 mt-3 ">
            {badgesAws.map((value, key) => (
              <div key={key}>
                <Fade delay={120 * key}>
                  <Badge className="no-select-text badge rounded-pill bg-custom padding-badge scale pointer" description={value} />
                </Fade>
              </div>
            ))}
          </div>
        </div>
        <hr />
        <div className="p-2">
          <h5 className="f-20">Software</h5>
          <div className="d-flex flex-wrap gap-2 mt-3">
            {badgesSoftwate.map((value, key) => (
              <div key={key}>
                <Fade delay={120 * key}>
                  <Badge className="no-select-text badge rounded-pill bg-custom padding-badge scale pointer" description={value} />
                </Fade>
              </div>
            ))}
          </div>
        </div>
        <hr />
        <div className="p-2">
          <h5>Metodologías</h5>
          <div className="d-flex flex-wrap gap-2 mt-3">
            {badgesMetodologias.map((value, key) => (
              <div key={key}>
                <Fade delay={120 * key}>
                  <Badge className="no-select-text badge rounded-pill bg-custom padding-badge scale pointer" description={value} />
                </Fade>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Habilidades;
