import React from "react";
import { Link, Close } from "../svg";
export const Guide = ({ state }) => {
  return (
    <div className="bg-black-350 fixed top-0 left-0 h-screen w-screen flex justify-center items-center">
      <div className=" relative flex flex-col gap-y-10 w-6/12 h-5/6 pr-5 pl-5 pt-5 pb-4 bg-black-650">
        <h1 className="text-xl">User Manual</h1>
        <div className="flex flex-col gap-y-7">
          <div className="flex gap-x-2">
            <strong>Bold :</strong>
            <p>
              Click on the <strong>`B`</strong> button to make text bold{" "}
            </p>
          </div>
          <div className="flex gap-x-2">
            <strong>Italic :</strong>
            <p>
              Click on the <strong className="italic">`I`</strong> button to
              make text italic
            </p>
          </div>
          <div className="flex gap-x-2">
            <strong>Underline :</strong>
            <p>
              Click on the `<strong className="underline">U</strong>` button to
              underline text
            </p>
          </div>
          <div className="flex gap-x-2 w-full">
            <strong>Link :</strong>
            <p className="w-10/12">
              Click on the
              <strong className="inline-block ml-1 mr-1">
                <Link />
              </strong>
              button, a modal will pop up one can enter link and press enter to
              link the text.
            </p>
          </div>
          <div className="flex gap-x-2 w-full">
            <strong>Image :</strong>
            <p className="w-10/12">
              Click on the ` <strong>IMAGE</strong> ` button, and paste the
              image url in pop up.
            </p>
          </div>
          <div className="flex gap-x-2 w-full">
            <strong>GIF :</strong>
            <p className="w-10/12">
              Click on the ` <strong className="inline-block">GIF</strong> `
              button, you can use templating syntax{" "}
              <strong>`&#10100;&#10100;any_meme&#10101;&#10101;`</strong>
              <br />
              after clicking on button this template will be used to search
              relavant GIF.
            </p>
          </div>
        </div>
        <button className="absolute right-5 top-5" onClick={() => state(false)}>
          <Close />
        </button>
      </div>
    </div>
  );
};
