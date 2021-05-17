import { useEffect, useState } from "react";

const useRecorder = () => {
  const [audioURL, setAudioURL] = useState("");
  const [isRecording, setIsRecording] = useState(false);
  const [recorder, setRecorder] = useState(null);
  const [audioFileBlob, setAudioFileBlob] = useState(null);
  const [isDelete,setIsDelete] = useState(true);
  const [isAudioStatus,setIsAudioStatus] = useState(false);
  const [isMusicLoaderSataus,setIsMusicLoaderSataus] = useState(false);

  useEffect(() => {
    // Lazily obtain recorder first time we're recording.
    if (recorder === null) {
      if (isRecording) {
        requestRecorder().then(setRecorder, console.error);
      }
      return;
    }

    // Manage recorder state.
    if (isRecording) {
      recorder.start();
    } else {
      recorder.stop();
      
    }

    // Obtain the audio when ready.
    const handleData = e => {
    setAudioFileBlob(e.data)
    setAudioURL(URL.createObjectURL(e.data));
    setIsDelete(false)
    };

    recorder.addEventListener("dataavailable", handleData);
    return () => recorder.removeEventListener("dataavailable", handleData);
  }, [recorder, isRecording]);

  const startRecording = () => {
    setIsRecording(true);
    setIsAudioStatus(false)
     setIsDelete(true)
    setIsMusicLoaderSataus(true)
  };

  const cancelRecoding=()=>{
     setAudioURL('')
     setIsRecording(false)
     setIsDelete(true)
     setIsAudioStatus(false)
     
  }

  const stopRecording = () => {
    setIsRecording(false);
    setIsAudioStatus(true)
    setIsMusicLoaderSataus(false)
  };

  return [audioURL, isRecording, startRecording, stopRecording,audioFileBlob,cancelRecoding,isDelete,isAudioStatus,isMusicLoaderSataus];
};

async function requestRecorder() {
  const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
  
  return new MediaRecorder(stream);
}
export default useRecorder;
