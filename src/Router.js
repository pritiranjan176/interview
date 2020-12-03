
import React, { Component } from 'react';
import { Platform, BackHandler, Animated } from 'react-native'

import { Scene, Router, Actions, Overlay, Stack, Drawer, Modal } from 'react-native-router-flux';


import CardStackStyleInterpolator from './Common/CardStackStyleInterpolator';
import Login from './Components/Login';
import PendingOrder from './Components/PendingOrder';
import Map from "./Components/Map";

class RouterComponent extends Component {

    render() {

        return (
                <Router key='main' backAndroidHandler={this.func_androidBackHandler}>
                    <Overlay key="overlay">
                        <Modal key="modal"
                            hideNavBar={false}
                            transitionConfig={() => ({
                                screenInterpolator: CardStackStyleInterpolator.forHorizontal, transitionSpec: {
                                    duration: 250,
                                    timing: Animated.timing,
                                }
                            })}
                        >
                            <Scene key="Login" component={Login} backTitle=" " hideNavBar initial />
                            <Scene key="PendingOrder" component={PendingOrder} title="" backTitle=" " hideNavBar />
                            <Scene key="Map" component={Map} backTitle=" " hideNavBar  />

                        </Modal>
                    </Overlay>
                </Router>

        );
    }

    func_androidBackHandler = () => {
        if (Actions.currentScene == "PendingOrder") {
            Snackbar.show({
                text: "Press EXIT to close the app",
                duration: Snackbar.LENGTH_LONG,
                textColor: "white",
                action: {
                    text: "EXIT",
                    textColor: "red",
                    onPress: () => {
                        this.func_onExit();
                    }
                }
            });

            return true;
        }
    };

    //**When exit hits */
    async func_onExit() {
        BackHandler.exitApp();
    }
}

export default RouterComponent;
