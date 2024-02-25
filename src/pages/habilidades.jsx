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
    <section ref={reference} id="habilidades" className="h-auto top-6rem">
      <Tab tabs={tabs} active={activeTab}>
        <div className="tab-content no-select-text">
          <div className={`tab-pane ${activeTab === 'front-end' ? 'active' : ''}`}>
            <div className="d-flex height-container-badge flex-wrap mt-2">
              {badgesFront.map((value, key) => (<div key={key} className="m-2"><Badge className="badge bg-custom p-2 scale pointer" description={value} /></div>))}
            </div>
          </div>
          <div className={`tab-pane ${activeTab === 'back-end' ? 'active' : ''}`}>
            <div className="d-flex height-container-badge flex-wrap mt-2">
              {badgesBack.map((value, key) => (<div key={key} className="m-2"><Badge className="badge bg-custom p-2 scale pointer" description={value} /></div>))}
            </div>
          </div>
          <div className={`tab-pane ${activeTab === 'aws' ? 'active' : ''}`}>
            <div className="d-flex height-container-badge flex-wrap mt-2">
              {badgesAws.map((value, key) => (<div key={key} className="m-2"><Badge className="badge bg-custom p-2 scale pointer" description={value} /></div>))}
            </div>
          </div>
          <div className={`tab-pane ${activeTab === 'software' ? 'active' : ''}`}>
            <div className="d-flex height-container-badge flex-wrap mt-2">
              {badgesSoftwate.map((value, key) => (<div key={key} className="m-2"><Badge className="badge bg-custom p-2 scale pointer" description={value} /></div>))}
            </div>
          </div>
          <div className={`tab-pane ${activeTab === 'metodologias' ? 'active' : ''}`}>
            <div className="d-flex height-container-badge flex-wrap mt-2">
              {badgesMetodologias.map((value, key) => (<div key={key} className="m-2"><Badge className="badge bg-custom p-2 scale pointer" description={value} /></div>))}
            </div>
          </div>
        </div>
      </Tab>
    </section>
  )
}

export default Habilidades;