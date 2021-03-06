import React, { Component } from 'react';
import { Tabs, Tab, Grid, Cell, Card, CardTitle, CardText, CardActions, Button, CardMenu, IconButton } from 'react-mdl';


class Projects extends Component {
  constructor(props) {
    super(props);
    this.state = { activeTab: 0 };
  }

  toggleCategories() {

    if(this.state.activeTab === 0){
      return(
        <div className="projects-grid">
          {/* Project 1 */}
          <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
            <CardTitle style={{color: '#fff', height: '176px', background: 'url(https://xtnotes-1255646395.coshk.myqcloud.com/images/react-1.svg) center / cover'}} >Static Web App</CardTitle>
            <CardText>
              Created a static web app using ReactJS, HTML5/CSS3 which perform CRUD operations
            </CardText>

            <CardMenu style={{color: '#fff'}}>

            </CardMenu>
          </Card>

          {/* Project 2 */}
          <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
            <CardTitle style={{color: '#fff', height: '176px', background: 'url(https://xtnotes-1255646395.coshk.myqcloud.com/images/react-1.svg) center / cover'}} >My Portfolio</CardTitle>
            <CardText>
              Build My Portfolio using ReactJS, HTML5/CSS3
            </CardText>

            <CardMenu style={{color: '#fff'}}>

            </CardMenu>
          </Card>

        </div>


      )
    } else if(this.state.activeTab === 1) {
      return (
        <div>
        <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
          <CardTitle style={{color: '#fff', height: '176px', background: 'url(https://xtnotes-1255646395.coshk.myqcloud.com/images/react-1.svg) center / cover'}} >MERN Todo</CardTitle>
          <CardText>
            Build a Full Stack Web app which perform CRUD operations and deployed in public cloud (AWS) using EC2 instance
          </CardText>

          <CardMenu style={{color: '#fff'}}>

          </CardMenu>
        </Card>
        </div>
      )
    } else if(this.state.activeTab === 2) {
      return (
        <div>  <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
            <CardTitle style={{color: 'black', height: '176px', background: 'url(data:image/png;base64,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) center / cover'}} >Agronners</CardTitle>
            <CardText>
              Andorid application between farmers and farmer productions organizations. It guides the farmers regarding which farms to be planted by considering the available resources, climatic
              conditions and type of soil and suggests pesticicdes and efficient watering mechanisms
            </CardText>

            <CardMenu style={{color: '#fff'}}>

            </CardMenu>
          </Card></div>
      )
    } else if(this.state.activeTab === 3) {
      return (
        <div>  <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
            <CardTitle style={{color: 'black', height: '176px', background: 'url(data:image/png;base64,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) center / cover'}} >User Management</CardTitle>
            <CardText>
              User Management application which performs CRUD operations for users in an Organization
            </CardText>

            <CardMenu style={{color: '#fff'}}>

            </CardMenu>
          </Card></div>
      )
    }
    else if(this.state.activeTab === 4) {
      return (
        <div>  <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
            <CardTitle style={{color: 'black', height: '176px', background: 'url(data:image/png;base64,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) center / cover'}} >Smayana</CardTitle>
            <CardText>
              Social Welfare Organization website used to communicate with other NGO's and welfare organizations to fulfill their scarcity of resources and any individual can donate using this
            </CardText>

            <CardMenu style={{color: '#fff'}}>

            </CardMenu>
          </Card></div>
      )
    }
  }


  render() {
    return(
      <div>
        <Tabs activeTab={this.state.activeTab} onChange={(tabId) => this.setState({ activeTab: tabId })} ripple>
          <Tab>React</Tab>
          <Tab>MERN</Tab>
          <Tab>Android</Tab>
          <Tab>Java</Tab>
          <Tab>Angular</Tab>
        </Tabs>

          <Grid>
            <Cell col={12}>
              <div className="content">{this.toggleCategories()}</div>
            </Cell>
          </Grid>

      </div>
    )
  }
}

export default Projects;
