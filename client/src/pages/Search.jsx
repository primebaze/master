/* eslint-disable react/prop-types */
// DocumentPage.js
import { DocumentViewer } from 'react-documents';
const data = [
  {
    id: 1,
    img: "https://images.unsplash.com/photo-1615505368758-8a3af2a4c379?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8YW5hdG9teSUyMG1vZGVsfGVufDB8fDB8fHww",
    name: "Skeletal System",
    url: "https://docs.google.com/document/d/1HaJVtvDGW6r-V1U8ZvVjxpbk67lFZb2K/edit?usp=sharing&ouid=116849608406873802250&rtpof=true&sd=true",
  },
  {
    id: 2,
    img: "https://images.unsplash.com/photo-1582380330092-636f9aff6aaf?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8YW5hdG9teSUyMG1vZGVsfGVufDB8fDB8fHww",
    name: "Muscular System",
    url: "/path/to/muscular_system_presentation.pptx",
  },
  {
    id: 3,
    img: "https://images.unsplash.com/photo-1615505368758-8a3af2a4c379?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8YW5hdG9teSUyMG1vZGVsfGVufDB8fDB8fHww",
    name: "Nervous System",
    url: "/path/to/nervous_system_presentation.pptx",
  },
  {
    id: 4,
    img: "https://images.unsplash.com/photo-1582380330092-636f9aff6aaf?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8YW5hdG9teSUyMG1vZGVsfGVufDB8fDB8fHww",
    name: "Digestive System",
    url: "/path/to/digestive_system_presentation.pptx",
  },
  {
    id: 5,
    img: "https://images.unsplash.com/photo-1615505368758-8a3af2a4c379?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8YW5hdG9teSUyMG1vZGVsfGVufDB8fDB8fHww",
    name: "Cardiovascular System",
    url: "/path/to/cardiovascular_system_presentation.pptx",
  },
  {
    id: 6,
    img: "https://images.unsplash.com/photo-1582380330092-636f9aff6aaf?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8YW5hdG9teSUyMG1vZGVsfGVufDB8fDB8fHww",
    name: "Respiratory System",
    url: "/path/to/respiratory_system_presentation.pptx",
  },
];

const Search = ({ url }) => {
  return (
    <div>
      <h1>Document Viewer</h1>
      <DocumentViewer url={url} viewer="url" />
    </div>
  );
};

export default Search;
