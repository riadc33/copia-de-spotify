import React from "react";
import { Alert, Button, Form, FormGroup, Input } from "reactstrap";

import { Search } from "@styled-icons/boxicons-regular/Search"
import { Books } from "@styled-icons/icomoon/Books"
import song from "../assets/music/y2mate.com - Gotye ft Kimbra  Somebody That I Used Know Lyrics English  Subtitulado Español.mp3";
import { PauseSolid } from "@styled-icons/zondicons/PauseSolid"
import { PlayCircle } from "@styled-icons/material-sharp/PlayCircle"
import { Rewind } from "@styled-icons/foundation/Rewind"
import { } from ""

export const Reproductor = () => {


    const audio = new Audio(song);
    const Audios = (e) => {
        e.preventDefault();

        document.addEventListener("click", () => {
            audio.pause();

        })
        audio.muted = true;



    }
    const audioMute = (e) => {
        e.preventDefault();
        document.addEventListener("click", () => {
            audio.muted = false;
            audio.play();
        })

    }

    return (
        <>
            <div className="reproductor">
                <div className="reproductorDiv">
                    <Button onClick={(e) => Audios(e)}>play</Button>
                    <Button onClick={(e) => audioMute(e)}>mute</Button>
                </div>
            </div>
        </>
    );
};
