
function AddPaymentMethod() {
    return (
        <>
            <section>
                <div className='container'>
                    <div className='row'>
                        <div className="col-xl-12 row-sm mt-3">
                            <div className="card">
                                <div className="card-header pb-0">
                                    <div className="d-flex justify-content-between">
                                        <h4 className="card-title mg-b-2 mt-2">Add Bank Master</h4>



                                    </div>
                                    <hr />
                                </div>
                                <div className="card-body">
                                    <div className="table-responsive">
                                        <div id="my_table_wrapper" className="dataTables_wrapper dt-bootstrap4 no-footer">
                                            <div className="row">
                                                <div className="col-sm-12 col-md-4 mb-4">
                                                    <div className="dataTables_lengthh" id="my_table_length">
                                                        <label>Method Type</label>
                                                        <input type="text" className="form-control form-control-sm" placeholder="Method Type" aria-controls="my_table" />

                                                    </div>
                                                </div>

                                                <div className="col-sm-12 col-md-4 mt-4">
                                                    <div className="dataTables_lengthh text-center" id="my_table_length">
                                                        <button type="button" class="btn btn-primary">Save Method</button>
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
                </div>
            </section>
        </>
    )
}
export default AddPaymentMethod