import React from "react";

type Props = {
    nameComitter: string;
    dateCommit: string;
    messageCommit: string;
    urlCommit: string;
    idCommit: string;
};

const CommitCard: React.FC<Props> = ({
    nameComitter, 
    dateCommit, 
    messageCommit, 
    urlCommit, 
    idCommit
}) => (
    <div>
        <div className="card" >
            <div className="card-body">
                <h5 className="card-title">{dateCommit}</h5>
                <h6 className="card-subtitle mb-2 text-muted">comitter: {nameComitter}</h6>
                <p className="card-text">Commit: {messageCommit}</p>
                <a href="/" className="card-link">URL: {urlCommit}</a>
                <a href="/" className="card-link">ID: {idCommit}</a>
            </div>
        </div>
    </div>
);

export default CommitCard;