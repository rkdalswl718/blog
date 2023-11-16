import React from "react";
import Fire from "../img/fire.svg";
import "../components/css/post.css";

const Post = () => {
const Posts = [
{
id: 1,
img: "https://i.pinimg.com/564x/38/98/a7/3898a7aa20f4af6a42326fc115a49ee7.jpg",
timestamp: "2023-11-15T12:30:00Z",
title: "첫 번째 글",
content: "시발인생",
hashtags: ["집가고싶다", "리액트애기"],
},
{
id: 2,
img: "https://i.pinimg.com/564x/38/98/a7/3898a7aa20f4af6a42326fc115a49ee7.jpg",
timestamp: "2023-11-15T14:45:00Z",
title: "두 번째 글",
content: "자퇴하고싶다",
hashtags: ["Life", "앙"],
},
{
id: 3,
img: "https://i.pinimg.com/564x/38/98/a7/3898a7aa20f4af6a42326fc115a49ee7.jpg",
timestamp: "2023-11-15T16:20:00Z",
title: "세 번째 글",
content: "웅애",
hashtags: ["Randomㅇㅇ"],
},
{
id: 4,
img: "https://i.pinimg.com/564x/38/98/a7/3898a7aa20f4af6a42326fc115a49ee7.jpg",
timestamp: "2023-13-15T16:20:00Z",
title: "444 번째 글",
content: "웅sdas애",
hashtags: ["chooooo"],
},
{
id: 4,
img: "https://i.pinimg.com/564x/38/98/a7/3898a7aa20f4af6a42326fc115a49ee7.jpg",
timestamp: "2023-13-15T16:20:00Z",
title: "444 번째 글",
content: "웅sdas애",
hashtags: ["chooooo"],
},
];

return (
<div className="Post_Post">
    <div className="Post_Popular">
        <img src={Fire} className="Post_fire" alt="" />
        <h3 className="Post_Hot">HOT</h3>
    </div>
    <div className="Post_map">
        {Posts.map((item) => (
            <div className="Post_box">
                <img src={item.img} className="Post_img" alt="" />
            <div key={item.timestamp} className="Post_item">
            <span className="Post_timestamp">{new Date(item.timestamp).toLocaleString()}</span>
            <h2>{item.title}</h2>
            <p>{item.content}</p>
            <div className="Post_Metadata">
                <div className="Post_Hashtags">
                    {item.hashtags.map((tag, id) => (
                        <span key={id} className="Post_Hashtag">{tag}</span>
                    ))}
                </div>
            </div>
        </div>
        </div>
))}

</div>
</div>
);
};

export default Post;
