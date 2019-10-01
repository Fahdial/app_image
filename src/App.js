import React from 'react';
import axios from 'axios'
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'

const urlApi = 'http://localhost:8082/'

class App extends React.Component{

  state = {
    data: [],
    name: '',
    inputTodo: '',
    selectInput: '',
    selectedFile:''
  }

  // componentDidMount () {
  //   this.getDataApi()
  // }


  // getDataApi = () => {
  //   axios.get(urlApi + 'getList')
  //   .then(res => {
  //     this.setState({data: res.data})
  //   })
  //   .catch(err => {
  //     console.log(err)
  //     alert('System Error')
  //   })
  // }


  onSubmit = () => {
    var fd = new FormData()
    // karean di upload.single fieldnya adalah 'aneh'
    fd.append('aneh', this.state.selectedFile)
    fd.append('name', this.state.name)
    
    axios.post('http://localhost:8082/uploadimage', fd)
    .then(res => {
      console.log(res);
    })
    .catch(err=> {
      console.log(err);
    })
  }
  
render(){
  return(
        <div className='row mt-5'>
          <div className='offset-5 col-2'>
            <input 
                  onChange={e => this.setState({name: e.target.value})} 
                  value = {this.state.name}
                  type="text" 
                  className="form-control"/>
                <input 
                  type="file" 
                  ref="fileBtn" 
                  className="d-none" 
                  onChange={e => this.setState({selectedFile: e.target.files[0]})}/>
                <input 
                  type="button" 
                  onClick={() => this.refs.fileBtn.click()} 
                  value= "select a file" 
                  className="mt-2 btn btn-block btn-primary"/>
              </div>
            <div className='col-1'>
              {/* <input 
                  onChange={e => this.setState({inputTodo: e.target.value})} 
                  type="text" 
                  className="form-control"/> */}
              <input 
                  type="button" 
                  value="submit" 
                  onClick={this.onSubmit} 
                  className="btn btn-block btn-success"/>
            </div>
        </div>
      )
    }
}

export default App;
