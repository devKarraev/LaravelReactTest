import React, {useState, useEffect} from "react"
import "./Sport.css"
import CategoryRow from "../../../components/CategoryRow/CategoryRow";

export default function Sport() {
    let [posts, setPost] = useState([])

    useEffect(() => {
        fetch("/api/category/sport")
            .then(data => data.json())
            .then(posts => setPost(posts))
    }, [])

    return (
        <div className="Sport">
            <div className="container">
                <div className="row">
                    <div className="cold-md-8">
                        <h1 style={{marginBottom: "40px"}}>Sport category</h1>
                    </div>
                </div>
                { posts.length === 0 && <div className="lds-dual-ring"></div> }
                { posts.map((post, idx) => (
                    <CategoryRow
                        title={post.title}
                        id={post.id}
                        excerpt={post.excerpt}
                        key={idx}/>
                ))}
            </div>
        </div>
    )
}
