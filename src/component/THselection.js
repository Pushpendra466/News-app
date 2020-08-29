import React from 'react';
import { Navbar,NavDropdown,Nav,Form,FormControl,Button } from 'react-bootstrap';

class THselection extends React.Component {
    constructor(props) {
        super(props);
        this.state = {country: "in",
                       category : "general" ,    
                    };
    
        this.handleChangeCountry = this.handleChangeCountry.bind(this);
        this.handleChangeCategory = this.handleChangeCategory.bind(this);
        this.handleChangeQ = this.handleChangeQ.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
      }
    handleChangeCountry(event)
        {
            
            this.setState({country: event.target.value , category:this.state.category});
            this.props.handleChangeC(event.target.value);
        }

    handleChangeCategory(event){
            this.setState({country:this.state.country,category: event.target.value});
            this.props.handleChangeCat(event.target.value);
        }

    handleChangeQ(event){
            this.setState({
                q:event.target.value,
                qFlag:false
            })
          
            }
          

    handleSubmit(event){
              
                this.props.handleQuerySubmit(this.state.q);
                this.setState({
                    // q:''
                })
                
                event.preventDefault();
            }

    handleHome=()=>{
        this.props.handleHm()
    }

    render() {
        
        //country
        //ae ar at au be bg br ca ch cn co cu cz de eg fr gb gr hk hu id ie il 
        //in it jp kr lt lv ma mx my ng nl no nz ph pl pt ro rs ru sa se sg si 
        //sk th tr tw ua us ve za
    
        return (
            
            <div>
            <Navbar bg="dark" variant="dark" fixed="top" expand="lg">
            <Navbar.Brand onClick={this.handleHome}>Daily News</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
            <Nav.Link href="#link" disabled>Country: </Nav.Link>
            <select className="browser-default custom-select col-md-5 offset-md-0" value={this.state.country} onChange={this.handleChangeCountry}>
            <option value="ae">United Arab Emirates </option>
            <option value="ar">Argentina </option>
            <option value="at">Austria </option>
            <option value="au">Australia </option>
            <option value="be">Belgium </option>
            <option value="bg">Bulgaria </option>
            <option value="br">Brazil </option>
            <option value="ca">Canada </option>
            <option value="ch">Switzerland </option>
            <option value="cn">China </option>
            <option value="co">Colombia </option> 
            <option value="cu">Cuba </option>
            <option value="cz">Czechia </option> 
            <option value="de">Germany </option>
            <option value="eg">Egypt </option> 
            <option value="fr">France </option>
            <option value="gb">United Kingdom </option> 
            <option value="gr">Greece </option>
            <option value="hk">Hong Kong </option> 
            <option value="hu">Hungary </option>
            <option value="id">Indonesia </option> 
            <option value="ie">Ireland </option>
            <option value="il">Israel </option> 
            <option value="in">India </option>
            <option value="it">Italy </option> 
            <option value="jp">Japan </option>
            <option value="kr">Korea </option> 
            <option value="lt">Lithuania </option>
            <option value="lv">Latvia </option> 
            <option value="ma">Morocco </option>
            <option value="mx">Mexico </option> 
            <option value="my">Malaysia </option>
            <option value="ng">Nigeria </option>
            <option value="nl">Netherlands </option> 
            <option value="no">Norway </option>
            <option value="nz">New Zealand </option> 
            <option value="ph">Philippines </option>
            <option value="pl">Poland </option> 
            <option value="pt">Portugal </option>
            <option value="ro">Romania </option> 
            <option value="rs">Serbia </option>
            <option value="ru">Russian Federation </option> 
            <option value="sa">Saudi Arabia </option>
            <option value="se">Sweden </option> 
            <option value="sg">Singapore </option>
            <option value="si">Slovenia </option> 
            <option value="sk">Slovakia </option>
            <option value="th">Thailand </option>
            <option value="tr">Turkey </option>  
            <option value="tw">Taiwan </option>
            <option value="ua">Ukraine </option> 
            <option value="us">United States of America </option>
            <option value="ve">Venezuela </option> 
            <option value="za">South Africa </option>
      </select>
      <Nav.Link href="#home" disabled>Category:</Nav.Link>
      <select className="browser-default custom-select col-md-4 offset-md-0" value={this.state.category} onChange={this.handleChangeCategory}>
       <option value="business"> Business</option>
       <option value="entertainment"> entertainment</option>
       <option value="general"> general</option>
       <option value="health"> health</option>
       <option value="science"> science</option>
       <option value="sports"> sports</option>
       <option value="technology"> technology</option>
       </select>
    </Nav>
    <Form onSubmit={this.handleSubmit} inline>
      <FormControl type="text" placeholder="Search" className="mr-sm-2" value={this.state.q} onChange={this.handleChangeQ} />
      <Button variant="outline-success" onClick={this.handleSubmit}>Search</Button>
    </Form>
  </Navbar.Collapse>
</Navbar>
        
            </div>
        );


       
        

    }



}

export default THselection;