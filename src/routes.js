import { createAppContainer, createSwitchNavigator } from 'react-navigation';

import Main from '~/pages/Main';
import DrawTeam from '~/pages/DrawTeam';
import Pay from '~/pages/Pay';

const Routes = createAppContainer(createSwitchNavigator({ Main, DrawTeam, Pay }));

export default Routes;
