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
    <div className="App">
      {loading ? (<p>cargando ... </p>) : (
        <div>
          <h1>Dashboard</h1>
          <button type="button" onClick={() => refresh()}>Refresh</button>
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
      )}
    </div>
  );
}

export default App;
