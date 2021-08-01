import React from "react";

type Props = {
    nameAuthor: string;
    dateCommit: string;
    messageCommit: string;
    urlCommit: string;
    branchToStartCommit: string;
};

const CommitCard: React.FC<Props> = ({
    nameAuthor, 
    dateCommit, 
    messageCommit, 
    urlCommit, 
    branchToStartCommit
}) => (
    <div>
        <div className="card" >
            <div className="card-body">
                <h5 className="card-title">{dateCommit}</h5>
                <h6 className="card-subtitle mb-2 text-muted">comitter: {nameAuthor}</h6>
                <p className="card-text">Commit: {messageCommit}</p>
                <a href={urlCommit} className="card-link">URL: {urlCommit}</a>
                <p className="card-link">ID: {branchToStartCommit}</p>
            </div>
        </div>
    </div>
);

export default CommitCard;