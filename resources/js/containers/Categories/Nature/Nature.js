import React, {useEffect, useState} from "react"
import CategoryRow from "../../../components/CategoryRow/CategoryRow";
import "./Nature.css"

export default function Nature() {
    let [posts, setPost] = useState([])

    useEffect(() => {
        fetch("/api/category/nature")
            .then(data => data.json())
            .then(posts => setPost(posts))
    }, [])

    return (
        <div className="Nature">
            <div className="container">
                <div className="row">
                    <div className="cold-md-8">
                        <h1 style={{marginBottom: "40px"}}>Nature category</h1>
                    </div>
                </div>
                { posts.length === 0 && <div className="lds-dual-ring"></div> }
                { posts.map((post, idx) => (
                    <CategoryRow
                        title={ post.title }
                        excerpt={ post.excerpt }
                        key={ idx }
                        id={ post.id }
                    />
                    ))}
            </div>
        </div>
    )
}
