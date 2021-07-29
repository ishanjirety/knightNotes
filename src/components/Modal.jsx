import React, { useState } from "react";
import { Close } from "../svg";
export const Modal = ({ editor, type, title, state }) => {
  const [input, setInput] = useState("");
  return (
    <div className="bg-black-350 font-poppins top-0 left-0 z-10 fixed flex justify-center items-center w-screen h-screen">
      <div className="bg-black-650 relative rounded pr-10 pl-10 pt-5 pb-5 flex flex-col gap-y-4">
        <button className="absolute right-3 top-3" onClick={() => state(false)}>
          <Close />
        </button>
        <h1>Add link</h1>
        <form
          action=""
          onSubmit={() => {
            if (type === "LINK") {
              editor
                .chain()
                .focus()
                .extendMarkRange("link")
                .setLink({ href: input })
                .run();
              state(false);
            } else if (type === "IMAGE") {
              editor.chain().focus().setImage({ src: input }).run();
              state(false);
            }
          }}
          className="flex flex-col gap-y-4"
        >
          <input
            placeholder={title}
            className="pr-3 pl-3 pt-1 pb-1 text rounded outline-none text-black-850"
            onChange={(e) => setInput(e.target.value)}
            required
          />
          <button
            class="border-2 m-auto border-black-850 w-1/2 pt-1 pb-1"
            type="submit"
          >
            Add
          </button>
        </form>
      </div>
    </div>
  );
};
