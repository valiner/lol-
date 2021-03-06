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
import register from '@/page/register/register'
import bbs from '@/page/bbs/bbs'
import posts from '@/page/bbs/posts'
import setting from '@/page/setting/setting'
import commentpage from '@/page/bbs/commentpage'
import groupchat from '@/page/chat/groupchat'
import checkuser from '@/page/chat/checkuser'
import addpost from '@/components/addpost'
import comment from '@/components/comment'

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
    meta: {
      keepAlive: true
    },
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

      }
    }, {
      path: '/register',
      name: 'register',
      component: register,
      meta: {

      }
    }, {
      path: '/bbs',
      name: 'bbs',
      component: bbs,
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
        keepAlive: true
      }
    }]
  },
  {
    path: '/dtype/hero',
    name: 'hero',
    component: hero,
    meta: {
      keepAlive: true
    }
  },
  {
    path: '/herodetails/:heroid',
    name: 'herodetails',
    component: herodetails,
    meta: {
      keepAlive: true
    }
  },
  {
    path: '/dtype/goods',
    name: 'goods',
    component: goods,
    meta: {
      keepAlive: true
    }
  },
  {
    path: '/goodsdetails/:goodsid',
    name: 'goodsdetails',
    component: goodsdetails,
    meta: {
      keepAlive: true
    }
  },
  {
    path: '/dtype/skill',
    name: 'skill',
    component: skill,
    meta: {
      keepAlive: true
    }
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
    component: matchdetails,
    meta: {
      keepAlive: true
    }
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
  }, {
    path: '/addpost',
    name: 'addpost',
    component: addpost,
    meta: {
      requireAuth: true
    }
  }, {
    path: '/setting',
    name: 'setting',
    component: setting,
    meta: {
    }
  }, {
    path: '/posts/:id',
    name: 'posts',
    component: posts,
    meta: {
    }
  }, {
    path: '/comments/:id/comments',
    name: 'commentpage',
    component: commentpage,
    meta: {
    }
  }, {
    path: '/comment',
    name: 'comment',
    component: comment,
    meta: {
    }
  }, {
    path: '/groupchat',
    name: 'groupchat',
    component: groupchat,
    meta: {
      requireAuth: true
    }
  }, {
    path: '/checkuser',
    name: 'checkuser',
    component: checkuser,
    meta: {
    }
  }
]

// 页面刷新时，重新赋值token
if (window.localStorage.getItem('token')) {
  store.commit(types.LOGIN, window.localStorage.getItem('token'))
  store.commit(types.STATUS, 'landing')
}

// 页面刷新时，重新赋值userpro
if (window.localStorage.getItem('nickname')) {
  let userpro = {
    nickname: window.localStorage.getItem('nickname'),
    head_img: window.localStorage.getItem('head_img')
  }
  store.commit('SET_USERPRO', userpro)
}

const router = new Router({
  routes
})

router.beforeEach((to, from, next) => {
  if (to.matched.some(r => r.meta.requireAuth)) {
    if (store.state.token) {
      next()
    } else {
      next({
        path: '/login',
        query: {redirect: to.fullPath}
      })
    }
  } else {
    next()
  }
})

export default router
