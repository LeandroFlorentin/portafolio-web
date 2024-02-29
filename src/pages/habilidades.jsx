import { useState } from "react";
import Tab from "../components/Tab/Tab.jsx";
import Badge from "../components/Badge/Badge.jsx";
const Habilidades = ({ reference }) => {
  const [activeTab, setActiveTab] = useState('front-end');
  let badgesFront = ["React.js", "JavaScript", "JQuery", "Redux", "Context", "Material UI", "Bootstrap", "Sass", "CSS3", "HTML5"];
  let badgesBack = ["Node.js", "Express.js", "JavaScript", "TypeScript", "Sequelize", "PostgreSQL", "MySQL", "SQLite", "Firebase"];
  let badgesAws = ["EC2", "S3", "CloudFront"];
  let badgesSoftwate = ["Jenkins", "Git", "GitHub", "Bitbucket", "Visual Studio Code"];
  let badgesMetodologias = ["Scrum"]
  let tabs = [{ name: "Front-end", funcion: handleTabClick, seteo: "front-end" }, { name: "Back-end", funcion: handleTabClick, seteo: "back-end" }, { name: "AWS", funcion: handleTabClick, seteo: "aws" }, { name: "Software", funcion: handleTabClick, seteo: "software" }, { name: "Metodologías", funcion: handleTabClick, seteo: "metodologias" }]
  function handleTabClick(tabName) {
    setActiveTab(tabName);
  };
  return (
    <section ref={reference} id="habilidades" className="h-auto pt-5">
      <div className="tab-content no-select-text">
        <div className="border-start border-bottom p-4">
          <h5>Front-End</h5>
          <div className="d-flex flex-wrap gap-2">
            {badgesFront.map((value, key) => (<div key={key}><Badge className="no-select-text badge rounded-pill bg-custom padding-badge scale pointer" description={value} /></div>))}
          </div>
        </div>
        <div className="border-end border-bottom p-4">
          <h5>Back-End</h5>
          <div className="d-flex flex-wrap gap-2">
            {badgesBack.map((value, key) => (<div key={key}><Badge className="no-select-text badge rounded-pill bg-custom padding-badge scale pointer" description={value} /></div>))}
          </div>
        </div>
        <div className="p-4 border-start border-bottom">
          <h5>AWS</h5>
          <div className="d-flex flex-wrap gap-2 ">
            {badgesAws.map((value, key) => (<div key={key}><Badge className="no-select-text badge rounded-pill bg-custom padding-badge scale pointer" description={value} /></div>))}
          </div>
        </div>
        <div className="p-4 border-end border-bottom" >
          <h5>Software</h5>
          <div className="d-flex flex-wrap gap-2  ">
            {badgesSoftwate.map((value, key) => (<div key={key}><Badge className="no-select-text badge rounded-pill bg-custom padding-badge scale pointer" description={value} /></div>))}
          </div>
        </div>
        <div className="p-4 border-start border-bottom">
          <h5>Metodologías</h5>
          <div className="d-flex flex-wrap gap-2">
            {badgesMetodologias.map((value, key) => (<div key={key}><Badge className="no-select-text badge rounded-pill bg-custom padding-badge scale pointer" description={value} /></div>))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Habilidades;