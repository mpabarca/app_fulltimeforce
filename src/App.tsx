import React, {useState} from 'react';
import { fetchAPIGitHub } from './API';
// import CommitCard from './components/CommitCard';

const App = () => {
  const [loading, setLoading] = useState(false);
  const [commits, setCommits] = useState([]);

  console.log(fetchAPIGitHub());
  
  return (
    <div className="App">
      <h1>Dashboard</h1>
      {/* {commits.map(commit => (
        <CommitCard 
          nameComitter = {commit.commit.committer.name} 
          dateCommit = {commit.commit.committer.date} 
          messageCommit = {commit.commit.message}  
          urlCommit = {commit.commit.url} 
          idCommit = {commit.sha} 
        />  
      ))}     */}
    </div>
  );
}

export default App;
