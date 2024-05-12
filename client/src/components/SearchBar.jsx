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
  {
    id: 20,
    img: "https://upload.wikimedia.org/wikipedia/commons/9/98/Enzyme_histochemistry_McArdle.jpg",
    name: "Enzyme Histochemistry",
    url: "https://docs.google.com/presentation/d/15KNNsrRnSbV-MQyqzr_OrNjX8ZGenHlS/edit?usp=sharing&ouid=116849608406873802250&rtpof=true&sd=true",
  },
  {
    id: 21,
    img: "https://ars.els-cdn.com/content/image/3-s2.0-B9780123813732000284-f00028-16-9780123813732.jpg",
    name: "Introduction to Histochemistry",
    url: "https://docs.google.com/presentation/d/1206YWGfJD4VXtkNpIVf0K7A13meAZ6lG/edit?usp=sharing&ouid=116849608406873802250&rtpof=true&sd=true",
  },
  {
    id: 22,
    img: "https://www.researchgate.net/publication/6922258/figure/fig3/AS:601658165821450@1520457893238/General-carbohydrate-histochemical-appearance-of-the-ciliary-glands-The-apical-cytoplasm.png",
    name: "	Carbohydrate histochemistry ",
    url: "https://docs.google.com/presentation/d/1iuLlbURN50cPQq2A7tU-eYPK-stvVXrL/edit?usp=sharing&ouid=116849608406873802250&rtpof=true&sd=true",
  },
  {
    id: 23,
    img: "https://cdn.the-scientist.com/assets/articleNo/71439/iImg/51290/picture2-l.jpg",
    name: "Immunohistochemistry (IHC) Imaging Techniques",
    url: "https://docs.google.com/presentation/d/1DAJzosaZHi185E0PenBDMR2pBVTeaYZK/edit?usp=sharing&ouid=116849608406873802250&rtpof=true&sd=true",
  },
  {
    id: 24,
    img: "https://d2jx2rerrg6sh3.cloudfront.net/image-handler/picture/2009/12/ch1_cellmembrane_big.jpg",
    name: "Lipid Histochemistry",
    url: "https://docs.google.com/presentation/d/19CX5olP40WvA8tJNjj4QUKpWY6J0bbm7/edit?usp=sharing&ouid=116849608406873802250&rtpof=true&sd=true",
  },
  {
    id: 25,
    img: "https://www.researchgate.net/publication/340103867/figure/fig3/AS:962703531208719@1606537816701/Formalin-pigment-deposition-within-portal-vessels.jpg",
    name: "Histochemistry Of Pigments",
    url: "https://docs.google.com/presentation/d/1Dc99w3OcRUBLlW2vaaiCSaFQz2z6821H/edit?usp=sharing&ouid=116849608406873802250&rtpof=true&sd=true",
  },
  {
    id: 26,
    img: "https://radiologykey.com/wp-content/uploads/2015/12/B9780323081764000240_f024-001-9780323081764.jpg",
    name: "Neuro Embryology",
    url: "https://docs.google.com/presentation/d/1Yo6QmTkiS1xCBl_KyYpdTiveV1xb-RFj/edit?usp=sharing&ouid=116849608406873802250&rtpof=true&sd=true",
  },
  {
    id: 27,
    img: "https://www.gargchildhospitals.com/assets/images/services/growth-monitoring.jpg",
    name: "Monitoring Growth and Development in a child",
    url: "https://docs.google.com/document/d/1i4elrhkK7oaG79oCB0V8Ljnqb414vUmy/edit?usp=sharing&ouid=116849608406873802250&rtpof=true&sd=true",
  },
  {
    id: 28,
    img: "https://eyewiki.aao.org/w/images/1/thumb/e/e2/Optic_cup_embryology.png/406px-Optic_cup_embryology.png",
    name: "Ocular Embryology",
    url: "https://docs.google.com/presentation/d/1_gh0lWVHHU3oKr63NJFYf6dufRwdsb6H/edit?usp=sharing&ouid=116849608406873802250&rtpof=true&sd=true",
  },
  {
    id: 29,
    img: "https://t3.ftcdn.net/jpg/06/14/00/68/360_F_614006873_TJzQlNAX5v0tQXWsUVTG2TFBWo0FcIyG.jpg",
    name: "Embryology 1",
    url: "https://docs.google.com/presentation/d/1rziGvrKt3FYXPXrekMy70zjLw-5saLE0/edit?usp=sharing&ouid=116849608406873802250&rtpof=true&sd=true",
  },
  {
    id: 30,
    img: "https://media.springernature.com/lw685/springer-static/image/chp%3A10.1007%2F978-3-319-26158-4_2/MediaObjects/331254_1_En_2_Fig1_HTML.jpg",
    name: "General Embryology",
    url: "https://docs.google.com/presentation/d/1PBFU0-TFm7O4Lkvol6tzt-xxgFt6isA7/edit?usp=sharing&ouid=116849608406873802250&rtpof=true&sd=true",
  },
  {
    id: 31,
    img: "https://www.kenhub.com/thumbor/W9XrOfm_RDmtGyra4Vn4h12HqPw=/fit-in/800x1600/filters:watermark(/images/logo_url.png,-10,-10,0):background_color(FFFFFF):format(jpeg)/images/library/3539/nRKli1SdVY9eZINaAUjPDw_V._ventriculi_dextri_anterior_02.png",
    name: "Embryology Of The Heart",
    url: "https://docs.google.com/presentation/d/124gV9vpKMmatGXdAQihqew4_SbtNJhnZ/edit?usp=sharing&ouid=116849608406873802250&rtpof=true&sd=true",
  },
];
