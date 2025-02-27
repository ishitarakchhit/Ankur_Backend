import React from "react";
import { useEffect, useRef, useState } from "react";
import Peer from "peerjs";
import "./VideoCall.css";
import LinkSection from "./LinkSection";

function VideoCall() {
  const [MeetInfoPopup, setMeetInfoPopup] = useState(true);
  const [peerId, setPeerId] = useState("");
  const [remotePeerIdValue, setRemotePeerIdValue] = useState("");
  const remoteVideoRef = useRef(null);
  const currentUserVideoRef = useRef(null);
  const peerInstance = useRef(null);

  useEffect(() => {
    const peer = new Peer();

    peer.on("open", (id) => {
      setPeerId(id);
    });

    peer.on("call", (call) => {
      var getUserMedia =
        navigator.getUserMedia ||
        navigator.webkitGetUserMedia ||
        navigator.mozGetUserMedia;

      getUserMedia({ video: true, audio: true }, (mediaStream) => {
        currentUserVideoRef.current.srcObject = mediaStream;
        currentUserVideoRef.current.play();
        call.answer(mediaStream);
        call.on("stream", function (remoteStream) {
          remoteVideoRef.current.srcObject = remoteStream;
          remoteVideoRef.current.play();
        });
      });
    });

    peerInstance.current = peer;
  }, []);

  const call = (remotePeerId) => {
    var getUserMedia =
      navigator.getUserMedia ||
      navigator.webkitGetUserMedia ||
      navigator.mozGetUserMedia;

    getUserMedia({ video: true, audio: true }, (mediaStream) => {
      currentUserVideoRef.current.srcObject = mediaStream;
      currentUserVideoRef.current.play();

      const call = peerInstance.current.call(remotePeerId, mediaStream);

      call.on("stream", (remoteStream) => {
        remoteVideoRef.current.srcObject = remoteStream;
        remoteVideoRef.current.play();
      });
    });
  };
  return (
    <div className="App">
      <h1>Current user id is {peerId}</h1>
      <div className="call-section">
        <input
          type="text"
          value={remotePeerIdValue}
          onChange={(e) => setRemotePeerIdValue(e.target.value)}
        />
        <button onClick={() => call(remotePeerIdValue)}>Call</button>
      </div>
      <div className="videoCall-section">
        <video
          preload="auto"
          ref={currentUserVideoRef}
          className="user-video"
        />
        <video preload="auto" ref={remoteVideoRef} className="current-video" />
      </div>
      {MeetInfoPopup && (
        <LinkSection setMeetInfoPopup={setMeetInfoPopup} peerId={peerId} />
      )}
      {/* <MeetFooter /> */}
    </div>
  );
}

export default VideoCall;
