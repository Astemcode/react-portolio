import React from "react";
import myImage from "../img/myImage.jpg";

class About extends React.Component {
  constructor() {
    super();
    this.state = {
      skills: [
        {
          id: "JavaScript_skill",
          content: "JavaScript",
        },
        {
          id: "ReactJS_skill",
          content: "ReactJS",
          value: ""
        },
        {
          id: "VanillaJS_skill",
          content: "VanillaJS",
          value: ""
        },
        {
          id: "Mongo_skill",
          content: "MongoDB",
          value: ""
        },
        {
          id: "Git_skill",
          content: "GitBash",
          value: ""
        },
        {
          id: "Design_skill",
          content: "Bootstrap",
          value: ""
        },
        {
          id: "UX_skill",
          content: "Materialize",
          value: ""
        }
      ],
      about_me: [
        {
          id: "first-p-about",
          content:
            "Welcome to my page I'm excited to tell you a little about myself. Well to begin I am currently an aspiring Software Developer. A favorite hobby isn't really something that I have however I enjoy watching and playing basketball, listening to my preferred musical genres, occassionally baking and lastly programming. I want to possess the ability to assist with engineering global-scale systems that support many users while also cultivating that knowledge for my entrepreneurial endeavors."
        },
        {
          id: "second-p-about",
          content:
            "Having the opportunity to be a software engineer has been one of the more fulfilling things I've had the opportunity to engage in. Nevertheless, living in Miami I really get the opportunity to enjoy tranquil sceneries, with pleasant skies."
        },
        {
          id: "third-p-about",
          content:
            ""
        }
      ]
    };
  }

  render() {
    return (
      <section id="about" className="about-mf sect-pt4 route">
        <div className="container">
          <div className="row">
            <div className="col-sm-12">
              <div className="box-shadow-full">
                <div className="row">
                  <div className="col-md-6">
                    <div className="row">
                      <div
                        className="col-sm-6 col-md-5"
                        style={{ margin: "0 auto" }}
                      >
                        <div
                          className="about-img"
                          style={{ textAlign: "center" }}
                        >
                          <img
							              className={"img-fluid " + this.props.fadeIn}
							              src={myImage}
							              alt=""
							              style={{
								              borderRadius: 48 + "%",
								              height: 200 + "px",
								              width: 200 + "px",
                              paddingRight: "-122",
                              marginRight: 0 + "px",
                              borderTopWidth: 300 + "px",
                              borderTop: "outset",
                              borderBottomStyle: "inset",
                              borderRightStyle: "inset",
                              borderLeft: "outset",
							                    }}/>
                        </div>
                      </div>
                    </div>
                    <div className="skill-mf">
                      {/* <p className="title-s">Skill</p> */}
                      {this.state.skills.map(skill => {
                        return (
                          <React.Fragment key={skill.id}>
                            <span>{skill.content}</span>{" "}
                            <span className="pull-right">
                              {skill.porcentage}
                            </span>
                            <div className="progress">
                              <div
                                className="progress-bar"
                                role="progressbar"
                                style={{ width: skill.porcentage }}
                                aria-valuenow={skill.value}
                                aria-valuemin="0"
                                aria-valuemax="100"
                              ></div>
                            </div>
                          </React.Fragment>
                        );
                      })}
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="about-me pt-4 pt-md-0">
                      <div className="title-box-2">
                        <h5 className="title-left">The Developer</h5>
                      </div>
                      {this.state.about_me.map(content => {
                        return (
                          <p className="lead" key={content.id}>
                            {content.content}
                          </p>
                        );
                      })}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default About;
