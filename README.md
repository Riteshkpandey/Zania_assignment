# Zania_assignment

Hi Team , 
I'm Ritesh Senior Frontend Engineer at Cashfree Payments, Thanks for sharing this assignment , As this Assignment is consisting of two parts ,Frontend and Backend , I'm More String into Frontend side So I only worked on the Frontend development of this assignment.
Below is the Description which I write to explain what I did in this assignment.

This React application displays a list of document cards that can be reordered via drag and drop. Each document card features a thumbnail image and title. Clicking on a card opens a modal displaying the image in full view. The application is organized using code splitting for better maintainability.

Features
Drag and Drop: Cards can be reordered using drag and drop.
Dynamic Display: Images are displayed based on the content of a JSON file.
Image Modal: Clicking on a card opens a modal with a larger view of the image.
Code Splitting: Components are separated into individual files for better maintainability.


Usage
The main interface displays a grid of document cards.
You can drag and drop the cards to reorder them.
Click on any card to open a modal displaying the image in full view.
Press the ESC key or click the close button to exit the modal.


Description: The main component that manages the state and renders the application. It uses the DndProvider from react-dnd to handle drag-and-drop interactions.

State documents: Array of document objects, sorted by position.

selectedImage: Currently selected image for the modal view.

Methods:moveCard(fromIndex, toIndex): Handles the reordering of document cards.

openImage(thumbnail): Opens the modal with the selected image.

closeImage(): Closes the modal.

DocumentCard.js
  Description: Represents individual document cards with drag-and-drop functionality.
  Props:
  document: The document object with properties like id, type, title, and thumbnail.
  index: The index of the document card.
  moveCard(fromIndex, toIndex): Function to handle the card's movement.
  openImage(thumbnail): Function to open the modal with the selected image.

ModalComponent.js
  Description: Handles the modal display for the selected image.
  Props:
  isOpen: Boolean indicating if the modal is open.
  onRequestClose(): Function to close the modal.
  selectedImage: The image to be displayed in the modal.

