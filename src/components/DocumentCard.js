import React from "react";
import { useDrag, useDrop } from "react-dnd";

const ItemType = {
  DOCUMENT: "document",
};

const DocumentCard = ({ document, index, moveCard, openImage }) => {
  const [, ref] = useDrag({
    type: ItemType.DOCUMENT,
    item: { index },
  });

  const [, drop] = useDrop({
    accept: ItemType.DOCUMENT,
    hover: (draggedItem) => {
      if (draggedItem.index !== index) {
        moveCard(draggedItem.index, index);
        draggedItem.index = index;
      }
    },
  });

  return (
    <div
      ref={(node) => ref(drop(node))}
      className="document-card"
      onClick={() => openImage(document.thumbnail)}
    >
      <p>{document.title}</p>
      <img
        src={document.thumbnail}
        alt={document.title}
        className="thumbnail"
      />
    </div>
  );
};

export default DocumentCard;
