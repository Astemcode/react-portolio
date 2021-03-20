import React, { Component } from 'react';
import Pdf from '../documents/JoivreResume.pdf';

class Resume extends Component {

  render() {

    return (
        <div className = "App">
          <a href = {Pdf} target = "_blank">Resume</a>
        </div>
    );

  }
}

export default Resume;