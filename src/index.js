import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import AppComponent from './app.component';

document
    .getElementById('sportsbet_quiz_widget_container')
    .addEventListener('click', event => {
        event.preventDefault();
        const container = document.createElement("div");
        container.id = "sportsbet_quiz_modal_container";
        document.body.appendChild(container);

        ReactDOM.render(
            <React.StrictMode>
                <AppComponent />
            </React.StrictMode>,
            container
        );
    });