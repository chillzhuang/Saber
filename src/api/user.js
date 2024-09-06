import request from '@/axios';
import website from "@/config/website";

export const loginByUsername = (tenantId, account, password, type, key, code) => request({
  url: '/blade-auth/token',
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
  url: '/blade-auth/token',
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
  url: '/blade-system/menu/buttons',
  method: 'get'
});

export const getUserInfo = () => request({
  url: '/user/getUserInfo',
  method: 'get'
});

export const refreshToken = (refreshToken) => request({
  url: '/blade-auth/token',
  method: 'post',
  params: {
    refreshToken,
    grantType: "refresh_token",
    scope: "all",
  }
})

export const registerGuest = (form, oauthId) => request({
  url: '/blade-system/user/register-guest',
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
  url: '/blade-system/menu/routes',
  method: 'get'
});

export const getCaptcha = () => request({
  url: '/blade-auth/captcha',
  method: 'get'
});

export const getTopMenu = () => request({
  url: '/user/getTopMenu',
  method: 'get'
});

export const sendLogs = (list) => request({
  url: '/user/send-logs',
  method: 'post',
  data: list
})

export const logout = () => request({
  url: '/blade-auth/logout',
  method: 'post'
})
