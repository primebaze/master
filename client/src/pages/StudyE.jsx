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
        img: "https://eyewiki.aao.org/w/images/1/thumb/e/e2/Optic_cup_embryology.png/406px-Optic_cup_embryology.png",
        name: "Ocular Embryology",
        url: "https://docs.google.com/presentation/d/1_gh0lWVHHU3oKr63NJFYf6dufRwdsb6H/edit?usp=sharing&ouid=116849608406873802250&rtpof=true&sd=true",
      },
      {
        id: 4,
        img: "https://t3.ftcdn.net/jpg/06/14/00/68/360_F_614006873_TJzQlNAX5v0tQXWsUVTG2TFBWo0FcIyG.jpg",
        name: "Embryology 1",
        url: "https://docs.google.com/presentation/d/1rziGvrKt3FYXPXrekMy70zjLw-5saLE0/edit?usp=sharing&ouid=116849608406873802250&rtpof=true&sd=true",
      },
      {
        id: 5,
        img: "https://media.springernature.com/lw685/springer-static/image/chp%3A10.1007%2F978-3-319-26158-4_2/MediaObjects/331254_1_En_2_Fig1_HTML.jpg",
        name: "General Embryology",
        url: "https://docs.google.com/presentation/d/1PBFU0-TFm7O4Lkvol6tzt-xxgFt6isA7/edit?usp=sharing&ouid=116849608406873802250&rtpof=true&sd=true",
      },
      {
        id: 6,
        img: "https://www.kenhub.com/thumbor/W9XrOfm_RDmtGyra4Vn4h12HqPw=/fit-in/800x1600/filters:watermark(/images/logo_url.png,-10,-10,0):background_color(FFFFFF):format(jpeg)/images/library/3539/nRKli1SdVY9eZINaAUjPDw_V._ventriculi_dextri_anterior_02.png",
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
  
