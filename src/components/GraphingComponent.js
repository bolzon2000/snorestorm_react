'use strict';

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
  StyleSheet,
  Text,
  requireNativeComponent,
  Dimensions
} from 'react-native';


interface Props {
    dataSource: array;
}

export default class GraphComponent extends React.Component<Props, {}> {
    constructor(props: Props) {
        super(props);
        console.log("data source is this: " + this.props.dataSource);
    }
    render() {
      //width calculation uses the width of the graph (300/2), and subtracts the margin (20x2) from the window width
      return <GraphView dataArray={this.props.dataSource} style={{ position: 'absolute', flexBasis: 100, width: 300, top: 50, left:((Dimensions.get('window').width -40) / 2) - 150, }}/>
    }
};

const GraphView = requireNativeComponent('Graph', GraphComponent);

GraphComponent.propTypes = {
  dataArray: PropTypes.array,
}
