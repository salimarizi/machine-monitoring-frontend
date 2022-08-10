import '../assets/css/styles.css';
import '../assets/css/custom.css';

function AlertItem(props) {
  return (
    <div className='col-md-11 border-full mx-auto mt-2' onClick={props.onClickDiv}>
      <div className='row'>
        <div className='col-md-6'>
          <small>ID #{props.id}</small>
        </div>
        <div className='col-md-6 text-right'>
          {
            (props.anomaly == 'Mild') ?
              <span className="badge badge-pill badge-success text-white">
                {props.anomaly}
              </span>
            :
            (props.anomaly == 'Moderate') ?
              <span className="badge badge-pill badge-warning text-white">
                {props.anomaly}
              </span>
            :
              <span className="badge badge-pill badge-red text-white">
                {props.anomaly}
              </span>
          } 
        </div>
      </div>
      <div className='row'>
        <div className='col-md-12'>
          <small><b>Unknown Annomaly</b></small><br/>
          <small>Detected at {props.detected_at}</small><br/>
          <small className='text-primary'>{props.machine}</small>
        </div>
      </div>
    </div>
  );
}

export default AlertItem;
