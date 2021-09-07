import React from 'react';
import ReactDOM from 'react-dom';
// [100,300,400,500,700,900]
import "@fontsource/roboto/100.css";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import "@fontsource/roboto/900.css";
import "./css/style.css";
import Grid from "./components/Grid"
import Header from "./components/Header-components/Header.js"
import Main from "./components/Main"

ReactDOM.render(
    <React.StrictMode>
        <>
            <Grid>
                <Header />
                <Main/>
                <div>Footer</div>
            </Grid>
        </>
    </React.StrictMode>,
    document.getElementById('root')
);

