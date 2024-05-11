import { Link } from "@mui/material";
import { useState } from "react";
import { DocumentViewer } from "react-documents";



  function Study() {

    const [selectedUrl, setSelectedUrl] = useState(null);

    const handleItemClick = (url) => {
      setSelectedUrl(url);
    };
  
    const data = [
      {
        id: 1,
        img: "https://upload.wikimedia.org/wikipedia/commons/9/98/Enzyme_histochemistry_McArdle.jpg",
        name: "Enzyme Histochemistry",
        url: "https://docs.google.com/presentation/d/15KNNsrRnSbV-MQyqzr_OrNjX8ZGenHlS/edit?usp=sharing&ouid=116849608406873802250&rtpof=true&sd=true",
      },
      {
        id: 2,
        img: "https://ars.els-cdn.com/content/image/3-s2.0-B9780123813732000284-f00028-16-9780123813732.jpg",
        name: "Introduction to Histochemistry",
        url: "https://docs.google.com/presentation/d/1206YWGfJD4VXtkNpIVf0K7A13meAZ6lG/edit?usp=sharing&ouid=116849608406873802250&rtpof=true&sd=true",
      },
      {
        id: 3,
        img: "https://www.researchgate.net/publication/6922258/figure/fig3/AS:601658165821450@1520457893238/General-carbohydrate-histochemical-appearance-of-the-ciliary-glands-The-apical-cytoplasm.png",
        name: "	Carbohydrate histochemistry ",
        url: "https://docs.google.com/presentation/d/1iuLlbURN50cPQq2A7tU-eYPK-stvVXrL/edit?usp=sharing&ouid=116849608406873802250&rtpof=true&sd=true",
      },
      {
        id: 4,
        img: "https://cdn.the-scientist.com/assets/articleNo/71439/iImg/51290/picture2-l.jpg",
        name: "Immunohistochemistry (IHC) Imaging Techniques",
        url: "https://docs.google.com/presentation/d/1DAJzosaZHi185E0PenBDMR2pBVTeaYZK/edit?usp=sharing&ouid=116849608406873802250&rtpof=true&sd=true",
      },
      {
        id: 5,
        img: "https://d2jx2rerrg6sh3.cloudfront.net/image-handler/picture/2009/12/ch1_cellmembrane_big.jpg",
        name: "Lipid Histochemistry",
        url: "https://docs.google.com/presentation/d/19CX5olP40WvA8tJNjj4QUKpWY6J0bbm7/edit?usp=sharing&ouid=116849608406873802250&rtpof=true&sd=true",
      },
      {
        id: 6,
        img: "https://www.researchgate.net/publication/340103867/figure/fig3/AS:962703531208719@1606537816701/Formalin-pigment-deposition-within-portal-vessels.jpg",
        name: "Histochemistry Of Pigments",
        url: "https://docs.google.com/presentation/d/1Dc99w3OcRUBLlW2vaaiCSaFQz2z6821H/edit?usp=sharing&ouid=116849608406873802250&rtpof=true&sd=true",
      },
      
    ];
  
  
  
  
    return (
      <div>
      <h2 style={{ marginTop: 30 }}>Histology Study Materials</h2>
      <div className="materials-wrapper">
        {data.map((item) => (
          <div key={item.id} className="material-container">
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
          <div key={item.id}>
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
  
  export default Study;
  
