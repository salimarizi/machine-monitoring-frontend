import '../assets/css/styles.css';
import '../assets/css/custom.css';
// import audio from '../assets/audios/1.wav';
import anomaly_wave from '../assets/images/anomaly_wave.svg';
import anomaly_spectogram from '../assets/images/anomaly_spectogram.svg';
import normal_wave from '../assets/images/normal_wave.svg';
import normal_spectogram from '../assets/images/normal_spectogram.svg';

function AlertDetail() {
  return (
    <>
      <h2 className='font-weight-light'>Alert ID #00013211</h2>
      <small>Detected at 2021-06-18 20:10:04</small>
      <hr/>
      <div className='row'>
        <div className='col-md-6'>
          Anomaly Machine Output <br/>
          {/* <audio controls>
            <source src={audio} type="audio/wav"/>
          </audio> */}
          <br/><br/>
          <img src={anomaly_wave}/>
          <br/><br/>
          <img src={anomaly_spectogram}/>
          <br/><br/>
        </div>
        <div className='col-md-6'>
          Normal Machine Output
          {/* <audio controls>
            <source src={audio} type="audio/wav"/>
          </audio> */}
          <br/><br/>
          <img src={normal_wave}/>
          <br/><br/>
          <img src={normal_spectogram}/>
          <br/><br/>
        </div>
      </div>
      <div className='row'>
        <div className='col-md-4'>
          <b>Equipment</b><br/>
          CNC Machine
        </div>
      </div>
      <br/>
      <div className='row'>
        <div className='col-md-4'>
          <b>Suspected Reason</b><br/>
          <select className='form-control'>
            <option>Unknown Anomally</option>
          </select>
        </div>
      </div>
      <br/>
      <div className='row'>
        <div className='col-md-4'>
          <b>Action Required</b><br/>
          <select className='form-control'>
            <option>Select Action</option>
          </select>
        </div>
      </div>
      <br/>
      <div className='row'>
        <div className='col-md-8'>
          <b>Comments</b><br/>
          <textarea className='form-control' rows={4}/>
        </div>
      </div>
      <br/>
      <button className='btn btn-purple text-white'>
        Update
      </button>
    </>
  );
}

export default AlertDetail;
