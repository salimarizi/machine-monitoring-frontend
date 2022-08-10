import '../assets/css/styles.css';
import '../assets/css/custom.css';
import '../assets/fontawesome/css/all.min.css';
import AlertItem from './AlertItem';
import AlertDetail from './AlertDetail';

import axios from '../util/Api';
import { useEffect } from 'react';

function Body() {
  const getAllAnomalies = async() => {
    await axios.get('api/anomalies/')
    .then(({data}) => {
      console.log('salim');
      console.log(data);
    })
  }
  
  useEffect(() => {
    getAllAnomalies()
  })

  return (
    <div className="App">
      <br/>
      <div className='row'>
        <div className='col-md-11 mx-auto'>
          <div className='card'>
            <div className='card-header bg-white'>
              <div className='col-md-2'>
                <select className='form-control'>
                  <option>CNC Machine</option>
                  <option>Milling Machine</option>
                </select>
              </div>
            </div>
            <div className='card-body'>
              <div className='row'>
                <div className='col-md-3 border-right'>
                  <div className='row border-bottom'>
                    <div className='col-md-12'>
                      <small>
                        <i className='fa fa-chevron-left'></i>
                        &nbsp; Back
                      </small>
                    </div>
                  </div>
                  <div className='row border-bottom'>
                    <div className='col-md-12'>
                        <small>6 Alerts</small> &nbsp;
                        <span className="badge badge-pill badge-primary">
                          2 news
                        </span>
                    </div>
                  </div>
                  <div className='row'>
                    <AlertItem/>
                    <AlertItem/>
                    <AlertItem/>
                    <AlertItem/>
                    <AlertItem/>
                    <AlertItem/>
                  </div>
                </div>
                <div className='col-md-9'>
                    <AlertDetail/>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Body;
