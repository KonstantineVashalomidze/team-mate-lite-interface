import React from 'react';
import '../sytles/ListItem.css'; // Importing CSS file for the list item component


// example <ListItem image={"https://scontent.ftbs6-2.fna.fbcdn.net/v/t39.30808-1/410162403_373859271687146_573242829385952404_n.jpg?stp=c0.0.100.100a_dst-jpg_p100x100&_nc_cat=105&ccb=1-7&_nc_sid=5f2048&_nc_ohc=UcyEcZ5xiDcAX-qbi4T&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.ftbs6-2.fna&oh=00_AfCQ_hj2m2CDXQoECAHTePEo4l1paHBmpO8_mwPnT3scQw&oe=660F1E22"} displayName={"Luka Gogiashvili"} lastInteraction={"12 min"}/>
const ListItem = ({ teamPhotoURL, name, lastInteraction, onClick }) => {
    return (
        <button className="list-item" onClick={onClick}>
            <img src={teamPhotoURL} alt="User Avatar" className="avatar" />
            <div className="info">
                <span className="display-name">{name}</span>
                <span className="last-interaction">{lastInteraction}</span>
            </div>
        </button>
    );
}

export default ListItem;
