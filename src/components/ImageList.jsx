import ImageShow from "./ImageShow";
import "../styles/ImageList.css";

const ImageList = ({ result }) => {
  const renderImages = result.map((image) => {
    return <ImageShow key={image.id} image={image} />;
  });

  return (
    <>
      <p>results :{result.length}</p>
      <div className="image-list">{renderImages}</div>
      {/* <ul>
        {result.map((img) => (
          <li key={img.id}>
            <img
              src={img.urls.small}
            />
          </li>
        ))}
      </ul> */}
    </>
  );
};

export default ImageList;
