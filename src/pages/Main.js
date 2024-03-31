import React from 'react';
import '../sytles/Main.css'
import List from "../components/List";
import SearchBar from "../components/SearchBar";

const Main = () => {

    return (
            <div className="main-container">
                <div className="main-container-left">
                    <div className="main-container-left-searchbar">
                        <SearchBar/>
                    </div>
                    <div className="main-container-left-list">
                        <List data={[
                            {
                                image: "https://scontent.ftbs6-2.fna.fbcdn.net/v/t39.30808-1/410162403_373859271687146_573242829385952404_n.jpg?stp=c0.0.100.100a_dst-jpg_p100x100&_nc_cat=105&ccb=1-7&_nc_sid=5f2048&_nc_ohc=UcyEcZ5xiDcAX-qbi4T&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.ftbs6-2.fna&oh=00_AfCQ_hj2m2CDXQoECAHTePEo4l1paHBmpO8_mwPnT3scQw&oe=660F1E22",
                                displayName: "Luka Gogiashvili",
                                lastInteraction: "12 min"
                            },
                            {
                                image: "https://scontent.ftbs6-2.fna.fbcdn.net/v/t39.30808-1/410162403_373859271687146_573242829385952404_n.jpg?stp=c0.0.100.100a_dst-jpg_p100x100&_nc_cat=105&ccb=1-7&_nc_sid=5f2048&_nc_ohc=UcyEcZ5xiDcAX-qbi4T&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.ftbs6-2.fna&oh=00_AfCQ_hj2m2CDXQoECAHTePEo4l1paHBmpO8_mwPnT3scQw&oe=660F1E22",
                                displayName: "Luka Gogiashvili",
                                lastInteraction: "12 min"
                            },
                            {
                                image: "https://scontent.ftbs6-2.fna.fbcdn.net/v/t39.30808-1/410162403_373859271687146_573242829385952404_n.jpg?stp=c0.0.100.100a_dst-jpg_p100x100&_nc_cat=105&ccb=1-7&_nc_sid=5f2048&_nc_ohc=UcyEcZ5xiDcAX-qbi4T&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.ftbs6-2.fna&oh=00_AfCQ_hj2m2CDXQoECAHTePEo4l1paHBmpO8_mwPnT3scQw&oe=660F1E22",
                                displayName: "Luka Gogiashvili",
                                lastInteraction: "12 min"
                            },
                            {
                                image: "https://scontent.ftbs6-2.fna.fbcdn.net/v/t39.30808-1/410162403_373859271687146_573242829385952404_n.jpg?stp=c0.0.100.100a_dst-jpg_p100x100&_nc_cat=105&ccb=1-7&_nc_sid=5f2048&_nc_ohc=UcyEcZ5xiDcAX-qbi4T&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.ftbs6-2.fna&oh=00_AfCQ_hj2m2CDXQoECAHTePEo4l1paHBmpO8_mwPnT3scQw&oe=660F1E22",
                                displayName: "Luka Gogiashvili",
                                lastInteraction: "12 min"
                            },
                            {
                                image: "https://scontent.ftbs6-2.fna.fbcdn.net/v/t39.30808-1/410162403_373859271687146_573242829385952404_n.jpg?stp=c0.0.100.100a_dst-jpg_p100x100&_nc_cat=105&ccb=1-7&_nc_sid=5f2048&_nc_ohc=UcyEcZ5xiDcAX-qbi4T&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.ftbs6-2.fna&oh=00_AfCQ_hj2m2CDXQoECAHTePEo4l1paHBmpO8_mwPnT3scQw&oe=660F1E22",
                                displayName: "Luka Gogiashvili",
                                lastInteraction: "12 min"
                            },
                            {
                                image: "https://scontent.ftbs6-2.fna.fbcdn.net/v/t39.30808-1/410162403_373859271687146_573242829385952404_n.jpg?stp=c0.0.100.100a_dst-jpg_p100x100&_nc_cat=105&ccb=1-7&_nc_sid=5f2048&_nc_ohc=UcyEcZ5xiDcAX-qbi4T&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.ftbs6-2.fna&oh=00_AfCQ_hj2m2CDXQoECAHTePEo4l1paHBmpO8_mwPnT3scQw&oe=660F1E22",
                                displayName: "Luka Gogiashvili",
                                lastInteraction: "12 min"
                            },
                            {
                                image: "https://scontent.ftbs6-2.fna.fbcdn.net/v/t39.30808-1/410162403_373859271687146_573242829385952404_n.jpg?stp=c0.0.100.100a_dst-jpg_p100x100&_nc_cat=105&ccb=1-7&_nc_sid=5f2048&_nc_ohc=UcyEcZ5xiDcAX-qbi4T&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.ftbs6-2.fna&oh=00_AfCQ_hj2m2CDXQoECAHTePEo4l1paHBmpO8_mwPnT3scQw&oe=660F1E22",
                                displayName: "Luka Gogiashvili",
                                lastInteraction: "12 min"
                            },
                            {
                                image: "https://scontent.ftbs6-2.fna.fbcdn.net/v/t39.30808-1/410162403_373859271687146_573242829385952404_n.jpg?stp=c0.0.100.100a_dst-jpg_p100x100&_nc_cat=105&ccb=1-7&_nc_sid=5f2048&_nc_ohc=UcyEcZ5xiDcAX-qbi4T&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.ftbs6-2.fna&oh=00_AfCQ_hj2m2CDXQoECAHTePEo4l1paHBmpO8_mwPnT3scQw&oe=660F1E22",
                                displayName: "Luka Gogiashvili",
                                lastInteraction: "12 min"
                            },
                            {
                                image: "https://scontent.ftbs6-2.fna.fbcdn.net/v/t39.30808-1/410162403_373859271687146_573242829385952404_n.jpg?stp=c0.0.100.100a_dst-jpg_p100x100&_nc_cat=105&ccb=1-7&_nc_sid=5f2048&_nc_ohc=UcyEcZ5xiDcAX-qbi4T&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.ftbs6-2.fna&oh=00_AfCQ_hj2m2CDXQoECAHTePEo4l1paHBmpO8_mwPnT3scQw&oe=660F1E22",
                                displayName: "Luka Gogiashvili",
                                lastInteraction: "12 min"
                            },
                            {
                                image: "https://scontent.ftbs6-2.fna.fbcdn.net/v/t39.30808-1/410162403_373859271687146_573242829385952404_n.jpg?stp=c0.0.100.100a_dst-jpg_p100x100&_nc_cat=105&ccb=1-7&_nc_sid=5f2048&_nc_ohc=UcyEcZ5xiDcAX-qbi4T&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.ftbs6-2.fna&oh=00_AfCQ_hj2m2CDXQoECAHTePEo4l1paHBmpO8_mwPnT3scQw&oe=660F1E22",
                                displayName: "Luka Gogiashvili",
                                lastInteraction: "12 min"
                            }
                        ]}/>
                    </div>
                </div>
                <div className="main-container-middle">
                    <div className="main-container-middle-topbar" >

                    </div>
                    <div className="main-container-middle-chat" >

                    </div>
                </div>
                <div className="main-container-right">
                    <div className="main-container-right-imageandname" >

                    </div>
                    <div className="main-container-right-listmembers" >

                    </div>
                </div>



            </div>
    );
};

export default Main;
