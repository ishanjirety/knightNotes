import React, { useState } from "react";
import { Modal } from "./Modal";
import axios from "axios";

// Destructuring svgs
import {
  Italic,
  Underline,
  Link,
  Image,
  Gif,
  StrikeThrough,
  Close,
} from "../svg";
import "./styles.css";

export const Actions = ({ editor }) => {
  const [isActive, setIsActive] = useState({
    bold: false,
    italic: false,
    underline: false,
    strikethrough: false,
    link: false,
  });

  const [type, setType] = useState("");
  const [isModalActive, setIsModalActive] = useState(false);

  // Checking if editor text contains template {{any_meme}}
  async function getSearchKeyword() {
    try {
      let content = editor.getHTML();
      let regex = /\{\{(.+?)_meme\}\}/;
      if (content.match(regex)) {
        let url = await addGif(content.match(regex));

        let newContent = await content.replace(regex, "");

        newContent += url;

        editor.commands.setContent(newContent);
      }
    } catch (e) {
      console.log(e.message);
    }
  }
  // get GIF url from gify and return img tag
  async function addGif(query) {
    const url = await getGif(query);
    return new Promise((resolve, reject) => {
      if (url) {
        return resolve(`<img src=${`"${url}"`} />`);
      } else {
        return reject({ message: "Could not find GIF with matching keyword" });
      }
    });
  }

  // Fetch GIF from api
  async function getGif(query) {
    try {
      const {
        data: { data },
      } = await axios.get(
        `https://api.giphy.com/v1/gifs/search?api_key=${process.env.REACT_APP_apiKey}&q=${query}`
      );
      return new Promise((resolve) => resolve(data[0].images.original.webp));
    } catch (e) {
      return new Promise((resolve, reject) =>
        reject({ message: "ERROR in fetching GIF" })
      );
    }
  }

  return (
    <div class="flex gap-x-2.5 relative  w-10/12 justify-end ">
      <h1 className="absolute left-0 top-3 text-2xl">KnightNotes</h1>
      <div class="neu">
        <button
          onClick={() => {
            editor.chain().focus().toggleBold().run();
            setIsActive((active) => {
              return { ...active, bold: !active.bold };
            });
          }}
          className={` ${
            isActive.bold && "active"
          } neu-btn font-poppins font-bold text-xl`}
        >
          B
        </button>
      </div>
      <div className="neu">
        <button
          onClick={() => {
            editor.chain().focus().toggleItalic().run();
            setIsActive((active) => {
              return { ...active, italic: !active.italic };
            });
          }}
          className={` ${
            isActive.italic && "active"
          } neu-btn flex items-center justify-center font-poppins font-bold text-xl`}
        >
          <Italic />
        </button>
      </div>
      <div className="neu">
        <button
          onClick={() => {
            editor.chain().focus().toggleUnderline().run();
            setIsActive((active) => {
              return { ...active, underline: !active.underline };
            });
          }}
          className={` ${
            isActive.underline && "active"
          } neu-btn flex items-center justify-center font-poppins font-bold text-xl`}
        >
          <Underline />
        </button>
      </div>

      <div className="neu">
        <button
          onClick={() => {
            editor.chain().focus().toggleStrike().run();
            setIsActive((active) => {
              return { ...active, strikethrough: !active.strikethrough };
            });
          }}
          className={` ${
            isActive.strikethrough && "active"
          } neu-btn flex items-center justify-center font-poppins font-bold text-xl`}
        >
          <StrikeThrough />
        </button>
      </div>
      <div className="neu">
        <button
          onClick={() => {
            setType("LINK");
            setIsModalActive(true);
            setIsActive((active) => {
              return { ...active, link: true };
            });
          }}
          className={`${
            editor?.isActive("link") && "active"
          } neu-btn flex items-center justify-center font-poppins font-bold text-xl`}
        >
          <Link />
        </button>
      </div>
      {editor?.isActive("link") && (
        <div className="neu">
          <button
            onClick={() => {
              editor.chain().focus().unsetLink().run();
            }}
            className={`${
              editor?.isActive("link") && "active"
            } neu-btn flex items-center justify-center font-poppins font-bold text-xl`}
          >
            <Close />
          </button>
        </div>
      )}
      <div className="neu">
        <button
          className={`neu-btn focus flex items-center justify-center font-poppins font-bold text-xl`}
          onClick={() => {
            setIsModalActive(true);
            setType("IMAGE");
          }}
        >
          <Image />
        </button>
      </div>
      <div className="neu">
        <button
          className={`neu-btn focus flex items-center justify-center font-poppins font-bold text-xl`}
          onClick={getSearchKeyword}
        >
          <Gif />
        </button>
      </div>
      {/* Modal to handle IMAGE and LINK urls */}
      {isModalActive && (
        <Modal
          type={type}
          editor={editor}
          title={type === "LINK" ? "Add Link" : "Add Image"}
          state={setIsModalActive}
        />
      )}
    </div>
  );
};
