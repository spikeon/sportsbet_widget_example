import {
    DownloadAppButton,
    DownloadAppContainer,
    DownloadAppContent,
    DownloadAppHeader
} from "./download-app.styles";

export const DownloadApp = ({close}) => (
    <DownloadAppContainer>
        <DownloadAppHeader>Continue on the SportsBet App!</DownloadAppHeader>
        <DownloadAppContent>
            In order to enter the contest, you must download the mobile app and create an account.
        </DownloadAppContent>
        <DownloadAppButton
            onClick={(event) => {event.preventDefault(); close();}}
            >Download App To Continue!</DownloadAppButton>
    </DownloadAppContainer>
);
