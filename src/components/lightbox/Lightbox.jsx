import "./style.css";
import { useEffect } from "react";

const Lightbox = ({
  lightboxActive,
  setLightboxActive,
  pageImagesList,
  projectIndex,
  selectedImageIndex,
}) => {
  useEffect(() => {
    const handleScroll = () => {
      setLightboxActive(false);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [setLightboxActive]);

  // Проверяем существование selectedImage и projectImage
  let selectedImage = pageImagesList[selectedImageIndex];
  let projectImage = pageImagesList[projectIndex];

  // Проверяем существование selectedImage и projectImage.imgs
  let imageSrc =
    selectedImage && selectedImage.img
      ? selectedImage.img
      : projectImage?.imgs?.[selectedImageIndex];

  return (
    <div
      className={`lightbox ${lightboxActive ? "active" : ""}`}
      onClick={() => setLightboxActive(!lightboxActive)}
    >
      {imageSrc && <img className="lightbox__image" alt="" src={imageSrc} />}
    </div>
  );
};

export default Lightbox;
