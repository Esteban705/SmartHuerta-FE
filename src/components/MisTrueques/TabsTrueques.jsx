import React from 'react';
import PropTypes from 'prop-types';
import {makeStyles} from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import MisTrueques from './MisTruequesCards';
import SolicitudesTrueques from './SolicitudesTruequesCards';
import TruequesRealizadosCards from './TruequesRealizadosCards';


function TabPanel(props) {
    const {
        children,
        value,
        index,
        ...other
    } = props;

    return (<div role="tabpanel"
        hidden={
            value !== index
        }
        id={
            `scrollable-auto-tabpanel-${index}`
        }
        aria-labelledby={
            `scrollable-auto-tab-${index}`
        }
        {...other}> {
        value === index && (<Box p={3}>
            <Typography> {children}</Typography>
        </Box>)
    } </div>);
}

TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.any.isRequired,
    value: PropTypes.any.isRequired
};

function a11yProps(index) {
    return {id: `scrollable-auto-tab-${index}`, 'aria-controls': `scrollable-auto-tabpanel-${index}`};
}

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        width: '100%',
        backgroundColor: theme.palette.background.paper
    }
}));

export default function ScrollableTabsButtonAuto() {
    const classes = useStyles();
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (<div className={
        classes.root
    }>
        <AppBar position="static" color="default">
            <Tabs value={value}
                onChange={handleChange}
                indicatorColor="primary"
                textColor="primary"
                scrollButtons="auto"
                aria-label="scrollable auto tabs example"
                centered>
                <Tab label="Trueques Realizados" {...a11yProps(0)}/>
                <Tab label="Trueques pendientes" {...a11yProps(1)}/>
                <Tab label="Solicitudes de truques" {...a11yProps(2)}/>

            </Tabs>
        </AppBar>
        <TabPanel value={value}
            index={0}>
            <div style={

                {
                    marginLeft: "4.7rem",
                    paddingTop: "2rem",
                    display: "grid",
                    gridTemplateRows: "1fr 1fr 1fr ",
                    gridTemplateColumns: "1fr 1fr 1fr",
                    gap: "50px",
                    height: "1000px"

                }
            }>
                <TruequesRealizadosCards/>
            </div>

        </TabPanel>
        <TabPanel value={value}
            index={1}>
            <div style={

                {
                    marginLeft: "4.7rem",
                    paddingTop: "2rem",
                    display: "grid",
                    gridTemplateRows: "1fr 1fr 1fr ",
                    gridTemplateColumns: "1fr 1fr 1fr",
                    gap: "50px",
                    height: "1000px"

                }
            }>
                <MisTrueques/>
            </div>


        </TabPanel>
        <TabPanel value={value}
            index={2}>
            <div style={

                {
                    marginLeft: "4.7rem",
                    paddingTop: "2rem",
                    display: "grid",
                    gridTemplateRows: "1fr 1fr 1fr ",
                    gridTemplateColumns: "1fr 1fr 1fr",
                    gap: "50px",
                    height: "1000px"

                }
            }>
                <SolicitudesTrueques/>
            </div>


        </TabPanel>

    </div>);
}
