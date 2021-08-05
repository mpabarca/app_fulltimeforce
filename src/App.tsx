import React, {useEffect, useState} from "react";
import { fetchAPIGitHub, CommitData } from "./API";
import { getDifferenceBetweenDates } from "./util";
import CommitCard from "./components/CommitCard";

const App = () => {
  const [loading, setLoading] = useState<boolean>(true);
  const [success, setSuccess] = useState<boolean>(true);
  const [commits, setCommits] = useState<CommitData[]>([]);

  const getDataCommits = async () => {
    const response = await fetch("/api_commit");
    const body = await response.json();

    if (body.success && body.data !== null) {
      setCommits(body.data);
      setLoading(false);
    } else {
      setSuccess(false);
      setLoading(false);
    }

    if (response.status !== 200) {
      throw Error(body.message) 
    }
    return body;
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
        <div className="d-flex content-wrapper w-100">
          <div className="sidebar-container d-flex flex-column justify-content-between">
              <div className="logo align-self-center">
                  <h4>Show GIT Commits</h4>
              </div>
              <div className="menu align-self-center">
                <button type="button" className="btn btn-primary" onClick={() => refresh()}>Refresh</button>
              </div>
          </div>
          <nav className="navbar navbar-light">
            <div className="container-fluid d-flex flex-row justify-content-between">
              <div className="logo align-self-center">
                  <h4>Show GIT Commits</h4>
              </div>
              <div className="menu align-self-center">
                <button type="button" className="btn btn-primary" onClick={() => refresh()}>Refresh</button>
              </div>
            </div>
          </nav>
          <div className="dashboard-content d-flex flex-column w-100">
            {loading ? (
              <div className="loading d-flex justify-content-center align-items-center">
                <div className="spinner-border text-primary" role="status">
                  <span className="visually-hidden">Loading...</span>
                </div>
              </div>) : (
              commits.map(item => (
                <CommitCard 
                  nameAuthor = {item.author.login}
                  dateCommit = {getDifferenceBetweenDates(item.commit.author.date)}
                  messageCommit = {item.commit.message}
                  urlCommit = {item.html_url}
                  branchToStartCommit = {item.sha}
                  avatar_url = {item.author.avatar_url}
                  author_profile = {item.author.html_url}
                />  
              )) 
            )}
          </div> 
        </div> 
    </div>
  );
}

export default App;
