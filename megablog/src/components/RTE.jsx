import React from 'react'
import { Editor } from '@tinymce/tinymce-react'
import { Controller } from 'react-hook-form'


export default function RTE({name ,  control, label, defaultValue=""}) {
  return (
    <div className='w-full'>{
        label && <label className='inline-block mb-1pl-1'>{label}</label>
    }
    <Controller 
    namw={name || "content"}
    control={control}
    render={({field: {onChange}})=>(
        <Editor 
        initialValue={defaultValue}
        init={{
            initialValue: defaultValue,
            height:500,
            menubar:true,
            plugins : [
                'advlist' ,
                "autolink",
                 "lists",
                 "link",
                  "image" ,
                  "advlist" ,
                  "autolink",
                  "charmap" ,
                  "print" ,
                  "preview" ,
                  "anchor" ,
                  "seachreplace" ,
                  "visualblocks" ,
                  "code" ,
                  "fullscreen" , 
                  "insertdatetime",
                  "media",
                  "table",
                  "paste" ,
                  "code",
                  "help",
                  "wordcount",
            ],
            toolbar:
            'undo redo | formatselect | bold italic underline| \
            alignleft aligncenter alignright alignjustify | \
            bullist numlist outdent indent | removeformat | help' , 
            content_style:'body { font-family:Helvetica , Arial ,sans-serif; font-size:14px}'
        }}
        onEditorChange={onChange}
        />
    )}
    
    />
    </div> 
  )
}

 