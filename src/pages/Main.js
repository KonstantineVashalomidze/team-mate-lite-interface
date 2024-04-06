import React from 'react';
import '../sytles/Main.css'
import List from "../components/List";
import SearchBar from "../components/SearchBar";
import Chat from "../components/Chat";
import Navbar from "../components/NavBar";
import ChatTopBar from "../components/ChatTopBar";
import ChatInputField from "../components/ChatInputField";
import {teamsReducer} from "../redux/state/TeamState";
import {teamStore} from "../redux/store";

const Main = () => {

    return (
        <>
            <div className="navbar">
                <Navbar/>
            </div>
            <div className="main-container">
                <div className="main-container-left">
                    <div className="main-container-left-searchbar">
                        <SearchBar/>
                    </div>
                    <div className="main-container-left-list">
                        <List data={
                            teamStore.getState().teams
                        }/>
                    </div>
                </div>
                <div className="main-container-middle">
                    <div className="main-container-middle-topbar">
                        <ChatTopBar image={"https://scontent.ftbs6-2.fna.fbcdn.net/v/t39.30808-1/410162403_373859271687146_573242829385952404_n.jpg?stp=c0.0.100.100a_dst-jpg_p100x100&_nc_cat=105&ccb=1-7&_nc_sid=5f2048&_nc_ohc=UcyEcZ5xiDcAX-qbi4T&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.ftbs6-2.fna&oh=00_AfCQ_hj2m2CDXQoECAHTePEo4l1paHBmpO8_mwPnT3scQw&oe=660F1E22"} status={"Active"} name={"Luka Gogiashvili"} />
                    </div>
                    <div className="main-container-middle-chat">
                        <Chat messages={[
                            {
                                content: {
                                    senderImage: "https://scontent.ftbs6-2.fna.fbcdn.net/v/t39.30808-1/410162403_373859271687146_573242829385952404_n.jpg?stp=c0.0.100.100a_dst-jpg_p100x100&_nc_cat=105&ccb=1-7&_nc_sid=5f2048&_nc_ohc=UcyEcZ5xiDcAX-qbi4T&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.ftbs6-2.fna&oh=00_AfCQ_hj2m2CDXQoECAHTePEo4l1paHBmpO8_mwPnT3scQw&oe=660F1E22",
                                    displayName: "Luka Gogiashvili",
                                    text: "alosdfsdfsad",
                                    time: "11:11"
                                }, belongsMe: true
                            },
                            {
                                content: {
                                    senderImage: "https://scontent.ftbs6-2.fna.fbcdn.net/v/t39.30808-1/410162403_373859271687146_573242829385952404_n.jpg?stp=c0.0.100.100a_dst-jpg_p100x100&_nc_cat=105&ccb=1-7&_nc_sid=5f2048&_nc_ohc=UcyEcZ5xiDcAX-qbi4T&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.ftbs6-2.fna&oh=00_AfCQ_hj2m2CDXQoECAHTePEo4l1paHBmpO8_mwPnT3scQw&oe=660F1E22",
                                    displayName: "Luka Gogiashvili",
                                    text: "alosdfsdfsad",
                                    time: "11:11"
                                }, belongsMe: true
                            },
                            {
                                content: {
                                    senderImage: "https://scontent.ftbs6-2.fna.fbcdn.net/v/t39.30808-1/410162403_373859271687146_573242829385952404_n.jpg?stp=c0.0.100.100a_dst-jpg_p100x100&_nc_cat=105&ccb=1-7&_nc_sid=5f2048&_nc_ohc=UcyEcZ5xiDcAX-qbi4T&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.ftbs6-2.fna&oh=00_AfCQ_hj2m2CDXQoECAHTePEo4l1paHBmpO8_mwPnT3scQw&oe=660F1E22",
                                    displayName: "Luka Gogiashvili",
                                    text: "alosdfsdfsad",
                                    time: "11:11"
                                }, belongsMe: true
                            },
                            {
                                content: {
                                    senderImage: "https://scontent.ftbs6-2.fna.fbcdn.net/v/t39.30808-1/410162403_373859271687146_573242829385952404_n.jpg?stp=c0.0.100.100a_dst-jpg_p100x100&_nc_cat=105&ccb=1-7&_nc_sid=5f2048&_nc_ohc=UcyEcZ5xiDcAX-qbi4T&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.ftbs6-2.fna&oh=00_AfCQ_hj2m2CDXQoECAHTePEo4l1paHBmpO8_mwPnT3scQw&oe=660F1E22",
                                    displayName: "Luka Gogiashvili",
                                    text: "alosdfsdfsad",
                                    time: "11:11"
                                }, belongsMe: true
                            },
                            {
                                content: {
                                    senderImage: "https://scontent.ftbs6-2.fna.fbcdn.net/v/t39.30808-1/410162403_373859271687146_573242829385952404_n.jpg?stp=c0.0.100.100a_dst-jpg_p100x100&_nc_cat=105&ccb=1-7&_nc_sid=5f2048&_nc_ohc=UcyEcZ5xiDcAX-qbi4T&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.ftbs6-2.fna&oh=00_AfCQ_hj2m2CDXQoECAHTePEo4l1paHBmpO8_mwPnT3scQw&oe=660F1E22",
                                    displayName: "Luka Gogiashvili",
                                    text: "alosdfsdfsad",
                                    time: "11:11"
                                }, belongsMe: true
                            },
                            {
                                content: {
                                    senderImage: "https://scontent.ftbs6-2.fna.fbcdn.net/v/t39.30808-1/410162403_373859271687146_573242829385952404_n.jpg?stp=c0.0.100.100a_dst-jpg_p100x100&_nc_cat=105&ccb=1-7&_nc_sid=5f2048&_nc_ohc=UcyEcZ5xiDcAX-qbi4T&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.ftbs6-2.fna&oh=00_AfCQ_hj2m2CDXQoECAHTePEo4l1paHBmpO8_mwPnT3scQw&oe=660F1E22",
                                    displayName: "Luka Gogiashvili",
                                    text: "alosdfsdfsad",
                                    time: "11:11"
                                }, belongsMe: true
                            },
                            {
                                content: {
                                    senderImage: "https://scontent.ftbs6-2.fna.fbcdn.net/v/t39.30808-1/410162403_373859271687146_573242829385952404_n.jpg?stp=c0.0.100.100a_dst-jpg_p100x100&_nc_cat=105&ccb=1-7&_nc_sid=5f2048&_nc_ohc=UcyEcZ5xiDcAX-qbi4T&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.ftbs6-2.fna&oh=00_AfCQ_hj2m2CDXQoECAHTePEo4l1paHBmpO8_mwPnT3scQw&oe=660F1E22",
                                    displayName: "Luka Gogiashvili",
                                    text: "alosdfsdfsad",
                                    time: "11:11"
                                }, belongsMe: true
                            },
                            {
                                content: {
                                    senderImage: "https://scontent.ftbs6-2.fna.fbcdn.net/v/t39.30808-1/410162403_373859271687146_573242829385952404_n.jpg?stp=c0.0.100.100a_dst-jpg_p100x100&_nc_cat=105&ccb=1-7&_nc_sid=5f2048&_nc_ohc=UcyEcZ5xiDcAX-qbi4T&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.ftbs6-2.fna&oh=00_AfCQ_hj2m2CDXQoECAHTePEo4l1paHBmpO8_mwPnT3scQw&oe=660F1E22",
                                    displayName: "Luka Gogiashvili",
                                    text: "alosdfsdfsad",
                                    time: "11:11"
                                }, belongsMe: true
                            },
                            {
                                content: {
                                    senderImage: "https://scontent.ftbs6-2.fna.fbcdn.net/v/t39.30808-1/410162403_373859271687146_573242829385952404_n.jpg?stp=c0.0.100.100a_dst-jpg_p100x100&_nc_cat=105&ccb=1-7&_nc_sid=5f2048&_nc_ohc=UcyEcZ5xiDcAX-qbi4T&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.ftbs6-2.fna&oh=00_AfCQ_hj2m2CDXQoECAHTePEo4l1paHBmpO8_mwPnT3scQw&oe=660F1E22",
                                    displayName: "Luka Gogiashvili",
                                    text: "alosdfsdfsad",
                                    time: "11:11"
                                }, belongsMe: true
                            },
                            {
                                content: {
                                    senderImage: "https://scontent.ftbs6-2.fna.fbcdn.net/v/t39.30808-1/410162403_373859271687146_573242829385952404_n.jpg?stp=c0.0.100.100a_dst-jpg_p100x100&_nc_cat=105&ccb=1-7&_nc_sid=5f2048&_nc_ohc=UcyEcZ5xiDcAX-qbi4T&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.ftbs6-2.fna&oh=00_AfCQ_hj2m2CDXQoECAHTePEo4l1paHBmpO8_mwPnT3scQw&oe=660F1E22",
                                    displayName: "Luka Gogiashvili",
                                    text: "alosdfsdfsad",
                                    time: "11:11"
                                }, belongsMe: false
                            },
                            {
                                content: {
                                    senderImage: "https://scontent.ftbs6-2.fna.fbcdn.net/v/t39.30808-1/410162403_373859271687146_573242829385952404_n.jpg?stp=c0.0.100.100a_dst-jpg_p100x100&_nc_cat=105&ccb=1-7&_nc_sid=5f2048&_nc_ohc=UcyEcZ5xiDcAX-qbi4T&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.ftbs6-2.fna&oh=00_AfCQ_hj2m2CDXQoECAHTePEo4l1paHBmpO8_mwPnT3scQw&oe=660F1E22",
                                    displayName: "Luka Gogiashvili",
                                    text: "alosdfsdfsad",
                                    time: "11:11"
                                }, belongsMe: true
                            },
                            {
                                content: {
                                    senderImage: "https://scontent.ftbs6-2.fna.fbcdn.net/v/t39.30808-1/410162403_373859271687146_573242829385952404_n.jpg?stp=c0.0.100.100a_dst-jpg_p100x100&_nc_cat=105&ccb=1-7&_nc_sid=5f2048&_nc_ohc=UcyEcZ5xiDcAX-qbi4T&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.ftbs6-2.fna&oh=00_AfCQ_hj2m2CDXQoECAHTePEo4l1paHBmpO8_mwPnT3scQw&oe=660F1E22",
                                    displayName: "Luka Gogiashvili",
                                    text: "alosdfsdfsad",
                                    time: "11:11"
                                }, belongsMe: false
                            }
                        ]}/>
                    </div>
                    <div className="main-container-middle-input-field">
                        <ChatInputField />
                    </div>
                </div>
                <div className="main-container-right">
                    <div className="main-container-right-imageandname">
                        <h2>helol</h2>
                    </div>
                    <div className="main-container-right-listmembers">
                        <h2>hellsssd</h2>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Main;
