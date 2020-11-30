import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';
import Education from './education';
import Experience from './experience';
import Skills from './skills';


class Resume extends Component {
  render() {
    return(
      <div>
        <Grid>
          <Cell col={4}>
            <div style={{textAlign: 'center'}}>
              <img
                src="https://www.shareicon.net/download/2015/09/18/103157_man_512x512.png"
                alt="avatar"
                style={{height: '200px'}}
                 />
            </div>

            <h2 style={{paddingTop: '2em'}}>Sowjanya Betha</h2>
            <h4 style={{color: 'grey'}}>Software Developer</h4>
            <hr style={{borderTop: '3px solid #833fb2', width: '50%'}}/>
            <p>Knowledge on web application development utilizing JavaScript, HTML5/CSS3, JSON, ReactJS and integrating Restful API's understanding MongoDB and have a good handle use of Mongoose
            Having working Knowledge of designing, building and deploying full-stack web application on public cloud (AWS)</p>
            <hr style={{borderTop: '3px solid #833fb2', width: '50%'}}/>
            <h5>Phone</h5>
            <p>(+91) 9618744460</p>
            <h5>Email</h5>
            <p>venkatsowjanya.betha@gmail.com</p>
            <hr style={{borderTop: '3px solid #833fb2', width: '50%'}}/>
          </Cell>
          <Cell className="resume-right-col" col={8}>
            <h2>Education</h2>


            <Education
              startYear={2014}
              endYear={2018}
              schoolName="Bachelor's Degree in Computer Science - 81%"
              schoolDescription="Gayatri Vidya Parishad College for Degree and PG Courses"
               />

                <hr style={{borderTop: '3px solid #e22947'}} />

              <h2>Experience</h2>

            <Experience
              startYear={2018}
              jobName="Software Developer at Qolsys"
              jobDescription="Software Developer at with 2 years experience in developing native Android application and framework using java( Implemented key features for the project which Qolsys working on)"
              />

              <Experience
                startYear={2017}
                endYear={2017}
                jobName="Front End Developer at Namaste Vizag"
                jobDescription="Involved in designing the user experience interface. Developed web pages using HTML/CSSS and JavaScript. Good understanding of Model View Controller MVC framework. Fixed bugs and provided support services for the application
"
                />
              <hr style={{borderTop: '3px solid #e22947'}} />
              <h2>Skills</h2>
              <Skills
                skill="javascript"
                progress={100}
                />
                <Skills
                  skill="HTML/CSS"
                  progress={80}
                  />
                  <Skills
                    skill="NodeJS"
                    progress={50}
                    />
                    <Skills
                      skill="React"
                      progress={25}
                      />


          </Cell>
        </Grid>
      </div>
    )
  }
}

export default Resume;
