import React, { Component} from "react";
import CKEditor from "@ckeditor/ckeditor5-react";
import DecoupledcEditor from "@ckeditor/ckeditor5-build-decoupled-document";


function NoteCard ({ note, body }) {
    console.log(note, "Note from NoteCard")
    console.log(body, "body from NoteCard")
    return(
        <div>
      <CKEditor
        editor={DecoupledcEditor}
        data="<p>Hello from CKEditor 5!</p>"
        onInit={(editor) => {
          console.log("Editor is ready to use!");
          console.log(editor.ui.getEditableElement());
          editor.ui
            .getEditableElement()
            .parentElement.append(editor.ui.view.toolbar.element);
        }}
        onChange={(event, editor) => {
          const data = editor.getData();
          console.log({ event, editor, data });
        }}
        config={{
          toolbarLocation: "bottom"
        }}
      />
    </div>
    )
}

export default NoteCard;