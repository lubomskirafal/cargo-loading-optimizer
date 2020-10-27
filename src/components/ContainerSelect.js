import React, {useState} from 'react';

const ContainerSelect = props => {

  const [useRMCOIL4M2100kgNumber, setRMCOIL4M2100kgNumber] = useState(0);
  const handleSetRMCOIL4M2100kgNumber = e => setRMCOIL4M2100kgNumber(
    e.target.value < 0 ? 0 : e.target.value
    );

  const [useRMCOIL3MS3552250kgNumber, setRMCOIL3MS3552250kgNumber] = useState(0);
  const handleSetRMCOIL3MS3552250kgNumber = e => setRMCOIL3MS3552250kgNumber(
    e.target.value < 0 ? 0 : e.target.value
    );

  const [useRMCOIL3Ms7001850kgNumber, setRMCOIL3Ms7001850kgNumber] = useState(0);
  const handleSetRMCOIL3Ms7001850kgNumber = e => setRMCOIL3Ms7001850kgNumber(
    e.target.value < 0 ? 0 : e.target.value
    );

  const [useRMCOIL3P3120kgNumber, setRMCOIL3P3120kgNumber] = useState(0);
  const handleSetRMCOIL3P3120kgNumber = e => setRMCOIL3P3120kgNumber(
    e.target.value < 0 ? 0 : e.target.value
    );

  const [useRMCOIL7M4300kgNumber, setRMCOIL7M4300kgNumber] = useState(0);
  const handleSetRMCOIL7M4300kgNumber = e => setRMCOIL7M4300kgNumber(
    e.target.value < 0 ? 0 : e.target.value
    );

    return (
        <div className="card">
            <p>Wybież kontener</p>

            <table>
              <tbody>

                <tr>
                    <th>Typ</th>
                    <th>Ilość</th>
                </tr>

                <tr>
                  <td>
                    <label htmlFor="RMCOIL 4M - 2100kg">RMCOIL 4M- 2100kg</label>
                  </td>
                  <td>
                    <input 
                      type="number" 
                      id="RMCOIL 4M - 2100kg"
                      value={useRMCOIL4M2100kgNumber}
                      onChange={handleSetRMCOIL4M2100kgNumber}
                    />
                  </td>
                </tr>

                <tr>
                  <td>
                    <label htmlFor="RMCOIL3M S355 - 2250kg">RMCOIL3M S355 - 2250kg</label>
                  </td>
                  <td>
                  <input 
                    type="number" 
                    id="RMCOIL3M S355 - 2250kg" 
                    value={useRMCOIL3MS3552250kgNumber}
                    onChange={handleSetRMCOIL3MS3552250kgNumber}
                  />
                  </td>
                </tr>

                <tr>
                  <td>
                    <label htmlFor="RMCOIL3M s700 - 1850kg">RMCOIL3M s700 - 1850kg</label>
                  </td>
                  <td>
                    <input 
                      type="number" 
                      id="RMCOIL3M s700 - 1850kg" 
                      value={useRMCOIL3Ms7001850kgNumber}
                      onChange={handleSetRMCOIL3Ms7001850kgNumber}
                    />
                  </td>
                </tr>

                <tr>
                  <td>
                    <label htmlFor="RMCOIL3P - 3120kg">RMCOIL3P - 3120kg</label>
                  </td>
                  <td>
                    <input 
                      type="number" 
                      id="RMCOIL3P - 3120kg" 
                      value={useRMCOIL3P3120kgNumber}
                      onChange={handleSetRMCOIL3P3120kgNumber}
                    />
                  </td>
                </tr>

                <tr>
                  <td>
                    <label htmlFor="RMCOIL7M - 4300kg">RMCOIL7M - 4300kg</label>
                  </td>
                  <td>
                    <input 
                      type="number" 
                      id="RMCOIL7M - 4300kg" 
                      value={useRMCOIL7M4300kgNumber}
                      onChange={handleSetRMCOIL7M4300kgNumber}
                    />
                  </td>
                </tr>

              </tbody>
            </table>

          </div>
    );
};

export default ContainerSelect;