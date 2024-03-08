import React from 'react';
import './App.css';
import data from './CollegeBasketballTeams.json';
import NCAALogo from './March_Madness_logo.svg.png'; // Importing the image

interface TeamProps {
  school: string;
  name: string;
  city: string;
  state: string;
}

class Team extends React.Component<TeamProps> {
  render() {
    const oneTeam = this.props;

    return (
      <div>
        <h2>School: {oneTeam.school}</h2>
        <h4>Mascot: {oneTeam.name}</h4>
        <h4>
          Location: {oneTeam.city}, {oneTeam.state}
        </h4>
      </div>
    );
  }
}

function Picture() {
  return (
    <div>
      <img src={NCAALogo} alt="NCAA March madness logo" />
    </div>
  );
}

function TeamList() {
  return (
    <div>
      {data.teams.map((oneTeam) => (
        <Team {...oneTeam} />
      ))}
    </div>
  );
}

function Welcome() {
  return (
    <div>
      <h1>WELCOME TO MARCH MADNESS!!</h1>
      <h2>
        This website lists out the name, mascot, and location for each NCAA
        Basketball team
      </h2>
    </div>
  );
}

function App() {
  return (
    <div className="App">
      <Welcome />
      <Picture />
      <TeamList />
    </div>
  );
}

export default App;
