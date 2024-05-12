import { Link } from "@mui/material";
import { useState } from "react";
import { DocumentViewer } from "react-documents";



  function StudyE() {

    const [selectedUrl, setSelectedUrl] = useState(null);

    const handleItemClick = (url) => {
      setSelectedUrl(url);
    };
  
    const data = [
      {
        id: 1,
        img: "https://radiologykey.com/wp-content/uploads/2015/12/B9780323081764000240_f024-001-9780323081764.jpg",
        name: "Neuro Embryology",
        url: "https://docs.google.com/presentation/d/1Yo6QmTkiS1xCBl_KyYpdTiveV1xb-RFj/edit?usp=sharing&ouid=116849608406873802250&rtpof=true&sd=true",
      },
      {
        id: 2,
        img: "https://www.gargchildhospitals.com/assets/images/services/growth-monitoring.jpg",
        name: "Monitoring Growth and Development in a child",
        url: "https://docs.google.com/document/d/1i4elrhkK7oaG79oCB0V8Ljnqb414vUmy/edit?usp=sharing&ouid=116849608406873802250&rtpof=true&sd=true",
      },
      {
        id: 3,
        img: "https://images.unsplash.com/photo-1615505368758-8a3af2a4c379?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8YW5hdG9teSUyMG1vZGVsfGVufDB8fDB8fHww",
        name: "Ocular Embryology",
        url: "https://docs.google.com/presentation/d/1_gh0lWVHHU3oKr63NJFYf6dufRwdsb6H/edit?usp=sharing&ouid=116849608406873802250&rtpof=true&sd=true",
      },
      {
        id: 4,
        img: "https://images.unsplash.com/photo-1582380330092-636f9aff6aaf?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8YW5hdG9teSUyMG1vZGVsfGVufDB8fDB8fHww",
        name: "Embryology 1",
        url: "https://docs.google.com/presentation/d/1rziGvrKt3FYXPXrekMy70zjLw-5saLE0/edit?usp=sharing&ouid=116849608406873802250&rtpof=true&sd=true",
      },
      {
        id: 5,
        img: "https://images.unsplash.com/photo-1615505368758-8a3af2a4c379?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8YW5hdG9teSUyMG1vZGVsfGVufDB8fDB8fHww",
        name: "General Embryology",
        url: "https://docs.google.com/presentation/d/1PBFU0-TFm7O4Lkvol6tzt-xxgFt6isA7/edit?usp=sharing&ouid=116849608406873802250&rtpof=true&sd=true",
      },
      {
        id: 6,
        img: "https://images.unsplash.com/photo-1582380330092-636f9aff6aaf?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8YW5hdG9teSUyMG1vZGVsfGVufDB8fDB8fHww",
        name: "Embryology Of The Heart",
        url: "https://docs.google.com/presentation/d/124gV9vpKMmatGXdAQihqew4_SbtNJhnZ/edit?usp=sharing&ouid=116849608406873802250&rtpof=true&sd=true",
      },
    ];
  
  
  
  
    return (
      <div>
      <h2 style={{ marginTop: 30 }}>Embryology Study Materials</h2>
      <div className="materials-wrapper">
        {data.map((item) => (
          <div key={item.id}>
            <Link
               style={{  cursor: "pointer"}}
              onClick={() => handleItemClick(item.url)}
              to={`/slide/${encodeURIComponent(item.url)}`}
            >
              <div >
                <img src={item.img} alt="" className="material-image" />
                <span className="material-name">{item.name}</span>
              </div>
            </Link>
          </div>
        ))}
      </div>
      {data.map((item) => (
          <div key={item.id} >
            {selectedUrl === item.url && (
              <DocumentViewer
                url={item.url}
                viewer="url"
                style={{ width: 910, height: "90vh" ,marginTop:-590}}
              />
            )}
          </div>
        ))}
    </div>

    );
  }
  
  export default StudyE;
  
