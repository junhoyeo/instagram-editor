import React, { useCallback } from 'react';
import { useDropzone } from 'react-dropzone';
import styled from 'styled-components';

interface IImagePreview {
  imageURL: string;
  setImageURL: (imageURL: string) => void;
}

const ImagePreview: React.FC<IImagePreview> = ({
  imageURL,
  setImageURL,
}) => {
  const onDrop = useCallback((acceptedFiles: any[]) => {
    const [file] = acceptedFiles;
    const reader = new FileReader();

    reader.onload = () => {
      const { result: arrayBuffer } = reader;
      if (arrayBuffer) {
        const blob = new Blob([arrayBuffer], { type: 'image/png' });
        const src = URL.createObjectURL(blob);
        setImageURL(src);
      }
    };

    reader.readAsArrayBuffer(file);
  }, [setImageURL]);

  const { getRootProps, getInputProps } = useDropzone({
    onDrop,
  });

  return (
    <DropzoneContainer
      {...getRootProps()}
    >
      <DropzoneInput {...getInputProps()} />
      <PostImage src={imageURL} />
    </DropzoneContainer>
  );
};

export default ImagePreview;

const DropzoneContainer = styled.div`
  outline: none;
`;

const DropzoneInput = styled.input`
`;

const PostImage = styled.img`
  width: 375px;
  height: 375px;
  object-fit: cover;
  cursor: pointer;

  @media screen and (max-width: 450px) {
    width: 280px;
    height: 280px;
  }

  @media screen and (max-width: 330px) {
    width: 222px;
    height: 222px;
  }
`;
