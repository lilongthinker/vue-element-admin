import fetch from 'utils/fetch';

export function getList() {
  return fetch({
    url: '/contract/',
    method: 'get'
  });
}

export function getArticle() {
  return fetch({
    url: '/article/detail',
    method: 'get'
  });
}

