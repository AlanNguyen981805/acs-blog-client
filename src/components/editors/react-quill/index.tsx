import React, { useState } from 'react';
import dynamic from 'next/dynamic'
const ReactQuill = dynamic(() => import("react-quill"), { ssr: false });
import 'react-quill/dist/quill.snow.css';

interface IProps {
    setContent: (value: string) => void,
    setFieldValue: (name: string, value: string) => void
}
const ReactQill: React.FC<IProps> = ({setContent, setFieldValue}) => {
    const modules: any = { toolbar: { container }}
    const [value, setValue] = useState('')

    const handleChange = (e: string) => {
        setFieldValue("content", e)
    }

    return (
        <ReactQuill 
            modules={modules} 
            onChange={handleChange}
            style={{marginTop: 40}}
        />
    );
};

let container = [
    [{ 'font': [] }],
    [{ 'header': [1, 2, 3, 4, 5, 6, false] }],
    [{ 'size': ['small', false, 'large', 'huge'] }],  // custom dropdown
  
    ['bold', 'italic', 'underline', 'strike'],        // toggled buttons
    ['blockquote', 'code-block'],
    [{ 'color': [] }, { 'background': [] }],          // dropdown with defaults from theme
    [{ 'script': 'sub'}, { 'script': 'super' }],      // superscript/subscript
  
    [{ 'list': 'ordered'}, { 'list': 'bullet' }],
    [{ 'indent': '-1'}, { 'indent': '+1' }],          // outdent/indent
    [{ 'direction': 'rtl' }],                         // text direction
    [{ 'align': [] }],
  
    ['clean', 'link', 'image','video']
  ]


export default ReactQill;