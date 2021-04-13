import React from 'react';
import TextSection from '../TextSection';
import Ilustração from '../../images/illustration-editor-mobile.svg';
import './style.css';

const SectionFuture = () => {
  return (
    <div className="sectionContainer">
      <h1>Designed for the future</h1>

      <div className="sectionText">
        <TextSection title="Introducing an extensible editor">
          Blogr features an exceedingly intuitive interface which lets you focus
          on one thing: creating content. The editor supports management of
          multiple blogs and allows easy manipulation of embeds such as images,
          videos, and Markdown. Extensibility with plugins and themes provide
          easy ways to add functionality or change the looks of a blog.
        </TextSection>
        <TextSection title=" Robust content management">
          Flexible content management enables users to easily move through
          posts. Increase the usability of your blog by adding customized
          categories, sections, format, or flow. With this functionality, you’re
          in full control.
        </TextSection>
      </div>

      <div className="backgroundContainer">
        <img src={Ilustração} alt="Ilustração de um editor" />
      </div>
    </div>
  );
};

export default SectionFuture;
