import React from 'react';
import SkillCard from './SkillCard';

function Skills() {
  return (
    <div className="skills__main">
      <SkillCard
        title="Languages"
        tags={
          <ul>
            <li className="skills__tags">Python</li>
            <li className="skills__tags">JavaScript</li>
            <li className="skills__tags">TypeScript</li>
            <li className="skills__tags">Java</li>
            <li className="skills__tags">C#</li>
            <li className="skills__tags">C/C++</li>
          </ul>
        }
      />
      <SkillCard
        title="Frameworks"
        tags={
          <ul>
            <li className="skills__tags">React.js</li>
            <li className="skills__tags">Node.js</li>
            <li className="skills__tags">.NET</li>
            <li className="skills__tags">Express</li>
            <li className="skills__tags">Junit</li>
            <li className="skills__tags">Xunit</li>
            <li className="skills__tags">NumPy</li>
            <li className="skills__tags">Scikit-learn</li>
            <li className="skills__tags">Tensorflow Keras</li>
            <li className="skills__tags">Pandas</li>
            <li className="skills__tags">ROS</li>
          </ul>
        }
      />
      <SkillCard
        title="Databases"
        tags={
          <ul>
            <li className="skills__tags">MongoDB</li>
            <li className="skills__tags">Azure Cosmos DB</li>
            <li className="skills__tags">MySQL</li>
          </ul>
        }
      />
      <SkillCard
        title="Tools"
        tags={
          <ul>
            <li className="skills__tags">Git</li>
            <li className="skills__tags">Postman</li>
            <li className="skills__tags">IntelliJ</li>
            <li className="skills__tags">Visual Studio</li>
            <li className="skills__tags">VS Code</li>
            <li className="skills__tags">JupyterLab</li>
          </ul>
        }
      />
    </div>
  );
}

export default Skills;
