import { useState } from "react"

export default function Login({lform, setLetform}) {
    return (
        <div class="modal fade show" id="myModal" style={{display: 'block'}}>
            <div class="modal-dialog modal-dialog-centered">
                <div class="modal-content">
                    <div class="modal-header">
                        <h4 class="modal-title">Sign In</h4>
                        <button type="button" onClick={()=>setLetform(false)} class="btn-close" data-bs-dismiss="modal"></button>
                    </div>
                    <div class="modal-body">
                       <form>
                        <div className="row mb-3">
                            <div className="col-md-6">
                                <div className="form-group">
                                    <label>Firstname</label>
                                    <input type="text" name="firstname" id="firstname" className="form-control"/>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="form-group">
                                    <label>Lastname</label>
                                    <input type="text" name="lastname" id="lastname" className="form-control"/>
                                </div>
                            </div>
                        </div>
                        <div className="form-group mb-3">
                            <label>Email</label>
                            <input type="email" name="email" id="email" className="form-control"/>
                        </div>
                        <div className="form-group mb-3">
                            <label>Member ID</label>
                            <input type="text" name="member_key" id="member_key" className="form-control"/>
                        </div>
                        <div className="form-group mb-3 text-center">
                            <span class="button__elem SignUp-submitBtn"><button type="submit" class="primary round large primary-color"><span class="button__label">Sign Up</span></button></span>
                        </div>
                       </form>
                    </div>
                </div>
            </div>
        </div>
    )
}