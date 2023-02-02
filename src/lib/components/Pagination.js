import React from 'react';
import { returnProductsArrays } from './ServicesListEmployees';

const Pagination = (props) => {
 
	/*here we retrieve the list of employees in order to be able to return an array sorted in relation
	to the number of rows we want per page*/ 
	//const { users, filteredusers, pageIndex } = useSelector(state => ({ ...state.user }));
    let newData;
	if (props.filteredusers.length > 0) {
		//if the search users input is actived, the newdata contains the value of search data
		newData = returnProductsArrays(props.filteredusers, props.stateValuePageSelect);
	} else {
		newData = returnProductsArrays(props.users, props.stateValuePageSelect);  
	}

	//if we are in first page the balise li Previsous is disabled, and if we are in last page the Next <li> are disabled
	const Previous = React.useMemo(() => { 
		return { isDisabled: props.pageIndex === 0 }
	}, [props.pageIndex])
	const Next = React.useMemo(() => {  
		return { isDisabled: props.pageIndex === newData.length - 1  }
	}, [props.pageIndex, newData])

	//function to choose theme css
	function Themecss() {
		if (props.cssThemes == 'theme2') {
			return 'nav-pagination-dark'
		} else if (props.cssThemes == 'theme3') {
			return 'nav-pagination-danger'
		} else {
			return 'nav-pagination-white'
		}
	}
		 
    return ( 
		!!newData.length &&
		<nav className={Themecss()} aria-label="Page navigation example" >
			<ul className="ul-pagination">
				<li className={`${ Previous.isDisabled ? 'disabled-li' : ''}`}>
				    <a onClick={(e) => props.updatePage(e, props.pageIndex - 1)}>Previous</a>
				</li>
					{newData.map((_, index) => {
					    return (<li key={index} className={props.pageIndex == index ? "active-li" : ""}>
						            <a onClick={(e) => props.updatePage(e, index)}>{ index + 1 }</a>
								</li>
								)}
					)}						
				<li className={`${ Next.isDisabled ? 'disabled-li' : ''}`}>
				    <a onClick={(e) => props.updatePage(e, props.pageIndex + 1)}>Next</a>
				</li>
			</ul>
		</nav>)
}
export default Pagination 