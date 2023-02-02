# React Table Component 

ce package a été créé pour le projet 14 Pass a jQuery library to React.
Dans ce composant vous allez avoir un tableau personnalisable avec vos données, et 3 theme de couleurs differents (possibilité de rajouter des themes dans des versions superieures).

## Author

Chahouat Taoufik

## installation

```sh
npm i chahouat-table-component --save
```
## usage

```js

import React from "react";
import Table from 'chahouat-table-component';;

function myComponent() {
  
return (
    <div className='table-container'>
        <Table 
            arrayValuesTh={arrayValuesTh}
            updatePage={updatePagePagination} 
            dataEmployees={dataEmployees.users}
            dataEmployeeFiltered={dataEmployees.filteredusers} 
            pageIndex={dataEmployees.pageIndex}
            setDataEmployeesFiltered={dataFiltered}
            valueSelect1={5} 
            valueSelect2={10} 
            valueSelect3={15} 
            changePage={startGo} 
            pBack={'Go To Home'}
            cssThemes={'theme1'}
        />
    </div>
    );
}

export default myComponent;
```

## explanation of all the properties of the component

*  **arrayValuesTh** this will be an array that contains the contents of our table, for example 
```js
const arrayValuesTh = ["First Name", 
                           "Last Name", 
                           "Start Date", 
                           "Departement", 
                           "Date of Birth", 
                           "Street", 
                           "City", 
                           "State", 
                           "Zip Code"]; 
```

* **updatePage** will be a function that updates the page index so the page where we are because in this table we have a pagination system.
ca will be for example a usestate that stores the page number, or as in this example we store the page number in the redux store
```js
const updatePagePagination = (event, index) => {
		event.preventDefault()
		dispatch(setPageIndex(index))
	}
 
```

* **dataEmployees** will be an array that contains the list of the data to be displayed in our table, of course each object must have the same key of our heads th, for exemple
```js
const dataEmployees = {
    users : {
        firstname: "john",
        lastname: "Doe",
        StartDate: "27/01/2022",
        DateofBirth: "21/08/1998",
        Street: "Rue de Paris",
        City: "Paris",
        State: "France",
        ZipCode: "75000" 
    }
}
```

* **dataEmployeeFiltered** here we will have the list of the filtered data in relation to the search input by key words

* **pageIndex** here we retrieve from the state or redux or other, the page where we are at the pagination level of our table

* **setDataEmployeesFiltered** here we fill in the table that contains the list of our data sorted according to the keyword search in the search input.
In my case it is a function that stores the data in the redux store
```js
const dataFiltered = (data) => {
    dispatch(setFilteredEmployees(data))
}
```
* **valueselect 1-2-3** here we choose how many lines of our data display in each page of our table

* **changePage** this property is not required.
We can use it just if we want to display for example our table after rendering another component false.
here by exeple I display my table only when the state start is true, and then I hide the other component 
```js
const [ start, setStart ] = useState(false);
    function startGo() {
        setStart(!start);
    }
```

* **pback**  property to choose the keyword to use to go back so leave the table.
this property is also not required and can be left empty

* **csstheme**
this property allows us to choose the css color theme of our table.
we have for the moment 3 possible choices: theme1 , theme2 and theme3.
In future versions of the packgage, other themes will be available.

theme1
<img src="/assets/images/theme1.PNG"/>

theme2
<img src="/assets/images/theme2.PNG"/>

theme3
<img src="/assets/images/theme3.PNG"/>


