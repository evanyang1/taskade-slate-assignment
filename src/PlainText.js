import React from "react";

import Plain from 'slate-plain-serializer'
import { Editor } from 'slate-react'

const initialValue = Plain.deserialize(
  'This is editable plain text, just like a <textarea>!'
)

class PlainText extends React.Component {
  render() {
    return (
      <Editor
        placeholder="Enter some plain text..."
        defaultValue={initialValue}
      />
    )
  }
}

export default PlainText
