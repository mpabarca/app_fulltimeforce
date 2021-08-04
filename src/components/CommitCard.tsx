/* eslint-disable jsx-a11y/img-redundant-alt */
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
    avatar_url: string;
};

const CommitCard: React.FC<Props> = ({
    nameAuthor, 
    dateCommit, 
    messageCommit, 
    urlCommit, 
    branchToStartCommit,
    avatar_url
}) => {
    return (
            
            <div className="commit-card d-flex justify-content-center">
                <div className="card col-8 p-3">
                    <div className="card-description d-flex flex-row flex-wrap w-100">
                        <p className="tittle-commit col-12"><a href={urlCommit}>{messageCommit}</a></p>
                        <div className="card-info d-flex align-items-center col-9">
                            <div className="profile-author align-self-start me-1">
                                <img height="20" width="20" src={avatar_url} alt="image-author" />
                            </div>
                            <div className="commit-description d-flex flex-row align-items-center flex-wrap">
                                <a href="/AQUI AUTHOR LINK" className="me-1 align-items-center"><strong>{nameAuthor}</strong></a>
                                commited 
                                {!dateCommit.more30days ? ` ${dateCommit.quantity} ${dateCommit.unit} ago ` : ` on ${dateCommit.date} `}
                            </div>

                        </div>
                        <div className="branch-description col-2">
                            <div className="btnGroup">
                                <a href={urlCommit} className="btn">{branchToStartCommit.slice(0,7)}</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
}

/*<div className="commit-card d-flex justify-content-center">
    <div className="card col-8">
        <div className="card-body">
            <h4 className="card-title">{messageCommit}</h4>
            <div className="card-description d-flex flex-row align-items-center">
                <div className="col-1"><img height="30" width="30" src={avatar_url} alt="image-author" /></div>
                <div className="card-info col-11 d-flex flex-row">
                    <p className="card-text p-2">
                        <strong>{nameAuthor}</strong>
                        {" "}
                        committed
                        {!dateCommit.more30days ? `${dateCommit.quantity} ${dateCommit.unit} ago` : `on ${dateCommit.date}`}
                    </p>
                    <p className="card-link ms-auto p-2"><a href={urlCommit}>{branchToStartCommit.slice(0,7)}</a></p>
                </div>
            </div>
        </div>
    </div>
</div>*/

export default CommitCard;