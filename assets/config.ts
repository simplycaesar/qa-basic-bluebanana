// assets/menuOptions.ts

import { extractFromI18n } from '../utils/functions';
import type { MenuOption, LoginOption } from '../types/types';

export const menuConfig: Record<string, MenuOption> = {
    'Rebajas - Hombre - Hasta 50%': {
        steps: [
            {
                type: 'hover',
                locator: {
                    type: 'id',
                    id: 'HeaderMenu-rebajas',
                },
            },
            {
                type: 'click',
                locator: {
                    type: 'id',
                    id: 'HeaderMenu-rebajas-hombre',
                },
            },
            {
                type: 'hover',
                locator: {
                    type: 'id',
                    id: 'MegaMenu-Content-1',
                },
            },
            {
                type: 'click',
                locator: {
                    type: 'id',
                    id: 'HeaderMenu-rebajas-hombre-hasta-50',
                },
            },
        ],
        expectedUrl: extractFromI18n('menu.urlEsperadaRebajasHombreHasta50'),
        title: extractFromI18n('menu.tituloRebajasHombreHasta50'),
    },
    'Rebajas - Hombre - Hasta 40%': {
        steps: [
            {
                type: 'hover',
                locator: {
                    type: 'id',
                    id: 'HeaderMenu-rebajas',
                },
            },
            {
                type: 'click',
                locator: {
                    type: 'id',
                    id: 'HeaderMenu-rebajas-hombre',
                },
            },
            {
                type: 'hover',
                locator: {
                    type: 'id',
                    id: 'MegaMenu-Content-1',
                },
            },
            {
                type: 'click',
                locator: {
                    type: 'id',
                    id: 'HeaderMenu-rebajas-hombre-hasta-40',
                },
            },
        ],
        expectedUrl: extractFromI18n('menu.urlEsperadaRebajasHombreHasta40'),
        title: extractFromI18n('menu.tituloRebajasHombreHasta40'),
    },
    'Mujer - Rebajas - Hasta 50%': {
        steps: [
            {
                type: 'hover',
                locator: {
                    type: 'id',
                    id: 'HeaderMenu-mujer',
                },
            },
            {
                type: 'click',
                locator: {
                    type: 'id',
                    id: 'HeaderMenu-mujer-rebajas',
                },
            },
            {
                type: 'hover',
                locator: {
                    type: 'id',
                    id: 'MegaMenu-Content-3',
                },
            },
            {
                type: 'click',
                locator: {
                    type: 'id',
                    id: 'HeaderMenu-mujer-rebajas-hasta-50',
                },
            },
        ],
        expectedUrl: extractFromI18n('menu.urlEsperadaMujerRebajasHasta50'),
        title: extractFromI18n('menu.tituloMujerRebajasHasta50'),
    },
    'Mujer - Rebajas - Hasta 40%': {
        steps: [
            {
                type: 'hover',
                locator: {
                    type: 'id',
                    id: 'HeaderMenu-mujer',
                },
            },
            {
                type: 'click',
                locator: {
                    type: 'id',
                    id: 'HeaderMenu-mujer-rebajas',
                },
            },
            {
                type: 'hover',
                locator: {
                    type: 'id',
                    id: 'MegaMenu-Content-3',
                },
            },
            {
                type: 'click',
                locator: {
                    type: 'id',
                    id: 'HeaderMenu-mujer-rebajas-hasta-40',
                },
            },
        ],
        expectedUrl: extractFromI18n('menu.urlEsperadaMujerRebajasHasta40'),
        title: extractFromI18n('menu.tituloMujerRebajasHasta40'),
    }
};

export const loginConfig: Record<string, LoginOption> = {
    default: {
        loginUrl: extractFromI18n('login.loginUrl'),
        loginTitle: extractFromI18n('login.loginTitle'),
        loggedUrl: extractFromI18n('login.loggedUrl'),
        loggedTitle: extractFromI18n('login.loggedTitle'),
        emailLabel: extractFromI18n('login.emailLabel'),
        passwordLabel: extractFromI18n('login.passwordLabel'),
        loginButton: extractFromI18n('login.loginButton'),
    },
};