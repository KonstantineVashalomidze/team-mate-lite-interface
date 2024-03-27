import React, { useState } from 'react';
import Navbar from '../components/NavBar';


// Individual Team component
const Team = ({ team, onClick }) => {
  return (
    <div onClick={() => onClick(team.id)}>
      <h3>{team.name}</h3>
      <p>{team.description}</p>
    </div>
  );
};

// Individual Chat component
const Chat = ({ team }) => {
  return (
    <div>
      <h2>Chat with {team.name}</h2>
      {/* Display chat messages here */}
    </div>
  );
};

// Main Conversation component
const Conversation = ({ teams }) => {
  const [selectedTeamId, setSelectedTeamId] = useState(null);

  const handleTeamClick = (teamId) => {
    setSelectedTeamId(teamId);
  };

  return (
    <div>
      <Navbar />
      <div>
        <div>
          {teams.map((team) => (
            <Team key={team.id} team={team} onClick={handleTeamClick} />
          ))}
        </div>
      </div>
      <div>
        {selectedTeamId && (
          <Chat team={teams.find((team) => team.id === selectedTeamId)} />
        )}
      </div>
    </div>
  );
};

export default Conversation;
