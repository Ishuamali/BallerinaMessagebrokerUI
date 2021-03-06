/*
* Copyright (c) 2018, WSO2 Inc. (http://www.wso2.org) All Rights Reserved.
*
* WSO2 Inc. licenses this file to you under the Apache License,
* Version 2.0 (the "License"); you may not use this file except
* in compliance with the License.
* You may obtain a copy of the License at
*
* http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing,
* software distributed under the License is distributed on an
* "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
* KIND, either express or implied. See the License for the
* specific language governing permissions and limitations
* under the License.
*/

import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import Drawer from '../Drawer';
import ExchangeDetails from './ExchangeClicked';

const styles = (theme) => ({
	title: {
		textAlign: 'left',
		fontSize: 30,
		color: '#284456'
	}
});

class BodyExchangeDetails extends React.Component {
	render() {
		return (
			<div>
				<div>
					<Drawer />
				</div>
				<div>
					<ExchangeDetails data={this.props.match.params.name} />
				</div>
			</div>
		);
	}
}

BodyExchangeDetails.propTypes = {
	classes: PropTypes.object.isRequired
};

export default withStyles(styles)(BodyExchangeDetails);
