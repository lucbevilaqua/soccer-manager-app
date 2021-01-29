import { createAppContainer, createSwitchNavigator } from 'react-navigation';

import Main from '~/pages/Main';
import DrawTeam from '~/pages/DrawTeam';

const Routes = createAppContainer(createSwitchNavigator({ Main, DrawTeam }));

export default Routes;
