import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; 
// import { AppProvider } from './context/AppContext';
import CartValue from './components/CartValue';
import ExpenseList from './components/ExpenseList';
import ItemSelected from './components/ItemSelected';
import Location from './components/Location';
// adding the following lines to add components not already listed
import ExpenseItem from './components/ExpenseItem';
// end of added code

// following 6 lines of code replaced by code immediately following 
// function App() {
//   return (
//     <div className="App">
//     </div>
//   );
// }
import { AppProvider } from './context/AppContext';
const App = () => {
    return (
        <AppProvider>
            <div className='container'>
                    <div className='row mt-3'>
                        {
                                            // CartValue component
                    <div className='col-sm'>
                        <CartValue />
                    </div>
                        }        

                        {
                                             //ExpenseList component
                    <div className='col-sm'>
                        <ExpenseList />
                    </div>
                        }        
        
                                

                        {
                                             //ItemSelected component
                    <div className='col-sm'>
                        <ItemSelected />
                    </div>
                        }        

                        {
                                             //Location component
                    <div className='col-sm'>
                        <Location />
                    </div>
                        }        
                        {
                                             //ExpenseItem component
                    <div className='col-sm'>
                        <ExpenseItem />
                    </div>
                        }        


                </div>
            </div>
        </AppProvider>
    );
};
// export default App;

export default App;
