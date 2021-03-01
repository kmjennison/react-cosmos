import React from 'react';
import {
  ReactDecoratorsByPath,
  ReactFixtureExportsByPath,
} from 'react-cosmos-shared2/react';
import { render } from 'react-dom';
import { DomRendererConfig } from '../shared/rendererConfig';
import { getDomContainer } from './container';
import { DomFixtureLoader } from './DomFixtureLoader';
import './globalErrorHandler';
import { rendererConnect } from './rendererConnect';
import { rendererId } from './rendererId';

export { rendererId, rendererConnect };

type Args = {
  rendererConfig: DomRendererConfig;
  fixtures: ReactFixtureExportsByPath;
  decorators: ReactDecoratorsByPath;
  onErrorReset?: () => unknown;
};
export function mountDomRenderer({
  rendererConfig,
  fixtures,
  decorators,
  onErrorReset,
}: Args) {
  const domContainer = getDomContainer(rendererConfig.containerQuerySelector);
  render(
    <DomFixtureLoader
      fixtures={fixtures}
      decorators={decorators}
      onErrorReset={onErrorReset}
    />,
    domContainer
  );
}
