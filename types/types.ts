// types/types.ts
import type { Page } from '@playwright/test';
import type { i18n } from '../assets/i18n';

export type LanguageCode = keyof typeof i18n;
export type LocalizedString = Record<LanguageCode, string>;

export type RoleType = Parameters<Page['getByRole']>[0];

export type MenuActionStep = {
    type: 'hover' | 'click';
    locator: LocatorStrategy;
}

export type MenuOption = {
    steps: MenuActionStep[];
    expectedUrl: Record<LanguageCode, string>;
    title: Record<LanguageCode, string>;
};

export type LocatorStrategy =
    | { type: 'role'; role: RoleType; name: Record<LanguageCode, string> }
    | { type: 'id'; id: string }
    | { type: 'testid'; testId: string }
    | { type: 'text'; text: Record<LanguageCode, string> };
