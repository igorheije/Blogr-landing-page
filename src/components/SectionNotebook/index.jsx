import React from 'react';
import IlustraçãoN from '../../images/illustration-laptop-desktop.svg';
import IlustraçãoM from '../../images/illustration-laptop-mobile.svg';
import TextSection from '../TextSection';
import './style.css';
const SectionNotebook = () => {
  return (
    <div className="notebookContainer">
      <div className="imageNote">
        <img src={IlustraçãoN} alt="Ilustração de um editor" />
      </div>
      <div className="imageNoteM">
        <img src={IlustraçãoM} alt="Ilustração de um editor" />
      </div>
      <div>
        <TextSection title=" Free, open, simple">
          Blogr is a free and open source application backed by a large
          community of helpful developers. It supports features such as code
          syntax highlighting, RSS feeds, social media integration, third-party
          commenting tools, and works seamlessly with Google Analytics. The
          architecture is clean and is relatively easy to learn.
        </TextSection>
        <TextSection title=" Powerful tooling">
          Batteries included. We built a simple and straightforward CLI tool
          that makes customization and deployment a breeze, but capable of
          producing even the most complicated sites.
        </TextSection>
      </div>
    </div>
  );
};

export default SectionNotebook;
