'use strict';

// import Select from 'react-select'

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      beerList: [],
      selectedBeer: null
     };
  }

  componentWillMount(){

    const beers = this.getAllBeers()
    const beerList = []

    for (var i = 0; i < beers.length; i++) {
      beerList.push(
        { value: beers[i].id, label: beers[i].name }
      )
    }

    this.setState({
      beerList
    });
  }

  getAllBeers(){
    //mock API call to get beer list
    return [
      {
        id: 1,
        name: 'IPA'
      },
      {
        id: 2,
        name: 'Orange Belgian Wheat'
      },
      {
        id: 3,
        name: 'Golden Ale'
      }
    ]
  }

  //mock API call to get recipe
  getRecipe(beerSelected){
    this.setState({
      beerSelected
    })
  }

  render() {

    const customStyles = {
      control: (provided, state) => ({
        ...provided,
        borderRadius: '100px',
        boxShadow: '0 1px 6px 0 rgba(32,33,36,0.28)',
        border: 'none',
        height: '42px'
      }),
      option: (provided, state) => ({
        ...provided
      })
    }

    return (
      <div className='container-fluid flex-fill d-flex flex-column beer-me'>
        <div className='row flex-fill' />
        <div className='row '>
          <div className='col-3'/>
          <div className='col-6'>
            <div className='row flex-fill align-items-center justify-content-center fade-down-in-delay mb-3'>
              <img className='mr-2 beer-icon' src='images/beer.png' />
              <h1 className='mb-0 mr-5'>beer me</h1>
            </div>
            <div className='row flex-fill fade-down-in justify-content-center'>
              <div className='col react-select-container'>
                <Select
                styles={customStyles}
                options={this.state.beerList}
                onChange={this.getRecipe}
                 />
              </div>
            </div>
          </div>
          <div className='col-3'/>
        </div>
        <div className='row flex-fill' />
        <div className='row flex-fill' />
      </div>
    );
  }
}

class RecipeCard extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      beer: props.beerSelected
     };
  }

  render() {

    const customStyles = {
      control: (provided, state) => ({
        ...provided,
        borderRadius: '100px',
        boxShadow: '0 1px 6px 0 rgba(32,33,36,0.28)',
        border: 'none',
        height: '42px'
      }),
      option: (provided, state) => ({
        ...provided
      })
    }

    return (
      <div className='card'>
        {this.state.beer.label}
      </div>
    );
  }
}

const domContainer = document.querySelector('#root');
ReactDOM.render(<App />, domContainer);
