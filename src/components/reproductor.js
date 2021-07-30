import React, { useState, useEffect } from "react";
import { Alert, Button, Form, FormGroup, Input } from "reactstrap";
import song from "../assets/music/y2mate.com - Gotye ft Kimbra  Somebody That I Used Know Lyrics English  Subtitulado Español.mp3";
import { Pause } from "@styled-icons/boxicons-regular/Pause"
import { Play } from "@styled-icons/boxicons-regular/Play"
import { Rewind } from "@styled-icons/foundation/Rewind"
import { Random } from "@styled-icons/fa-solid/Random"
import { ArrowRepeatAll } from "@styled-icons/fluentui-system-regular/ArrowRepeatAll"
import { ArrowRepeatAllOff } from "@styled-icons/fluentui-system-regular/ArrowRepeatAllOff"
import { Playlist } from '@styled-icons/boxicons-solid/Playlist';
import { DevicesOther } from '@styled-icons/material/DevicesOther';
import { SpeakerMute } from '@styled-icons/fluentui-system-regular/SpeakerMute'
import { Speaker2 } from '@styled-icons/fluentui-system-regular/Speaker2'
import { Speaker1 } from '@styled-icons/fluentui-system-regular/Speaker1'
import { Speaker0 } from '@styled-icons/fluentui-system-regular/Speaker0'
import { SpeakerBluetooth } from '@styled-icons/fluentui-system-regular/SpeakerBluetooth'
import { Heart } from '@styled-icons/boxicons-regular/Heart';
import MaxMonitor from "../assets/icon-max-monitor.svg"
import styled, { keyframes } from 'styled-components'



export const Reproductor = () => {

    const [btnRandom, setBtnRandom] = useState(false)
    const [btnBucle, setBtnBucle] = useState(false)
    const [play, setPlay] = useState(false)
    const [repeat, setRepeat] = useState(false)
    const [animated, setAnimate] = useState(false)
    const [songDuration, setSongDuration] = useState(0)
    console.log(songDuration)
    useEffect(() => {

        setAnimate(true)
        if (animated == true) {
            const timer = setTimeout(() => {
                setAnimate(false)
            }, 300);
        }

    }, [btnBucle])
    const ButtonSlider = styled.div`
    background: #ffffff !important;
    height: 12px;
    width: 12px;
    position:absolute;
    left:${songDuration > 98 ? 98 : songDuration}%;
    cursor:pointer;
    border-radius: 100% !important;
`;
    const Rotate = styled.div`
    position: absolute;
    height: 4px;
    left: 0px;
    width: ${songDuration}%;

    background-color: #1db954 !important;
    border-radius: 10px !important;
    outline: none !important;
  
  


`;

    const Repeat = () => {

        if (repeat) {
            setRepeat(false)
        } else {
            setRepeat(true)
        }

    }

    const random = () => {

        if (btnRandom) {
            setBtnRandom(false)
        } else {
            setBtnRandom(true)
        }

    }
    const buclesong = () => {

        if (btnBucle) {
            setBtnBucle(false)
        } else {
            setBtnBucle(true)
        }

    }
    const audio = new Audio(song);
    const audioMute = (e) => {
        e.preventDefault();
        setPlay(false)
        document.addEventListener("click", () => {
            audio.pause();
            audio.muted = true;
        })




    }
    const Audios = (e) => {
        e.preventDefault();
        setPlay(true)
        document.addEventListener("click", () => {
            audio.muted = false;
            audio.play();

        })

    }

    return (
        <>
            <div className="reproductor">
                <div className="alinicion">
                    <div className="left-div-reproductor">

                        <div className="">
                            <img className="img-reproductor" src="https://i.scdn.co/image/7f143f49de9521bc762c68cd29ff251f94244c28" />
                        </div>
                        <div className="datos-song">
                            <div className="nombres-song">
                                <span style={{ fontWeight: "400" }}>
                                    hola carlos
                                </span>
                            </div >

                            <div className="nombre-albun">
                                <span style={{ fontWeight: "300" }}>
                                    hola carlos
                                </span>
                            </div>
                        </div>
                        <div className="div-like">
                            <Button className="btn-like" onClick={(e) => audioMute(e)}><Heart size={16} /></Button>
                        </div>

                        <div className="div-pantalla">
                            <Button className="btn-pantalla" onClick={(e) => audioMute(e)}><img src={MaxMonitor} width="16px"
                                height="16px" />
                            </Button>
                        </div>
                    </div>
                </div>
                <div className="alinicion">
                    <div className="reproductorDiv">
                        <div className="btn-div-reproductor">
                            <Button className="btn-icons-reproductor" onClick={() => random()}><Random size={16} /></Button>
                            <Button className="btn-icons-reproductor" onClick={(e) => audioMute(e)}><Rewind size={16} /></Button>
                            {play ? (<Button className="btn-play-stop" onClick={(e) => audioMute(e)}><Pause size={28} color="#181818" /></Button>
                            ) : (<Button className="btn-play-stop" onClick={(e) => Audios(e)}><Play size={28} color="#181818" style={{ paddingLeft: "2px" }} /></Button>)}

                            {/* <Button onClick={(e) => audioMute(e)}><Pause size={28} /></Button> */}

                            <Button className="btn-icons-reproductor" onClick={(e) => audioMute(e)}><Rewind size={16} className="rotado" /></Button>

                            {/* <Button onClick={(e) => audioMute(e)}><ArrowRepeatAllOff size={20} /></Button> */}

                            {btnBucle ? (<Button id={animated ? "btn-icons-animate" : ""} className="btn-icons-reproductor" onClick={() => buclesong()}><ArrowRepeatAll size={16} /></Button>) :
                                (<Button id={animated ? "btn-icons-animate" : ""} className="btn-icons-reproductor" onClick={() => buclesong()}><ArrowRepeatAllOff size={16} /></Button>)}
                        </div>





                        <div className="div-input">
                            <div className="data-pogreso-inicio">
                                0:00
                            </div>


                            <div className="btn-div-input">
                                <Input minValue="0" maxValue="100" value={songDuration} onChange={(e) => setSongDuration(e.target.value)} className="input-range" type="range"></Input>
                                <Rotate />
                                <ButtonSlider />

                            </div>
                            <div className="data-pogreso-fin">
                                3:24
                            </div>
                        </div>

                    </div>
                </div>
                <div className="alinicion" >
                    <div className="config-repro">
                        <div className="btn-icons">
                            <Button className="btn-speaker" onClick={(e) => audioMute(e)}><Playlist size={18} /></Button>
                        </div>
                        <div className="btn-icons">
                            <Button className="btn-speaker" onClick={(e) => audioMute(e)}><DevicesOther size={18} /></Button>
                        </div>
                        <div className="btn-volumen">
                            <div className="btn-speaker">
                                <Button className="btn-speaker" onClick={(e) => audioMute(e)}><SpeakerMute size={18} /></Button>

                            </div>

                            {/*   <Button onClick={(e) => audioMute(e)}><Speaker2 size={20} /></Button>
                        <Button onClick={(e) => audioMute(e)}><Speaker1 size={20} /></Button>
                        <Button onClick={(e) => audioMute(e)}><Speaker0 size={20} /></Button>
                        <Button onClick={(e) => audioMute(e)}><SpeakerBluetooth size={20} /></Button> */}
                            <div className="">

                                <Input className="input-range-volumen" type="range"></Input>

                            </div>
                        </div>








                    </div>
                </div>
            </div>
        </>
    );
};
