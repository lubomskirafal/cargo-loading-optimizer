import React, {useState} from 'react';

const CardSelect = props => {

  const [useSGNSNumber, setSGNSNumber] = useState('');
  const handleSetSGNSNumber = e => setSGNSNumber(
    e.target.value < 0 ? 0 : e.target.value
    );

  const [useSGMMNSSNumber, setSGMMNSSNumber] = useState('');
  const handleSetSGMMNSSNumber = e => setSGMMNSSNumber(
    e.target.value < 0 ? 0 : e.target.value
    );

  const [useSGMMNSSGNSNumber, setSGMMNSSGNSNumber] = useState('');
  const handleSetSGMMNSSGNSNumber = e => setSGMMNSSGNSNumber(
    e.target.value < 0 ? 0 : e.target.value
    );

  const [useSGMMNSNumber, setSGMMNSNumber] = useState('');
  const handleSetSGMMNSNumber = e => setSGMMNSNumber(
    e.target.value < 0 ? 0 : e.target.value
    );

    return (
        <div className="card">
            <p>Wybież wagony</p>

            <table>
              <tbody>

                <tr>
                    <th>Typ</th>
                    <th>Ilość</th>
                </tr>

                <tr>
                  <td>
                    <label htmlFor="40' SGNS - 16,t">40' SGNS - 16,t</label>
                  </td>
                  <td>
                    <input 
                      type="number" 
                      id="40' SGNS - 16,t"
                      placeholder="max 20t/oś"
                      value={useSGNSNumber}
                      onChange={handleSetSGNSNumber}
                    />
                  </td>
                </tr>

                <tr>
                  <td>
                    <label htmlFor="40' SGMMNSS 16,5t">40' SGMMNSS 16,5t</label>
                  </td>
                  <td>
                  <input 
                    type="number" 
                    id="40' SGMMNSS 16,5t" placeholder="max 22,5t/oś"
                    value={useSGMMNSSNumber}
                    onChange={handleSetSGMMNSSNumber}
                  />
                  </td>
                </tr>

                <tr>
                  <td>
                    <label htmlFor="40' SGMMNS/SGNS 17,5t">40' SGMMNS/SGNS 17,5t</label>
                  </td>
                  <td>
                    <input 
                      type="number" 
                      id="40' SGMMNS/SGNS 17,5t" 
                      placeholder="max 22,5t/oś"
                      value={useSGMMNSSGNSNumber}
                      onChange={handleSetSGMMNSSGNSNumber}
                    />
                  </td>
                </tr>

                <tr>
                  <td>
                    <label htmlFor="40' SGMMNS 15,2t">40' SGMMNS 15,2t</label>
                  </td>
                  <td>
                    <input 
                      type="number" 
                      id="40' SGMMNS 15,2t" 
                      placeholder="max 22,5t/oś"
                      value={useSGMMNSNumber}
                      onChange={handleSetSGMMNSNumber}
                    />
                  </td>
                </tr>

              </tbody>
            </table>

          </div>
    );
};

export default CardSelect;