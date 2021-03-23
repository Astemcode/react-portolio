import React, { Component } from 'react';
import Pdf from './JoivreResume.pdf';

class Resume extends Component {

  render() {

    return (
        <div className = "App">
          <a 
          id="resumeLink"
          href = {Pdf} 
          target = "_blank">
              Resume
              </a>
        </div>
    );

  }
}

export default Resume;