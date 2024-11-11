import "./Startpage.css";
import { useState, useRef } from "react";

function Startpage() {
  // allows the convert button to change his color
  const [allowConvert, setAllowConvert] = useState(false);

  // pop up
  const [modalClassName, setModalClassName] = useState("modal");
  const [overlayClassName, setOverlayClassName] = useState("");

  function toggleModal() {
    if (modalClassName === "modal") {
      setModalClassName("modal modalOpen");
      setOverlayClassName("overlay");
    } else {
      setModalClassName("modal");
      setOverlayClassName("");
    }
  }

  // pop up

  // files

  const [uploadedFiles, setUploadedFiles] = useState({
    design: { name: null, isActive: false },
    summary: { name: null, isActive: false },
    worksheet: { name: null, isActive: false },
    presentation: { name: null, isActive: false },
  });

  const fileInputRefs = {
    design: useRef(null),
    summary: useRef(null),
    worksheet: useRef(null),
    presentation: useRef(null),
  };

  const handleFileChange = (event, key) => {
    const file = event.target.files[0];
    const allowedTypes = [
      "application/pdf",
      "image/png",
      "image/jpeg",
      "text/plain",
      "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
      "application/msword",
    ];

    if (file && allowedTypes.includes(file.type)) {
      setUploadedFiles((prevState) => ({
        ...prevState,
        [key]: { name: file.name, isActive: true },
      }));
      setAllowConvert(true);
    }
  };

  // Trigger file input click
  const handleButtonClick = (key) => {
    if (fileInputRefs[key].current) {
      fileInputRefs[key].current.click();
    }
  };

  return (
    <>
      <section id="motSection">
        <h1>Locker</h1>
        <h2>Professional Documents</h2>
        <h6>In a whole new design</h6>
        <div className="buttonContainer">
          <button>
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M14.9333 17.1236H18.4167C20.9375 17.1236 23 15.7848 23 13.292C23 10.7991 20.5708 9.55793 18.6 9.46031C18.1925 5.56172 15.3458 3.19031 12 3.19031C8.8375 3.19031 6.80067 5.28902 6.13333 7.37031C3.38333 7.63156 1 9.38147 1 12.247C1 15.1125 3.475 17.1236 6.5 17.1236H9.06667"
                stroke="white"
                stroke-width="1.95556"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M14.9333 11.9903L12 9.05701L9.06665 11.9903M12 20.8096V9.79034"
                stroke="white"
                stroke-width="1.95556"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </button>
          <button>
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M12.1797 12.3167L10.185 7.13114C10.1551 7.05332 10.1023 6.9864 10.0335 6.9392C9.9648 6.892 9.88338 6.86673 9.8 6.86673C9.71662 6.86673 9.6352 6.892 9.56647 6.9392C9.49775 6.9864 9.44493 7.05332 9.415 7.13114L7.42033 12.3167C7.39961 12.3706 7.36782 12.4195 7.327 12.4604C7.28618 12.5012 7.23725 12.533 7.18338 12.5537L1.99779 14.5484C1.91997 14.5783 1.85305 14.6311 1.80585 14.6998C1.75865 14.7686 1.73338 14.85 1.73338 14.9334C1.73338 15.0167 1.75865 15.0982 1.80585 15.1669C1.85305 15.2356 1.91997 15.2884 1.99779 15.3184L7.18338 17.313C7.23725 17.3338 7.28618 17.3656 7.327 17.4064C7.36782 17.4472 7.39961 17.4961 7.42033 17.55L9.415 22.7356C9.44493 22.8134 9.49775 22.8803 9.56647 22.9275C9.6352 22.9747 9.71662 23 9.8 23C9.88338 23 9.9648 22.9747 10.0335 22.9275C10.1023 22.8803 10.1551 22.8134 10.185 22.7356L12.1797 17.55C12.2004 17.4961 12.2322 17.4472 12.273 17.4064C12.3138 17.3656 12.3627 17.3338 12.4166 17.313L17.6022 15.3184C17.68 15.2884 17.7469 15.2356 17.7941 15.1669C17.8414 15.0982 17.8666 15.0167 17.8666 14.9334C17.8666 14.85 17.8414 14.7686 17.7941 14.6998C17.7469 14.6311 17.68 14.5783 17.6022 14.5484L12.4166 12.5537C12.3627 12.533 12.3138 12.5012 12.273 12.4604C12.2322 12.4195 12.2004 12.3706 12.1797 12.3167ZM5.34111 3.4312C5.26189 3.40073 5.19928 3.33812 5.1688 3.25889L4.58 1.72801C4.48139 1.4716 4.11861 1.4716 4.02 1.72801L3.4312 3.25889C3.40073 3.33812 3.33811 3.40073 3.25889 3.4312L1.72801 4.02C1.4716 4.11862 1.4716 4.48139 1.72801 4.58001L3.25889 5.16881C3.33811 5.19928 3.40073 5.26189 3.4312 5.34112L4.02 6.872C4.11861 7.12841 4.48139 7.12841 4.58 6.872L5.1688 5.34112C5.19928 5.26189 5.26189 5.19928 5.34111 5.16881L6.87199 4.58001C7.1284 4.48139 7.1284 4.11862 6.87199 4.02L5.34111 3.4312ZM19.9468 5.69217C19.8676 5.66169 19.805 5.59909 19.7745 5.51988L18.88 3.19454C18.7814 2.93815 18.4186 2.93815 18.32 3.19454L17.4255 5.51988C17.395 5.59909 17.3324 5.66169 17.2532 5.69217L14.9279 6.58668C14.6715 6.68531 14.6715 7.04805 14.9279 7.14668L17.2532 8.04119C17.3324 8.07167 17.395 8.13427 17.4255 8.21348L18.32 10.5388C18.4186 10.7952 18.7814 10.7952 18.88 10.5388L19.7745 8.21348C19.805 8.13427 19.8676 8.07167 19.9468 8.04119L22.2721 7.14668C22.5285 7.04805 22.5285 6.68531 22.2721 6.58668L19.9468 5.69217Z"
                fill="white"
              />
            </svg>
          </button>
        </div>
        <p>
          Upload your document, select your design and let the magic happen.
        </p>
      </section>

      <section id="scSec">
        <div className="btCon">
          <button>
            <div className="image"></div>
            <div className="txtCon"></div>
          </button>
        </div>
        <button onClick={toggleModal}>fqwfwq</button>
      </section>
      <section id="popUp">
        <div className={overlayClassName} onClick={toggleModal} />
        <div className={modalClassName}>
          <div className="previewSec">
            <img src="/popupimg.png" alt="Preview" />
            <svg
              width="57"
              height="9"
              viewBox="0 0 57 9"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle cx="4.5" cy="4.5" r="4.5" fill="#313132" />
              <circle cx="28.5" cy="4.5" r="4.5" fill="#8F8E90" />
              <circle cx="52.5" cy="4.5" r="4.5" fill="#8F8E90" />
            </svg>

            <button className="close-button" onClick={toggleModal}>
              <svg
                width="30"
                height="30"
                viewBox="0 0 30 30"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle
                  cx="15"
                  cy="15"
                  r="15"
                  fill="white"
                  fill-opacity="0.86"
                />
                <path
                  d="M19.375 19.375L10.625 10.625M19.375 10.625L10.625 19.375"
                  stroke="#7F7C80"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </button>
          </div>
          <div className="dwnldSctn">
            <h1>
              Your document <br /> is ready.
            </h1>
            <p>
              Every kind of a Work Sheet is to think <br /> about the morning
              tonight. Every kind.
            </p>
            <button className="dwnldBtn">Download document</button>
          </div>
        </div>
      </section>
    </>
  );
}

export default Startpage;
