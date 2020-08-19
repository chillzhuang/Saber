import request from '@/router/axios';
import {baseUrl} from '@/config/env';
import website from "@/config/website";

export const loginByUsername = (tenantId, account, password, type, key, code) => request({
  url: '/api/blade-auth/token',
  method: 'post',
  headers: {
    'Captcha-Key': key,
    'Captcha-Code': code,
  },
  params: {
    grantType: (website.captchaMode ? "captcha" : "password"),
    tenantId,
    account,
    password,
    type
  }
});

export const loginBySocial = (tenantId, source, code, state) => request({
  url: '/api/blade-auth/token',
  method: 'post',
  headers: {
    'Tenant-Id': tenantId
  },
  params: {
    tenantId,
    source,
    code,
    state,
    grantType: "social",
    scope: "all",
  }
});

export const getButtons = () => request({
  url: '/api/blade-system/menu/buttons',
  method: 'get'
});

export const getUserInfo = () => request({
  url: baseUrl + '/user/getUserInfo',
  method: 'get'
});

export const refreshToken = () => request({
  url: baseUrl + '/user/refesh',
  method: 'post'
})

export const registerGuest = (form, oauthId) => request({
  url: '/api/blade-user/register-guest',
  method: 'post',
  params: {
    tenantId: form.tenantId,
    name: form.name,
    account: form.account,
    password: form.password,
    oauthId
  }
});

export const getMenu = () => request({
  url: '/api/blade-system/menu/routes',
  method: 'get'
});

export const getCaptcha = () => request({
  url: '/api/blade-auth/captcha',
  method: 'get'
});

export const getTopMenu = () => request({
  url: baseUrl + '/user/getTopMenu',
  method: 'get'
});

export const sendLogs = (list) => request({
  url: baseUrl + '/user/logout',
  method: 'post',
  data: list
})

export const logout = () => request({
  url: baseUrl + '/user/logout',
  method: 'get'
})
