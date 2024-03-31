import React from 'react';
import ListItem from './ListItem'; // Assuming ListItem component is in the same directory
import '../sytles/List.css'; // Importing CSS file for the list component

const List = ({ data }) => {
    return (
        <div className="list">
            {data.map(item => (
                <ListItem
                    image={item.image}
                    displayName={item.displayName}
                    lastInteraction={item.lastInteraction}
                />
            ))}
        </div>
    );
}

export default List;
