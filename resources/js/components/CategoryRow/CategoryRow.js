import React, {useState} from "react"
import { withRouter } from "react-router-dom"
import "./CategoryRow.css"

const CategoryRow = (props) => {
    let [post, setPost] = useState([])

    const openPost = id => {
        const url = `/api/post/${id}`
        fetch(url, {
            headers: {
                'Content-Type': 'application/json'
            },
            method: "POST",
            body: JSON.stringify(id)
        })
            .then(data => data.json())
            .then(post => {
                props.history.push({
                    pathname: `/post/${id}`,
                    state: post[0]
                })
            })
    }

    return (
        <div className="CategoryRow row justify-content-center">
            <div className="col-sm-8">
                <div className="card" onClick={openPost.bind(null, props.id)}>
                    <div className="card-body">
                        <h5 className="card-title">{ props.title }</h5>
                        <p className="card-text">{ props.excerpt }</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default withRouter(CategoryRow)
