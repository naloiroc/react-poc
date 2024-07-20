import React, { useRef } from 'react';
import { Camera } from 'react-camera-pro';

const CameraComponent = () => {
  // 明確定義 ref 的類型
  const cameraRef = useRef<{ takePhoto: () => string }>(null);
  const [image, setImage] = React.useState<string | null>(null);

  const takePhoto = () => {
    if (cameraRef.current) {
      const photo = cameraRef.current.takePhoto();
      setImage(photo);
    }
  };

  return (
    <div>
      <Camera ref={cameraRef} aspectRatio={16 / 9} errorMessages={{

      }} />
      <button onClick={takePhoto}>拍照</button>
      {image && (
        <div>
          <h2>拍攝的照片：</h2>
          <img src={image} alt="Captured" />
        </div>
      )}
    </div>
  );
};

export default CameraComponent