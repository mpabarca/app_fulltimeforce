import React from "react";

type Props = {
    nameAuthor: string;
    dateCommit: {
        quantity: number
        unit: string
        date: string
        more30days: boolean
    };
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
}) => {
    return (
            <div className="commit-card d-flex justify-content-center">
                <div className="card col-8">
                    <div className="card-body">
                        <h5 className="card-title">committed {!dateCommit.more30days ? `${dateCommit.quantity} ${dateCommit.unit} ago` : `on ${dateCommit.date}`}</h5>
                        <h6 className="card-subtitle mb-2 text-muted">comitter: {nameAuthor}</h6>
                        <p className="card-text">Commit: {messageCommit}</p>
                        <a href={urlCommit} className="card-link">URL: {urlCommit}</a>
                        <p className="card-link">ID: {branchToStartCommit}</p>
                    </div>
                </div>
            </div>
        )
}

    

export default CommitCard;