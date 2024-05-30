"use client"

import {useState} from "react";

//the idea is to input the textarea and append it into the savedNotes array
const savedNotes: string[] = [];

export default function Notes() {


    return (
        <div className={'items-center flex flex-col'}>
            <h1 className={'text-2xl mb-3'}>Notes App</h1>
            <textarea className={'mb-3'} placeholder={'type away your dreams...'}></textarea>
            <button className={'btn'}>Post</button>
            {savedNotes}
        </div>
    )
}
