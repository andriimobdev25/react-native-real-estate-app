import React from 'react';
import { Text } from 'react-native';

import { Scene, Router, Actions } from 'react-native-router-flux';
import PropertyList from './components/PropertyList';
import Property from './components/Property';
//import PropertyDetail from './src/components/PropertyDetail';

import Icon from 'react-native-vector-icons/Ionicons';
const properties = (<Icon name="ios-home" size={30} color="#808080" />)
const agents = (<Icon name="md-contacts" size={30} color="#808080" />)
const profile = (<Icon name="md-person" size={30} color="#808080" />)

const Properties = ({ selected, title }) => {
    return (
      <Text style={{color: selected ? 'red' :'black'}}>{properties}</Text>
    );
}

const Agents = ({ selected, title }) => {
    return (
        <Text style={{color: selected ? 'red' :'black'}}>{agents}</Text>
    );
}

const Profile = ({ selected, title }) => {
    return (
        <Text style={{color: selected ? 'red' :'black'}}>{profile}</Text>
    );
}

const RouterComponent = () => {
    return (
        <Router>
            <Scene key="root" hideNavBar>{/* Hide extra header due to nested scenes */}
                {/* Tab Container */}
                <Scene key="tabbar" tabs={true} tabBarStyle={{ backgroundColor: '#FFFFFF' }}>
                    {/* Tab and it's scenes */}
                    <Scene key="osu" title="Properties" icon={Properties}>
                        <Scene initial key="propertyList" component={PropertyList} title="Property List" />
                        <Scene key="propertyView" component={Property} title="View Property" />
                    </Scene>

                    {/* Tab and it's scenes */}
                    <Scene key="um" title="Agents" icon={Agents}>
                        <Scene key="agentList" component={PropertyList} title="Agent List" />
                    </Scene>

                    {/* Tab and it's scenes */}
                    <Scene key="vu" title="My HomeSquare" icon={Profile}>
                        <Scene key="profile" component={PropertyList} title="My HomeSquare" />
                    </Scene>
                </Scene>
            </Scene>
        </Router>
    );
};

export default RouterComponent;