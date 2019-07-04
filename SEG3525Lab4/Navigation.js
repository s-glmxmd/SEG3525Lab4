export function setNavigationScreen (data) {
	const action = {
		type: SET_NAV_SCREEN,
		screen: data.screen,
		route: data.route,
		main: data.main,
		routes: data.routes,
		reviewEventSelected: data.reviewEventSelected,
		successfullyInsertedEvents: data.successfullyInsertedEvents
	};

	return action;
}

let updateNavigation = (screen, route) => {
	let nav = store.getState().NavigationReducer;

	if (screen === 'Home') {
		nav.main = 'Home';
	} else if (screen === 'Order') {
		nav.main = 'Order';
    } 
    
    setNavigationScreen({
		...nav,
		screen,
		route,
	});

};

export default updateNavigation;