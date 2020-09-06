import React from "react"
import {withRouter, Redirect} from "react-router-dom"

const PostView = (props) => {
    if (isNaN(Number(props.match.params.id))) {
        return <Redirect to="/"/>
    }

    const getDate = () => {
        const date = new Date()
        return date.toDateString(props.location.state.created_at)
    }

    return (
        <div className="CategoryRow row justify-content-center">
            <div className="col-sm-8">
                <div className="card">
                    <div className="card-body">
                        <h5 className="card-title">{props.location.state.title} </h5>
                        <p className="card-text">{props.location.state.content}</p>
                        <p style={{color: "#ccc"}} className="text-right">{getDate()}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default withRouter(PostView)
