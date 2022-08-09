import '../assets/css/styles.css';
import '../assets/css/custom.css';

function AlertItem() {
  return (
    <div className='col-md-11 border-full mx-auto mt-2'>
      <div className='row'>
        <div className='col-md-6'>
          <small>ID #00013211</small>
        </div>
        <div className='col-md-6 text-right'>
          <span className="badge badge-pill badge-warning text-white">
            Moderate
          </span>
        </div>
      </div>
      <div className='row'>
        <div className='col-md-12'>
          <small><b>Unknown Annomaly</b></small><br/>
          <small>Detected at 2021-06-18 20:10:04</small><br/>
          <small className='text-primary'>CNC Machine</small>
        </div>
      </div>
    </div>
  );
}

export default AlertItem;
