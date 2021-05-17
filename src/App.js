import logo from './logo.svg';
import useRecorder from "./useRecorder";
import './App.css';

function App() {
  

let [audioURL, isRecording, startRecording, stopRecording,audioFileBlob,cancelRecoding,isDelete,isAudioStatus,isMusicLoaderSataus] = useRecorder();

const insertData=()=>{

  var bodyFormData = new FormData();
 // bodyFormData.append('name',userName);
  bodyFormData.append('file_path', audioFileBlob); 

  var config = {
      method: 'post',
      url: 'http://localhost:5000/api/users/addUser',
      headers: { 
          "Content-Type": "multipart/form-data"
      },
      data : bodyFormData
  };
 
//   if(audioURL!=='' && userName !==''){
//       axios(config)
//       .then(function (response) {
//          swal("", "Your recording has been submited successfully.", "success")
//          .then((value) => {
//  history.go(0)
// });
//         //  alert('Your recording has been submited successfulley.')
//        // window.location.reload(); 
//         //history.go(0)
//         console.log(JSON.stringify(response.data));
//       })
//       .catch(function (error) {
//         console.log(error);
//       });
//   }else{
//     swal("", "User name and aduio input required.", "error")
     
//   }

}
return(<div className="container">
        <div className="heading">
          <h1>Test</h1>
        </div>
         
       
          <div className="row">
            <div className="col-25 cust-css">
              <label htmlFor="subject">Audio</label>
            </div>
            <div className="col-75 cust-css">
              <div className="audio-class">
               <audio src={audioURL} controls  style={{display:isAudioStatus?'block':'none'}}/> <button onClick={cancelRecoding} className="audioBtn"  style={{display:isDelete?'none':'block'}}>
      cancel
      </button>
        {/* <img src={preloader} height="100" width="400" style={{display:isMusicLoaderSataus?'block':'none'}} /> */}
      </div>
             
             <div style={{marginTop:"10px"}}>
              <button onClick={startRecording} className="audioBtn" style={{display:isRecording?'none':'block'}}>
               <i class="fa fa-play" aria-hidden="true">  Click to start Recording</i>
              </button>
      <button onClick={stopRecording} className="audioBtn"style={{display:!isRecording?'none':'block'}}>
       <i className="fa fa-pause" aria-hidden="true"> Click to stop Recording</i>

      </button>
       
            </div>
          </div>
      
     </div>
         <div className="row">
            <div className="col-25 cust-css">
             
                </div>
                {/* <div className="col-75 cust-css">
                    <button className="formBtn" onClick={insertData} >
                    Submit
                </button>
                </div> */}

          </div>
      </div>)
}

export default App;
