import React, { Component } from 'react';
import FormLead from '../../ui-components/form/form';

import './form.scss';

/* eslint-disable-next-line */
export interface DashboardProps {}

export class Dashboard extends Component<DashboardProps> {
  render() {
    return (
      <FormLead />
    );
  }
}

export default Dashboard;
