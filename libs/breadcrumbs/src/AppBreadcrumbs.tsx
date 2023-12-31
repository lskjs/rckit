import React from 'react';
import { Breadcrumb, Col, Row } from 'react-bootstrap';

import { useAppMenuConfig } from './AppMenuConfig/AppMenuConfig.js';
import { BreadcrumbItem } from './BreadcrumbItem.js';
import { MenuItem } from './types.js';
import { findBreadcrumbs } from './utils.js';

// import { findAppBreadcrumbs } from '@/layouts/components/findAppBreadcrumbs';

export type AppBreadcrumbsProps = React.PropsWithChildren<{
  title?: string;
  activeHref?: string;
  actions?: React.ReactNode;
  items?: MenuItem[];
  showTitle?: boolean;
}>;

export const AppBreadcrumbs = ({
  title: initTitle,
  activeHref = '',
  actions,
  items,
  showTitle: initShowTitle,
}: AppBreadcrumbsProps) => {
  const config = useAppMenuConfig() as any;
  const menus: MenuItem[] = config?.items || [];

  const breadcrumbs = items || findBreadcrumbs(menus, activeHref) || [];
  const title = initTitle || breadcrumbs[breadcrumbs.length - 1]?.title;
  if (!breadcrumbs && !title && !actions) return null;
  const showBreadcrumbs = breadcrumbs?.length > 1;
  const showTitle =
    initShowTitle === undefined ? breadcrumbs?.length === 1 || title || actions : initShowTitle;
  return (
    <Row>
      <Col sm={8}>
        {showBreadcrumbs && (
          <>
            <style
              // TODO: перенести в css
              dangerouslySetInnerHTML={{
                __html: `
                .breadcrumb-item2+.breadcrumb-item2 {
                   padding-left: var(--bs-breadcrumb-item-padding-x);
                }
                .breadcrumb-item-divider{
                  padding-right: var(--bs-breadcrumb-item-padding-x);
                  color: var(--bs-breadcrumb-divider-color);
                }
                @media (max-width: 576px) {
                  .hide-mobile {
                    display: none !important;
                  }
                }
                @media (min-width: 575px) {
                  .hide-desktop {
                    display: none !important;
                  }
                }
                `,
              }}
            />
            <Breadcrumb style={{ marginBottom: -16 }}>
              {breadcrumbs.map((item, index) => {
                const href = breadcrumbs.length - 1 !== index ? item.href : undefined;
                return (
                  <BreadcrumbItem key={index} href={href} showDivider={!!index}>
                    {item.title}
                  </BreadcrumbItem>
                );
              })}
            </Breadcrumb>
          </>
        )}
        {showTitle && <h1 style={{ margin: 0 }}>{title}</h1>}
      </Col>
      <Col sm={4} className="text-end align-self-center">
        {actions}
      </Col>
    </Row>
  );
};
