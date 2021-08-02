import React, {useEffect, useState} from 'react';
import { fetchAPIGitHub, CommitData } from './API';
import { getDifferenceBetweenDates } from './util';
import CommitCard from './components/CommitCard';

const App = () => {
  const [loading, setLoading] = useState<boolean>(true);
  const [commits, setCommits] = useState<CommitData[]>([]);

  const getDataCommits = async () => {
    const data: CommitData[] = await fetchAPIGitHub();
    if (data != null) setCommits(data);
    setLoading(false);
  };

  useEffect(()=> {
    getDataCommits();
  },[]);

  const refresh = () => {
    setLoading(true);
    getDataCommits();    
  };
  
  return (
    <div className="App d-flex">
      {loading ? (<p>cargando ... </p>) : (
        <div className="d-flex content-wrapper">
          <div className="sidebar-container">
              <div className="logo">
                  <h4>Show GIT Commits</h4>
              </div>
              <div className="menu">
                <button type="button" onClick={() => refresh()}>Refresh</button>
              </div>
          </div>
          <div className="d-flex flex-column">
            {commits.map(item => (
              <CommitCard 
                nameAuthor = {item.author.login}
                dateCommit = {getDifferenceBetweenDates(item.commit.author.date)}
                messageCommit = {item.commit.message}
                urlCommit = {item.url}
                branchToStartCommit = {item.sha}
              />  
            ))} 
          </div>   
        </div> 
      )}
    </div>
  );
}

export default App;
