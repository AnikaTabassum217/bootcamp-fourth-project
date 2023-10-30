import React from "react";

// const Photos=({ photos })=>{
// const{albumId,id,title,url,thumbnailUrl}=photos
//     return(
//         <div>
//             <p>{albumId}</p>
//             <p>{id}</p>
//             <p>{title}</p>
//             <p>{url}</p>
//             <p>{thumbnailUrl}</p>
//         </div>
//     )
// }
// export default Photos




const Photos = ({ photos }) => {
  const { id, title, url, thumbnailUrl } = photos;

  return (
    <div>
      <p>ID: {id}</p>
      <p>Title: {title}</p>
      <p>URL: {url}</p>
      <img src={thumbnailUrl} alt={title} />
    </div>
  );
};

export default Photos;
