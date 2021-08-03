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
      
        <div className="d-flex content-wrapper w-100">
          <div className="sidebar-container d-flex flex-column justify-content-between">
              <div className="logo align-self-center">
                  <h4>Show GIT Commits</h4>
              </div>
              <div className="menu align-self-center">
                <button type="button" className="btn btn-primary" onClick={() => refresh()}>Refresh</button>
              </div>
          </div>
          <div className="dashboard-content d-flex flex-column w-100">
            {loading ? (<p>cargando ... </p>) : (
              commits.map(item => (
                <CommitCard 
                  nameAuthor = {item.author.login}
                  dateCommit = {getDifferenceBetweenDates(item.commit.author.date)}
                  messageCommit = {item.commit.message}
                  urlCommit = {item.html_url}
                  branchToStartCommit = {item.sha}
                />  
              )) 
            )}
          </div> 
        </div> 
    </div>
  );
}

export default App;
