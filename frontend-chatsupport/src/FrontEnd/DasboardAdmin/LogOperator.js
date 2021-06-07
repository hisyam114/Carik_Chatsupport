import React from 'react'
import './logoperator.css'

 function LogOperator() {
    return (
        <div className="dashboard">
            <h1 className="title">LOG OPERATOR</h1>
            <div className="box-items">
                <div class="form-group row">
                    <label for="pilih-Operator" className="col-sm-2 col-form-label">Pilih Operator :</label>
                    <div className="col-sm-10">
                    <select className="form-control">
                    <option>Operator 1</option>
                    <option>Operator 2</option>
                    </select>
                    </div>
                </div> 
                <table className="table">
                    <thead>
                        <tr>
                            <th>Waktu</th>
                            <th>Jumlah Kader</th>
                            <th>Memuaskan</th>
                            <th>Tidak Memuaskan</th>
                            <th>Tidak Respon</th>
                        </tr>
                    </thead>    
                </table>                    
            </div>           
        </div>
    )
}
export default LogOperator