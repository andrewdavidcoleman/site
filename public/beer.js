'use strict';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      beerList: [],
      selectedBeer: null
    };

    this.getRecipe = this.getRecipe.bind(this)
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
  getRecipe(selectedBeer){
    this.setState({
      selectedBeer
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
        <div className='row flex-fill'>
        { this.state.selectedBeer ? <Recipe beer={this.state.selectedBeer} /> : null }
        </div>
        <div className='row flex-fill' />
      </div>
    );
  }
}

class Recipe extends React.Component {

  constructor(props) {
    super(props);
    switch (props.beer.label) {
      case 'IPA':
        this.state = {
          facts: [
            'ABV: 6.5%',
            'IBU: 50-55'
          ],
          ingredients:[
            '5 lbs Wheat Dry Malt Extract',
            '8 oz Flaked Wheat',
            '8 oz Biscuit Malt',
            '8 oz Vienna Malt',
            '1 oz Hallertau Hops',
            '1 oz More Hops',
            '1 oz More Hops',
            '1 oz More Hops',
            '1 oz More Hops',
            '1 oz More Hops',
          ],
          directions: [
            '1) add 3-5 gallons of water to a large pot & heat to 155" add specialty grains and...',
            '2) ...',
            '3) ...',
            '4) ...',
            '5) ...',
            '6) ...',
            '7) ...',
            '8) ...',
            '9) ...',
            '10) ...',
          ]
        };
        break;
      case 'Golden Ale':
        this.state = {
          facts: [
            'ABV: 5.9%',
            'IBU: 15-18',
          ],
          ingredients:[
            '5 lbs Wheat Dry Malt Extract',
            '8 oz Flaked Wheat',
            '8 oz Biscuit Malt',
            '8 oz Vienna Malt',
            '1 oz Hallertau Hops',
            '1 oz Tangerine or Sweet Orange Peel',
            '2 tsp Ground Coriander(Optional)',
            'Wyeast 3942 Belgian Wheat of Wyeast 3944 Belgian Wit'
          ],
          directions: [
            '1) add 3-5 gallons of water to a large pot & heat to 155" add specialty grains and...',
            '2) ...',
            '3) ...',
            '4) ...',
            '5) ...',
            '6) ...',
            '7) ...',
            '8) ...',
            '9) ...',
            '10) ...'
          ]
        };
        break;
      case 'Orange Belgian Wheat':
        this.state = {
          facts: [
            'ABV: 4.5%',
            'IBU: 15-18'
          ],
          ingredients:[
            '5 lbs Wheat Dry Malt Extract',
            '8 oz Flaked Wheat',
            '8 oz Biscuit Malt',
            '8 oz Vienna Malt',
            '1 oz Hallertau Hops',
            '1 oz Tangerine or Sweet Orange Peel',
            '2 tsp Ground Coriander(Optional)',
            'Wyeast 3942 Belgian Wheat of Wyeast 3944 Belgian Wit'
          ],
          directions: [
            '1) add 3-5 gallons of water to a large pot & heat to 155" add specialty grains and...',
            '2) ...',
            '3) ...',
            '4) ...',
            '5) ...',
            '6) ...',
            '7) ...',
            '8) ...',
            '9) ...',
            '10) ...'
          ]
        };
        break;
      default:

    }
  }

  componentWillReceiveProps(newProps) {
    switch (newProps.beer.label) {
      case 'IPA':
        this.state = {
          facts: [
            'ABV: 6.5%',
            'IBU: 50-55'
          ],
          ingredients:[
            '5 lbs Wheat Dry Malt Extract',
            '8 oz Flaked Wheat',
            '8 oz Biscuit Malt',
            '8 oz Vienna Malt',
            '1 oz Hallertau Hops',
            '1 oz More Hops',
            '1 oz More Hops',
            '1 oz More Hops',
            '1 oz More Hops',
            '1 oz More Hops',
          ],
          directions: [
            '1) add 3-5 gallons of water to a large pot & heat to 155" add specialty grains and...',
            '2) ...',
            '3) ...',
            '4) ...',
            '5) ...',
            '6) ...',
            '7) ...',
            '8) ...',
            '9) ...',
            '10) ...',
          ]
        };
        break;
      case 'Golden Ale':
        this.state = {
          facts: [
            'ABV: 5.9%',
            'IBU: 15-18',
          ],
          ingredients:[
            '5 lbs Wheat Dry Malt Extract',
            '8 oz Flaked Wheat',
            '8 oz Biscuit Malt',
            '8 oz Vienna Malt',
            '1 oz Hallertau Hops',
            '1 oz Tangerine or Sweet Orange Peel',
            '2 tsp Ground Coriander(Optional)',
            'Wyeast 3942 Belgian Wheat of Wyeast 3944 Belgian Wit'
          ],
          directions: [
            '1) add 3-5 gallons of water to a large pot & heat to 155" add specialty grains and...',
            '2) ...',
            '3) ...',
            '4) ...',
            '5) ...',
            '6) ...',
            '7) ...',
            '8) ...',
            '9) ...',
            '10) ...'
          ]
        };
        break;
      case 'Orange Belgian Wheat':
        this.state = {
          facts: [
            'ABV: 4.5%',
            'IBU: 15-18'
          ],
          ingredients:[
            '5 lbs Wheat Dry Malt Extract',
            '8 oz Flaked Wheat',
            '8 oz Biscuit Malt',
            '8 oz Vienna Malt',
            '1 oz Hallertau Hops',
            '1 oz Tangerine or Sweet Orange Peel',
            '2 tsp Ground Coriander(Optional)',
            'Wyeast 3942 Belgian Wheat of Wyeast 3944 Belgian Wit'
          ],
          directions: [
            '1) add 3-5 gallons of water to a large pot & heat to 155" add specialty grains and...',
            '2) ...',
            '3) ...',
            '4) ...',
            '5) ...',
            '6) ...',
            '7) ...',
            '8) ...',
            '9) ...',
            '10) ...'
          ]
        };
        break;
      default:

    }
  }

  render() {
    return (
      <div className='col'>
        <div className='row mt-4'>
          <div className='col-3 d-flex flex-column align-items-center fact-list'>
            <div className='row'>
              <h5>Facts:</h5>
            </div>
            <div className='row'>
              <ul className='col'>
                  {this.state.facts.map((fact) => {
                    return <li>{fact}</li>
                  })}
              </ul>
            </div>
          </div>
          <div className='col-3 d-flex flex-column align-items-beginning ingredient-list'>
            <div className='row'>
              <h5>What you'll need:</h5>
            </div>
            <div className='row'>
              <ul className='col'>
                  {this.state.ingredients.map((fact) => {
                    return <li>{fact}</li>
                  })}
              </ul>
            </div>
          </div>
          <div className='col-6 d-flex flex-column align-items-beginning ingredient-list'>
            <div className='row'>
              <h5>Directions:</h5>
            </div>
            <div className='row'>
              <ul className='col'>
                  {this.state.directions.map((fact) => {
                    return <li>{fact}</li>
                  })}
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const domContainer = document.querySelector('#root');
ReactDOM.render(<App />, domContainer);
