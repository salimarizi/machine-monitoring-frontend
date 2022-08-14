import '../assets/css/styles.css';
import '../assets/css/custom.css';
import anomaly_wave from '../assets/images/anomaly_wave.svg';
import anomaly_spectogram from '../assets/images/anomaly_spectogram.svg';
import normal_wave from '../assets/images/normal_wave.svg';
import normal_spectogram from '../assets/images/normal_spectogram.svg';
import { useEffect, useState } from 'react';
import axios from '../util/Api';
import { BASE_URL } from "../constants"

function AlertDetail(props) {
  const [reasons, setReasons] = useState([])
  const [actions, setActions] = useState([])

  const [selectedReason, setSelectedReason] = useState(null)
  const [selectedAction, setSelectedAction] = useState(null)
  const [comments, setComments] = useState('')
  const [startEdit, setStartEdit] = useState(false)

  const getAllReasons = async() => {
    await axios.get('api/reasons/')
    .then(({data}) => {
      // data = data.filter(item => item.machine_name == props.anomaly.machine)
      setReasons(data)
    })
  }

  const getAllActions = async() => {
    await axios.get('api/actions/')
    .then(({data}) => {
      setActions(data)
    })
  }

  useEffect(() => {
    getAllReasons()
    getAllActions()
  }, [])

  return (
    <>
      <h2 className='font-weight-light'>Alert ID #{props.anomaly ? props.anomaly._id : '00013211'}</h2>
      <small>Detected at {props.anomaly ? props.anomaly.timestamp : '2021-06-18 20:10:04'}</small>
      <hr/>
      <div className='row'>
        <div className='col-md-6'>
          Anomaly Machine Output <br/>
          {
            props.anomaly && <audio controls>
              <source src={BASE_URL + 'static/' + props.anomaly.sound_clip} type="audio/wav"/>
            </audio>
          }
          <br/><br/>
          <img 
            className="img img-fluid" 
            src={props.anomaly ? BASE_URL + 'static/' + props.anomaly.wave : anomaly_wave}
            />
          <br/><br/>
          <img 
            className="img img-fluid" 
            src={props.anomaly ? BASE_URL + 'static/' + props.anomaly.spectogram : anomaly_spectogram}
            />
          <br/><br/>
        </div>
        <div className='col-md-6'>
          Normal Machine Output
          {
            props.anomaly && <audio controls>
              <source src={BASE_URL + 'static/' + props.anomaly.sound_clip} type="audio/wav"/>
            </audio>
          }
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
          {props.anomaly ? props.anomaly.machine : 'Machine Name'}
        </div>
      </div>
      <br/>
      <div className='row'>
        <div className='col-md-4'>
          <b>Suspected Reason</b><br/>
          {
            props.anomaly?.reason != null && !startEdit ? 
            props.anomaly?.reason?.reason
            : 
            <select 
              className='form-control'
              onChange={(e) => setSelectedReason(e.target.value)}>
              <option>Unknown Anomally</option>
              {
                reasons.map(item => {
                  if (item.machine_name == props.anomaly?.machine) {
                    return <option value={item._id}>{item.reason}</option>
                  }
                })
              }
            </select>
          }
        </div>
      </div>
      <br/>
      <div className='row'>
        <div className='col-md-4'>
          <b>Action Required</b><br/>
          {
            props.anomaly?.action != null && !startEdit ? 
            props.anomaly?.action?.name
            : 
            <select 
              className='form-control'
              onChange={(e) => setSelectedAction(e.target.value)}>
              <option>Select Action</option>
              {
                actions.map(item => (
                  <option value={item._id}>{item.name}</option>
                ))
              }
            </select>
          }
        </div>
      </div>
      <br/>
      <div className='row'>
        <div className='col-md-8'>
          <b>Comments</b><br/>
          {
            props.anomaly?.action != null && !startEdit ? 
            props.anomaly?.comments 
            :
            <textarea 
              className='form-control'
              rows={4}
              onChange={(e) => setComments(e.target.value)}/>
          }
        </div>
      </div>
      <br/>
      {
        props.anomaly?.action != null && !startEdit  ? 
        <button
          className='btn btn-success text-white'
          onClick={() => {
            setStartEdit(true)
          }}>
            Edit Response
        </button>
        :
        <button 
          className='btn btn-purple text-white'
          onClick={async() => {
            let [selectedActionObj] = actions.filter(item => item._id === selectedAction)
            let [selectedReasonObj] = reasons.filter(item => item._id === selectedReason)

            await axios.patch('api/anomalies/', {
                  "_id": props.anomaly._id,
                  "action": selectedActionObj,
                  "reason": selectedReasonObj,
                  "timestamp": props.anomaly.timestamp,
                  "machine": props.anomaly.machine,
                  "anomaly": props.anomaly.anomaly,
                  "sensor": props.anomaly.sensor,
                  "sound_clip": props.anomaly.sensor_clip,
                  "comments": comments
            })
            .then(({data}) => {
              console.log(data);
            })
          }}>
          Update
        </button>
      }
    </>
  );
}

export default AlertDetail;
