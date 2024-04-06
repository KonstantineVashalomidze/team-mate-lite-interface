import React from 'react';
import ListItem from './ListItem'; // Assuming ListItem component is in the same directory
import '../sytles/List.css'; // Importing CSS file for the list component

const List = ({ data }) => {
    return (
        <div className="list">
            {data.map(item => (
                <ListItem
                    teamPhotoURL={item.teamPhotoURL}
                    name ={item.name}
                    lastInteraction={"12 min"}
                />
            ))}
        </div>
    );
}

export default List;
