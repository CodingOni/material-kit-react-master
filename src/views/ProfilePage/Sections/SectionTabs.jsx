import React from "react";

// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";

// @material-ui/icons
import DeveloperMode from "@material-ui/icons/DeveloperMode";
import Backup from "@material-ui/icons/Backup";
// core components
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";
import CustomTabs from "components/CustomTabs/CustomTabs.jsx";
import tabsStyle from "assets/jss/material-kit-react/views/componentsSections/tabsStyle.jsx";

class SectionTabs extends React.Component {
  render() {
    const { classes } = this.props;
    return (
      <div >
        <div className={classes.container}>
          <div id="nav-tabs">
            <GridContainer className="scontainer">
              <GridItem xs={12} sm={12} md={6}>
                <CustomTabs
                  headerColor="warning"
                  tabs={[
                    {
                      tabName: "Front-End",
                      tabIcon: DeveloperMode,
                      tabContent: (
                        <div>
                          <ul className="padding-left-0">
                            <li
                              className="fab fa-react fa-js-square Skills fa-2x"
                              title="React.js"
                            />
                            <li
                              className="fab  fa-js-square Skills fa-2x"
                              title="Javascript"
                            />

                            <li
                              className="fab fa-html5 Skills fa-2x"
                              title="HTML5"
                            />
                            <li
                              className="fab fa-css3 Skills fa-2x"
                              title="CSS3"
                            />
                            <li
                              className="fas fa-bold Skills fa-2x"
                              title="BootStrap4"
                            />
                            <li
                              className="fas fa-wheelchair Skills fa-2x"
                              title="Accessibility"
                            />
                            <li
                              className="fas fa-server Skills fa-2x"
                              title="API Usage"
                            />
                          </ul>
                        </div>
                      )
                    },
                    {
                      tabName: "Tools",
                      tabIcon: Backup,
                      tabContent: (
                        <div>
                          <ul>
                            <li
                              className="fas fa-code-branch Skills fa-2x"
                              title="VersionControl"
                            />
                            <li
                              className="fab  fa-npm Skills fa-2x"
                              title="NPM"
                            />
                            <li
                              className="fas fa-terminal Skills fa-2x"
                              title="Unix "
                            />
                            <i
                              className="fab fa-docker Skills fa-2x"
                              title="Docker "
                            />
                            <i
                              className="fab fa-wordpress Skills fa-2x"
                              title="WordPress "
                            />
                            <i
                              className="fab fa-adobe Skills fa-2x"
                              title="Photoshop "
                            />
                          </ul>
                        </div>
                      )
                    }
                  ]}
                />
              </GridItem>
            </GridContainer>
          </div>
        </div>
      </div>
    );
  }
}

export default withStyles(tabsStyle)(SectionTabs);
