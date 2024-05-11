import { Link } from "@mui/material";
import { useState } from "react";
import { DocumentViewer } from "react-documents";

function StudyG() {
  const [selectedUrl, setSelectedUrl] = useState(null);

  const handleItemClick = (url) => {
    setSelectedUrl(url);
  };

  const data = [
    {
      id: 1,
      img: "https://prohealthsys.com/wp-content/uploads/2013/07/Gray911931.jpg",
      name: "Surface Anatomy Of The Head And Neck",
      url: "https://docs.google.com/document/d/1HaJVtvDGW6r-V1U8ZvVjxpbk67lFZb2K/edit?usp=sharing&ouid=116849608406873802250&rtpof=true&sd=true",
    },
    {
      id: 2,
      img: "https://cdn.britannica.com/95/55495-050-EEE4F555/differences-human-being-gorilla-structure-femurs-legs.jpg",
      name: "Comparative Anatomy",
      url: "https://docs.google.com/presentation/d/1L1ftV6O2h6kpwpLqS58kTQSgxbLJNDy6/edit?usp=drive_link&ouid=116849608406873802250&rtpof=true&sd=true",
    },
    {
      id: 3,
      img: "https://i0.wp.com/www.zoologytalks.com/wp-content/uploads/2023/11/IMG_4146.jpeg?resize=1024%2C801&ssl=1",
      name: "Comparative anatomy of the respiratory system",
      url: "https://docs.google.com/presentation/d/1iUC3T7PnfpFKdyFy8mNWSpKhTdHqr6uI/edit?usp=sharing&ouid=116849608406873802250&rtpof=true&sd=true",
    },
    {
      id: 4,
      img: "https://m.media-amazon.com/images/I/51XYGOAImdL._AC_UF894,1000_QL80_.jpg",
      name: "Pelvic Viscerals 2",
      url: "https://docs.google.com/presentation/d/1j2zaRTDqVespnSwuyb_IinvTNHw3vA5y/edit?usp=sharing&ouid=116849608406873802250&rtpof=true&sd=true",
    },
    {
      id: 5,
      img: "https://media.springernature.com/lw685/springer-static/image/art%3A10.1007%2Fs12565-020-00553-z/MediaObjects/12565_2020_553_Fig5_HTML.png",
      name: "Pelvic Viscerals 1",
      url: "https://docs.google.com/presentation/d/1DHqpLCYg-C18dBDIO1GLjDuAeMqT1mps/edit?usp=sharing&ouid=116849608406873802250&rtpof=true&sd=true",
    },
    {
      id: 6,
      img: "https://cloudfront.jove.com/files/media/science-education/science-education-thumbs/10221.jpg",
      name: "Animal Handling",
      url: "https://docs.google.com/presentation/d/1gZ_Rh6ZLicm5vKKgdCEjYEnAEQy1GhX6/edit?usp=sharing&ouid=116849608406873802250&rtpof=true&sd=true",
    },

    {
      id: 7,
      img: "https://www.verywellhealth.com/thmb/R0k_3sJi9o3qKm16ROfDlAobjrM=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/perinium--illustration-487737755-5a69f5e0a18d9e0037f779e2.jpg",
      name: "Perineum 2",
      url: "https://docs.google.com/presentation/d/1brie7NAcfbF8bGn6FWkSwQBcGzN2--sN/edit?usp=sharing&ouid=116849608406873802250&rtpof=true&sd=true",
    },
    {
      id: 8,
      img: "https://radiologykey.com/wp-content/uploads/2016/09/A303228_1_En_5_Fig1_HTML.jpg",
      name: "RADIOLOGICAL ANATOMY OF THE HEPATOBILIARY SYSTEM",
      url: "https://docs.google.com/presentation/d/1EQoYf6PYvxIEKT4738A7I8OnDG_JtTyF/edit?usp=drive_link&ouid=116849608406873802250&rtpof=true&sd=true",
    },
    {
      id: 9,
      img: "https://nci-media.cancer.gov/pdq/media/images/713969.jpg",
      name: "ANATOMY OF PARANASAL SINUSES",
      url: "https://docs.google.com/presentation/d/14aH0U1_sYbl0sR4vVRmJLYjXyKLl3TMf/edit?usp=drive_link&ouid=116849608406873802250&rtpof=true&sd=true",
    },
    {
      id: 10,
      img: "https://www.verywellhealth.com/thmb/L93QNnkH_THHG5swaG2qduDSvCQ=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/EMBALMING_ROOM-56a275035f9b58b7d0cac02f.jpg",
      name: "EMBALMING",
      url: "https://docs.google.com/presentation/d/1668yU1zU4vxwCjAP5LSmZpX9DMeRC8Tv/edit?usp=drive_link&ouid=116849608406873802250&rtpof=true&sd=true",
    },
    {
      id: 11,
      img: "https://cff2.earth.com/uploads/2018/12/10121924/Preserving-the-body-Embalming-practices-began-during-the-Civil-War1-960x640.jpg",
      name: "History of an Embalmment 3",
      url: "https://docs.google.com/document/d/1Q35CKqNGICDQj5ZFHrXG_zP_kKoDEt-a/edit?usp=drive_link&ouid=116849608406873802250&rtpof=true&sd=true",
    },
    {
      id: 12,
      img: "https://d45jl3w9libvn.cloudfront.net/jaypee/static/books/9789351522119/Chapters/images/510-1.jpg",
      name: "Museum techniques",
      url: "https://docs.google.com/presentation/d/1-Noaa_sFIop5OEPFd2GQFWoI-9kbDL3z/edit?usp=drive_link&ouid=116849608406873802250&rtpof=true&sd=true",
    },
    {
      id: 13,
      img: "https://basicmedicalkey.com/wp-content/uploads/2016/06/B9780323079549000013_f01-03a-9780323079549.jpg",
      name: "SURFACE AND LIVING ANATOMY OF THE BACK AND VERTEBRAL COLUMN",
      url: "https://docs.google.com/document/d/1HVFLUO9bSM35N5uApJypkj9gmolL4yqr/edit?usp=sharing&ouid=116849608406873802250&rtpof=true&sd=true",
    },
    {
      id: 14,
      img: "https://upload.wikimedia.org/wikipedia/commons/1/14/Surface_projections_of_the_organs_of_the_trunk.png",
      name: "SURFACE AND LIVING ANATOMY OF THE THORAX",
      url: "https://docs.google.com/document/d/1060EX3fH_OqZdN8jGncZGiz2g8iaWyJm/edit?usp=sharing&ouid=116849608406873802250&rtpof=true&sd=true",
    },
    {
      id: 15,
      img: "https://anatomy.net/uploads/a9307d64-393c-497a-9c25-7e502b7913cb.jpg?width=1200",
      name: "Pelvis 3",
      url: "https://docs.google.com/presentation/d/1HI_dWS8Y_f693szYHm736kJtBgKUvu-Q/edit?usp=sharing&ouid=116849608406873802250&rtpof=true&sd=true",
    },
    {
      id: 16,
      img: "https://www.netterimages.com/images/vpv/000/000/057/57936-0550x0475.jpg",
      name: "Pelvis and Contents",
      url: "https://docs.google.com/presentation/d/1feYArOfRAmUE89KkSdsNOBNzJh7GXpE9/edit?usp=sharing&ouid=116849608406873802250&rtpof=true&sd=true",
    },
    {
      id: 17,
      img: "https://www.kenhub.com/thumbor/G7e1zpATY4dqaL9IZ5j7Z_1Vls4=/fit-in/800x1600/filters:watermark(/images/logo_url.png,-10,-10,0):background_color(FFFFFF):format(jpeg)/images/library/12296/chest_PA.jpg",
      name: "RADIOLOGICAL  ANATOMY & TECHNIQUES",
      url: "https://docs.google.com/presentation/d/1418JdcCWGu16Dv1G9qK0kzlc6YcoA-LK/edit?usp=sharing&ouid=116849608406873802250&rtpof=true&sd=true",
    },
    {
      id: 18,
      img: "https://www.researchgate.net/publication/347902140/figure/fig1/AS:976232577503233@1609763392364/X-ray-KUB-kidney-ureter-bladder-showing-giant-prostatic-and-bladder-calculi.jpg",
      name: "Radiological Anatomy of Kidneys, Ureters, Urinary Bladder and Prostate",
      url: "https://docs.google.com/presentation/d/181cnUGl2_tlbiYSSN6Yd12sHwD2QIblS/edit?usp=sharing&ouid=116849608406873802250&rtpof=true&sd=true",
    },
    {
      id: 19,
      img: "https://i.ytimg.com/vi/K3DJ-HVm7Hg/maxresdefault.jpg",
      name: "Radiological Anatomy of the CNS",
      url: "https://docs.google.com/presentation/d/1Jf8mSI2r0IcdGS98sGbBzVEycsa1WauS/edit?usp=sharing&ouid=116849608406873802250&rtpof=true&sd=true",
    },
  ];
  

  return (
    <div>
      <h2 style={{ marginTop: 30 }}> Gross Anatomy Study Materials</h2>
      <div className="materials-wrapper">
        {data.map((item) => (
          <div key={item.id}>
            <Link
              style={{ cursor: "pointer" }}
              onClick={() => handleItemClick(item.url)}
              to={`/slide/${encodeURIComponent(item.url)}`}
            >
              <div>
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
              style={{ width: 910, height: "90vh", marginTop: -590 }}
            />
          )}
        </div>
      ))}
    </div>
  );
}

export default StudyG;
