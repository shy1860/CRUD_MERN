import React, { Component } from 'react';
import AppBar from '../_components/appbar';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Nav from '../_components/nav';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import { connect } from 'react-redux';
import { roomAction } from '../_actions';
import { withRouter } from 'react-router-dom';
const drawerWidth = 240;
const styles = theme => ({
    root: {
        flexGrow: 1,
    },
    contentRoot: {
        ...theme.mixins.gutters(),
        paddingTop: theme.spacing.unit * 2,
        paddingBottom: theme.spacing.unit * 2,
    },
    appFrame: {
        zIndex: 1,
        overflow: 'hidden',
        position: 'relative',
        display: 'flex',
        width: '100%',
    },
    appBar: {
        width: `calc(100% - ${drawerWidth}px)`,
    },
    'appBar-left': {
        marginLeft: drawerWidth,
    },
    'appBar-right': {
        marginRight: drawerWidth,
    },
    drawerPaper: {
        position: 'relative',
        width: drawerWidth,
    },
    toolbar: theme.mixins.toolbar,
    content: {
        flexGrow: 1,
        backgroundColor: theme.palette.background.default,
        padding: theme.spacing.unit * 3,
    },
});
class AddRoom extends Component {
    handleChange = prop => event => {
        const { dispatch } = this.props;
        dispatch(roomAction.onChangeProps(prop, event));
    };
    componentDidMount() {
        const { match : { params } } = this.props;
        if(params.id){
            const { dispatch } = this.props;
            dispatch(roomAction.getRoomById(params.id));
        }
    }
    handleClick(event){
        const { match : { params } } = this.props;
        const { dispatch } = this.props;
        let payload={
            room_name: this.props.room.room_name,
            status: this.props.room.status
            
        }
        if(params.id){
            dispatch(roomAction.editRoomInfo(params.id, payload));
        }else{
            dispatch(roomAction.createRoom(payload));
        }
    }
    render() {
        const { classes } = this.props;
        const { match : { params } } = this.props;
        function InsertText(props) {
            return <Typography>{'Add New Room'}</Typography>;
        }

        function EditText(props) {
            return <Typography>{'Edit Room'}</Typography>;
        }
        function SegHeader() {
            if(params.id){
                return <EditText />;
                
            }
            return <InsertText />;
        }
        return (
            <div className={classes.root}>
               <div className={classes.appFrame}>
                  <AppBar/>
                  <Nav />
                  <main className={classes.content}>
                      <div className={classes.toolbar} />
                      <Grid container spacing={24}>
                         <Grid item xs={3}>
                            <SegHeader />
                         </Grid>
                         <Grid item xs={6}>
                         </Grid>
                         <Grid item xs={3} container justify="flex-end">
                         </Grid>
                     </Grid>
                     <br /><br />
                     <Grid container spacing={24}>
                        <Grid item xs={12}>
                        <div>
                          <Paper className={classes.contentRoot} elevation={1}>
                             <form className={classes.container}>
                                <Grid container spacing={24}>
                                   <Grid item xs={3}>
                                      <TextField
                                       id="name"
                                       label="Name"
                                       className={classes.textField}
                                       value={this.props.room.room_name}
                                       onChange={this.handleChange('room_name')}
                                       margin="normal"
                                      />
                                   </Grid>
                                   <Grid item xs={3}>
                                   <TextField
                                       id="status"
                                       label="Status"
                                       className={classes.textField}
                                       value={this.props.room.status}
                                       onChange={this.handleChange('status')}
                                       margin="normal"
                                      />
                                   </Grid>
                                   {/* <Grid item xs={3}>
                                      <TextField
                                       id="phone_number"
                                       label="Phone"
                                       className={classes.textField}
                                       value={this.props.room.phone_number}
                                       onChange={this.handleChange('phone_number')}
                                       margin="normal"
                                      />
                                   </Grid>
                                   <Grid item xs={3}>
                                      <TextField
                                       id="address"
                                       label="Address"
                                       multiline
                                       rowsMax="4"
                                       className={classes.textField}
                                       value={this.props.room.address}
                                       onChange={this.handleChange('address')}
                                       margin="normal"
                                      />
                                </Grid> */}
                                </Grid> 
                                <br />
                                <Grid container spacing={24}>
                                   <Grid item xs={3}>
                                   </Grid>
                                   <Grid item xs={6}>
                                   </Grid>
                                   <Grid item xs={3} container justify="center">
                                      <Grid container spacing={24}>
                                         <Grid item xs={6} container justify="center">
                                            <Button variant="contained" color="secondary" className={classes.button} component='a' href="/room">Cancel</Button>
                                         </Grid>
                                         <Grid item xs={6} container justify="flex-start">
                                            <Button variant="contained" color="primary" className={classes.button} onClick={(event) => this.handleClick(event)}>Save</Button>
                                         </Grid>
                                      </Grid>
                                   </Grid>
                                </Grid>
                             </form>
                           </Paper>
                         </div>
                       </Grid>
                     </Grid>
                  </main>
                </div>
              </div>
        );
    }
}
AddRoom.propTypes = {
    classes: PropTypes.object.isRequired,
};
const mapStateToProps = (state) =>{
    return state;
}

const connectedAddRoomPage = withRouter(connect(mapStateToProps, null, null, {
    pure: false
})(withStyles(styles)(AddRoom)));
export { connectedAddRoomPage as AddRoom };