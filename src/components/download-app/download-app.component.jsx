import {DownloadAppButton, DownloadAppContainer} from "./download-app.styles";

export const DownloadApp = ({close}) => (
    <DownloadAppContainer>
        <h2>Continue on the SportsBet App!</h2>
        <p>
            In order to enter the contest, you must download the mobile app and create an account.
        </p>
        <DownloadAppButton
            onClick={(event) => {event.preventDefault(); close();}}
            >Download App To Continue!</DownloadAppButton>
    </DownloadAppContainer>
);
