import React, { Component } from 'react'
import { Link, withRouter } from 'react-router-dom'
import axios from 'axios';
import Header from '../../layout/Header'
import Sidebar from '../../layout/Sidebar'
import Footer from '../../layout/Footer'

class AddTaxClass extends Component {   


   constructor() {
    super();
    this.state = {
      taxclass_name: '',
      cgst_rate: '',
      sgst_rate: '',
      igst_rate: '',
      tds_rate: '',
      status: 'Active'
    };

    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.onClickTaxclasses = this.onClickTaxclasses.bind(this);
   }


   onChange(e) {
    this.setState({ [e.target.name]: e.target.value })
   }


   onSubmit(e) {
    e.preventDefault()

    const taxclasses_data = {
      taxclass_name: this.state.taxclass_name,
      cgst_rate: this.state.cgst_rate,
      sgst_rate: this.state.sgst_rate,
      igst_rate: this.state.igst_rate,
      tds_rate: this.state.tds_rate,
      status: this.state.status
    }

    
    let uri = process.env.REACT_APP_BACKEND_BASE_URL +'admin/masters/taxclasses/add';    
    console.log(taxclasses_data);

      axios.post(uri, taxclasses_data).then((response) => {
       
      console.log(response);

      if(response.data.error)
      {
          alert('error');
      }

      else
      {
         this.props.history.push(`/admin/masters/taxclasses`)
      }

    });

   }


   onClickTaxclasses(e){
     this.props.history.push(`/admin/masters/taxclasses`)
   }


    render() {
        return (
            
        <React.Fragment>
        <Header />
        <Sidebar />
        {/* Content Wrapper. Contains page content */}
              <div className="content-wrapper">
                {/* Content Header (Page header) */}
                <div className="content-header">
                  <div className="container-fluid">
                    <div className="row mb-2">
                      <div className="col-sm-6">
                        <h5 className="m-0 text-dark">Add Tax Class</h5>
                      </div>{/* /.col */}
                      <div className="col-sm-6">
                        <ol className="breadcrumb float-sm-right">
                          <li className="breadcrumb-item"><a href="#">Home</a></li>
                          <li className="breadcrumb-item active">Add Tax Class</li>
                        </ol>
                      </div>{/* /.col */}
                    </div>{/* /.row */}
                  </div>{/* /.container-fluid */}
                </div>
                {/* /.content-header */}
               {/* Main content */}
      <section className="content">
        <div className="row">
          <div className="col-12">
            <div className="card">
              <div className="card-header">
                <h3 className="card-title"></h3>
                <span style={{float: 'right'}}>
                  <button type="button" onClick={this.onClickTaxclasses} className="btn btn-sm btn-default" ><i className="fa fa-bars mr-2" />Tax Classes</button>
                </span>
              </div>
              {/* /.card-header */}
        <div className="card-body">
        <form onSubmit={this.onSubmit}>
        <div className="form-group">
          <label htmlFor="taxclass_name">Tax Class Name</label>
          <input type="text" className="form-control" name="taxclass_name" id="taxclass_name" placeholder="Enter Tax Class Name" onChange={this.onChange} value={this.state.taxclass_name} autoComplete = "off" required />
        </div>
        <div className="form-group">
          <label htmlFor="cgst_rate">CGST Rate</label>
          <input type="text" className="form-control" name="cgst_rate" id="cgst_rate" placeholder="Enter CGST Rate" onChange={this.onChange} value={this.state.cgst_rate} autoComplete = "off" required />
        </div>
        <div className="form-group">
          <label htmlFor="sgst_rate">SGST Rate</label>
          <input type="text" className="form-control" name="sgst_rate" id="sgst_rate" placeholder="Enter SGST Rate" onChange={this.onChange} value={this.state.sgst_rate} autoComplete = "off" required />
        </div>
        <div className="form-group">
          <label htmlFor="igst_rate">IGST Rate</label>
          <input type="text" className="form-control" name="igst_rate" id="igst_rate" placeholder="Enter IGST Rate" onChange={this.onChange} value={this.state.igst_rate} autoComplete = "off" required />
        </div>
        <div className="form-group">
          <label htmlFor="tds_rate">TDS Rate</label>
          <input type="text" className="form-control" name="tds_rate" id="tds_rate" placeholder="Enter TDS Rate" onChange={this.onChange} value={this.state.tds_rate} autoComplete = "off" required />
        </div>
        
        <div className="form-group">
          <label htmlFor="status">Status</label>
          <select className="form-control" id="status" name="status" onChange={this.onChange} value={this.state.status} required >
             <option value="Active">Active</option>
             <option value="Inactive">Inactive</option>
          </select>
        </div>
        
        <div className="form-group">
          <input type="submit" className="btn btn-info mr-2" value="Submit" />
          <input type="button" className="btn btn-secondary" value="Cancel" onClick={this.onClickTaxclasses} />
        </div>

            </form>
            </div>
            </div>
            {/* /.card */}
          </div>
          {/* /.col */}
        </div>
        {/* /.row */}
      </section>
      {/* /.content */}
      {/* /.content */}
        </div>{/* /.content-wrapper */}
        
                 <Footer />

            </React.Fragment>
         
           
                )
            }
        }

export default AddTaxClass