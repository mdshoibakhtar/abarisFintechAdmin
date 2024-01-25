import React from 'react'
import { Link } from 'react-router-dom'

function BankMasterList() {
    return (
        <div className='row'>
            <div className="col-xl-12 row-sm mt-3">
                <div className="card">
                    <div className="card-header pb-0">
                        <div className="d-flex justify-content-between">
                            <h4 className="card-title mg-b-2 mt-2">Bank Master</h4>
                            {/* <button className="btn btn-primary btn-sm" type="button" data-toggle="modal" data-target="#member_download_model" fdprocessedid="pe4h68"> Download Retailer</button>
                                        <Link to="/create-user/retailer" className="btn btn-danger btn-sm"> Create Retailer</Link>
                                        <i className="mdi mdi-dots-horizontal text-gray" /> */}
                        </div>
                        <hr />
                    </div>
                    <div className="card-body">
                        <div className="table-responsive">
                            <div id="my_table_wrapper" className="dataTables_wrapper dt-bootstrap4 no-footer">
                                <div className="row">
                                    <div className="col-sm-12 col-md-6">
                                        <div className="dataTables_length" id="my_table_length">
                                            <label>Show Entries<select name="my_table_length" aria-controls="my_table" className="custom-select custom-select-sm form-control form-control-sm" fdprocessedid="6dvoag">
                                                <option value={10}>10</option>
                                                <option value={25}>25</option>
                                                <option value={50}>50</option>
                                                <option value={100}>100</option>
                                            </select> </label>
                                        </div>
                                    </div>
                                    <div className="col-sm-12 col-md-6">
                                        <div id="my_table_filter" className="dataTables_filter">
                                            <label>Search:
                                                <form autoComplete="off">
                                                    <input type="search" className="form-control form-control-sm" placeholder aria-controls="my_table" />
                                                </form>
                                            </label>
                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-sm-12">
                                        <table className="table-all">
                                            <thead>
                                                <tr>
                                                    <th>Bank Name</th>
                                                    <th>IFSC Code</th>
                                                    <th>Bank ID</th>
                                                    <th>Paysprint Bank Id</th>
                                                    <th>Status</th>
                                                </tr>
                                            </thead>
                                            <tbody>

                                                <tr role="row" class="odd border-top border-bottom border-primary">
                                                    <td>SBI Bank</td>
                                                    <td class="sorting_1">SBN0872365</td>
                                                    <td>1</td>
                                                    <td><span class="positive-value">45</span></td>
                                                    <td>
                                                        <span className='bg-danger text-light py-1 px-2 rounded'>Disabled</span>
                                                    </td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-sm-12 col-md-5">
                                        <div className="dataTables_info" id="my_table_info" role="status" aria-live="polite">
                                            Showing 0 to 0 of 0 entries
                                        </div>
                                    </div>
                                    <div className="col-sm-12 col-md-7">
                                        <div className="dataTables_paginate paging_simple_numbers" id="my_table_paginate">
                                            <ul className="pagination">
                                                <li className="paginate_button page-item previous " id="my_table_previous">
                                                    <Link to="#" aria-controls="my_table" data-dt-idx={0} tabIndex={0} className="page-link">Previous</Link>
                                                </li>
                                                <li className="paginate_button page-item next " id="my_table_next">
                                                    <Link to="#" aria-controls="my_table" data-dt-idx={1} tabIndex={0} className="page-link">Next</Link>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>

                            </div>
                            {/* Script */}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BankMasterList
