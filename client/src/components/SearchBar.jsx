import * as React from 'react';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import { DocumentViewer } from 'react-documents';

export default function SearchBar() {
  const [value, setValue] = React.useState(null);
  const [selectedUrl, setSelectedUrl] = React.useState(null);

  const filterOptions = (inputValue) => {
    return data.filter(option =>
      option.name.toLowerCase().includes(inputValue.toLowerCase())
    );
  };

  return (
    <React.Fragment>
      <Autocomplete
        id="dialog-demo"
        options={value && value.length >= 3 ? filterOptions(value) : []}
        getOptionLabel={(option) => option.name}
        selectOnFocus
        clearOnBlur
        handleHomeEndKeys
        renderOption={(props, option) => <li {...props}>{option.name}</li>}
        sx={{
          width: 600,
          color: 'white',
          '& .MuiInputBase-input::placeholder': {
            color: 'white', // Placeholder color
          },
          '& .MuiInputBase-input': {
            color: 'white', // Font color
            height: 17,
          },
          '& .MuiOutlinedInput-notchedOutline': {
            borderColor: 'white', // Border color
          },
          label: { color: 'white' }
        }}
        freeSolo
        renderInput={(params) => <TextField {...params} label="Search Anatomical Materials, Courses, 3D Models, etc" />}
        onInputChange={(event, newValue) => {
          setValue(newValue);
          setSelectedUrl(null); // Reset selectedUrl when input changes
        }}
        onChange={(event, newValue) => {
          setValue(newValue);
          if (newValue && newValue.url) {
            window.open(newValue.url, '_blank'); // Open the URL in a new tab
          }
        }}
      />
    </React.Fragment>
  );
}

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
