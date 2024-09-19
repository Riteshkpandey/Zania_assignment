import React, { useState, useEffect } from "react";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import documentsData from "../constant/data";
import DocumentCard from "./DocumentCard";
import ModalComponent from "./ModalComponent";

const Draggable = () => {
  const [documents, setDocuments] = useState([]);
  const [selectedImage, setSelectedImage] = useState(null);

  useEffect(() => {
    const sortedDocuments = documentsData.sort(
      (a, b) => a.position - b.position
    );
    setDocuments(sortedDocuments);
  }, []);

  // Function to handle image swapping
  const moveCard = (fromIndex, toIndex) => {
    const updatedDocuments = [...documents];
    const [movedItem] = updatedDocuments.splice(fromIndex, 1);
    updatedDocuments.splice(toIndex, 0, movedItem);
    setDocuments(updatedDocuments);
  };

  const openImage = (thumbnail) => {
    setSelectedImage(thumbnail);
  };

  const closeImage = () => {
    setSelectedImage(null);
  };

  return (
    <DndProvider backend={HTML5Backend}>
      <div className="app">
        <div className="document-grid">
          {documents.map((doc, index) => (
            <DocumentCard
              key={doc.id}
              index={index}
              document={doc}
              moveCard={moveCard}
              openImage={openImage}
            />
          ))}
        </div>
        <ModalComponent
          isOpen={!!selectedImage}
          onRequestClose={closeImage}
          selectedImage={selectedImage}
        />
      </div>
    </DndProvider>
  );
};

export default Draggable;
