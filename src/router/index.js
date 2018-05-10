import Vue from 'vue'
import store from '../store/store'
import * as types from '../store/types'
import Router from 'vue-router'
import newsList from '@/components/newslist'
import xpanle from '@/components/panle'
import news from '@/page/news/news'
import showindex from '@/page/news/showindex'
const newslist1 = r => require.ensure([], () => r(require('../page/news/children/newslist1')), 'newslist1')
const newsdetails = r => require.ensure([], () => r(require('../page/newsdetails/newsdetails')), 'newsdetails')
// import newslist1 from '@/page/news/children/newslist1'
import newslist2 from '@/page/news/children/newslist2'
import newslist3 from '@/page/news/children/newslist3'
import newslist4 from '@/page/news/children/newslist4'
// import newsdetails from '@/page/newsdetails/newsdetails'
import recordshow from '@/page/record/recordshow'
import userdetails from '@/page/record/userdetails'
import recordlist from '@/page/record/recordlist'
import gameshow from '@/page/game/gameshow'
import matchdetails from '@/page/game/matchdetails'
import videopaly from '@/page/common/videopaly'
import hero from '@/page/hero/hero'
import herodetails from '@/page/hero/herodetails'
import goods from '@/page/goods/goods'
import goodsdetails from '@/page/goods/goodsdetails'
import skill from '@/page/skill/skill'
import skilldetails from '@/page/skill/skilldetails'
import data from '@/page/data/data'
import tongji from '@/page/tongji/tongji'
import login from '@/page/login/login'

Vue.use(Router)

const routes = [
  {
    path: '/',
    redirect: '/showindex'
  },
  {
    path: '/showindex',
    name: 'showindex',
    component: showindex,
    children: [{
      path: '',
      redirect: '/news'
    }, {
      path: '/gameshow',
      name: 'gameshow',
      component: gameshow,
      meta: {
        keepAlive: true
      }
    }, {
      path: '/login',
      name: 'login',
      component: login,
      meta: {
        keepAlive: true
      }
    }, {
      path: '/news',
      name: 'news',
      component: news,
      meta: {
        keepAlive: true
      },
      children: [{
        path: '',
        redirect: '/newslist1',
        meta: {
          keepAlive: true
        }
      }, {
        path: '/newslist1',
        name: 'newslist1',
        component: newslist1,
        meta: {
          keepAlive: true
        }
      }, {
        path: '/newslist2',
        name: 'newslist2',
        component: newslist2,
        meta: {
          keepAlive: true
        }
      }, {
        path: '/newslist3',
        name: 'newslist3',
        component: newslist3,
        meta: {
          keepAlive: true
        }
      }, {
        path: '/newslist4',
        name: 'newslist4',
        component: newslist4,
        meta: {
          keepAlive: true
        }
      }]
    }, {
      path: '/recordshow',
      name: 'recordshow',
      component: recordshow,
      meta: {
        keepAlive: true
      }
    }, {
      path: '/data',
      name: 'data',
      component: data,
      meta: {
        keepAlive: true
      }
    }, {
      path: '/tongji',
      name: 'tongji',
      component: tongji,
      meta: {
        keepAlive: true,
        requireAuth: true
      }
    }]
  },
  {
    path: '/dtype/hero',
    name: 'hero',
    component: hero
  },
  {
    path: '/herodetails/:heroid',
    name: 'herodetails',
    component: herodetails
  },
  {
    path: '/dtype/goods',
    name: 'goods',
    component: goods
  },
  {
    path: '/goodsdetails/:goodsid',
    name: 'goodsdetails',
    component: goodsdetails
  },
  {
    path: '/dtype/skill',
    name: 'skill',
    component: skill
  },
  {
    path: '/skilldetails/:skillid',
    name: 'skilldetails',
    component: skilldetails
  },
  {
    path: '/videopaly',
    name: 'videopaly',
    component: videopaly
  },
  {
    path: '/matchdetails/:game_id',
    name: 'matchdetails',
    component: matchdetails
  },
  {
    path: '/recordlist/:areaid/:userid',
    name: 'recordlist',
    component: recordlist
  },
  {
    path: '/userdetails/:areaid/:userid',
    name: 'userdetails',
    component: userdetails
  },
  {
    path: '/newslist',
    name: 'newsList',
    component: newsList
  },
  {
    path: '/newsdetails/:newid',
    name: 'newsdetails',
    component: newsdetails
  },
  {
    path: '/xpanle',
    name: 'xpanle',
    component: xpanle
  }
];

// 页面刷新时，重新赋值token
if (window.localStorage.getItem('token')) {
    store.commit(types.LOGIN, window.localStorage.getItem('token'))
}

const router = new Router({
    routes
});

router.beforeEach((to, from, next) => {
    if (to.matched.some(r => r.meta.requireAuth)) {
        if (store.state.token) {
            next();
        }
        else {
            next({
                path: '/login',
                query: {redirect: to.fullPath}
            })
        }
    }
    else {
        next();
    }
})

export default router;
