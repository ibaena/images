// Create image list component
// Import React
import React from 'react';
import ImageDetail from './image_detail';

/*
// Dummy data
const IMAGES = [
  {_id:1, title:'Pen', link:'https://dummyimage.com/600x400'},
  {_id:2, title:'Pine Tree', link:'https://dummyimage.com/600x400'},
  {_id:3, title:'Mug', link:'https://dummyimage.com/600x400'},
]
*/

// Create our component
const ImageList = (props) => {
  const validImages = props.images.filter(image => !image.is_album);

  const RenderedImages = validImages.map( (image) => {
    return <ImageDetail image={image} key={image.title}/>
  });

  return (
    <ul className="media-list list-group">
      {RenderedImages}
    </ul>
  );
};

// Export our component
export default ImageList;
