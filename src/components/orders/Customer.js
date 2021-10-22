import React, { Fragment, useContext, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import "bootstrap/dist/css/bootstrap.min.css";
import Button from "@material-ui/core/Button";
import OrderContext from "../../context/orders/orderContext";


const useStyles = makeStyles((theme) => ({
    root: {
      "& .MuiFormLabel-root": {
        fontSize: 14,
        marginTop: -10,
      },
    },
    layout: {
      width: "auto",
      marginLeft: theme.spacing(2),
      marginRight: theme.spacing(2),
      [theme.breakpoints.up(600 + theme.spacing(2) * 2)]: {
        width: 600,
        marginLeft: "auto",
        marginRight: "auto",
      },
    },
 buttons: {
    display: "flex",
    justifyContent: "flex-end",
  },
  button: {
    marginTop: theme.spacing(3),
    marginLeft: theme.spacing(1),
  },
  formControl: {
    minWidth: 200,
  },
    paper: {
        marginTop: theme.spacing(3),
        marginBottom: theme.spacing(3),
        padding: theme.spacing(2),
        [theme.breakpoints.up(600 + theme.spacing(3) * 2)]: {
          marginTop: theme.spacing(6),
          marginBottom: theme.spacing(6),
          padding: theme.spacing(3),
        },
      },
  }));


const Customer = ()=>{
    const classes = useStyles();

    const orderContext = useContext(OrderContext);

    const {changeStep, step} = orderContext;

    const moveOnToTheNextStep = ()=> {
        const currentStep = step + 1;
        changeStep(currentStep);
    }

    return(
        <Fragment>
        <main className={classes.layout}>
        <h1>1.Cliente</h1>
               <Paper className={classes.paper}>
                <form>
              <div className="campos-obligatorios">
                <h3>Los campos marcados con * son obligatorios</h3>
              </div>
              <hr></hr>
              <br></br>
              <Grid container spacing={3}>
                <Grid item xs={12} sm={6}>
                  <TextField
                    required
                    id="nombre"
                    name="nombre"
                    label="Cedula"
                    className={classes.root}
                    fullWidth
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  Jorge Luis Vargas CC 1123456543
                </Grid>
              </Grid>
              <div className={classes.buttons}>
                <Button
                  href="/productos"
                  className={classes.button}
                >
                  Atras
                </Button>
                <Button
                  className={classes.button}
                  onClick={()=> moveOnToTheNextStep()}
                >
                  Continuar{" "}
                </Button>

                <Button
                  type="submit"
                  variant="contained"
                  color="primary"
                  className={classes.button}
                >
                  Buscar{" "}
                </Button>
              </div>
              </form>
            </Paper>
         </main>
      </Fragment>
    )
}
export default Customer;