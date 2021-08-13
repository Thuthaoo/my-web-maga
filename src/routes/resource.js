import React from 'react';

import { route, withView, mount } from 'navi';
import { View } from 'react-navi';
import AppCommonLayout from '../component/AppCommonLayout/AppCommonLayout';
import HomePage  from '../container/HomePage'
import Comics from '../container/Comics/Comics';

export const routes = {
  '/': withView(
    <AppCommonLayout>
      <View />
    </AppCommonLayout>,
    mount({
      '/': 
        route({ title: 'stamping.routes.resource.home_page', view: <HomePage /> }),
    }),
  ),
  '/comics': withView(
    <AppCommonLayout>
      <View />
    </AppCommonLayout>,
    mount({
      '/': 
        route({ title: 'stamping.routes.resource.home_page', view: <Comics/> }),
    }),
  ),
};
