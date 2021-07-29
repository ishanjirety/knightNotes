import { useState } from "react";
import { Actions } from "./Actions";

import { useEditor, EditorContent } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import Underline from "@tiptap/extension-underline";
import Placeholder from "@tiptap/extension-placeholder";
import Image from "@tiptap/extension-image";
import Bold from "@tiptap/extension-bold";
import Italic from "@tiptap/extension-italic";
import Strike from "@tiptap/extension-strike";
import Link from "@tiptap/extension-link";

export const Editor = () => {
  const editor = useEditor({
    extensions: [
      StarterKit,
      Image,
      Placeholder,
      Bold,
      Italic,
      Strike,
      Link,
      Underline,
    ],
    content: "",
  });

  return (
    <>
      <Actions editor={editor} />
      <div class="neu-editor flex flex-col outline w-10/12 p-10 h-full overflow-y-auto ">
        <EditorContent Placeholder="Start writing..." editor={editor} />
      </div>
    </>
  );
};
