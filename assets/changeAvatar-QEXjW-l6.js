import { aj as v, E as x, k as E } from './request-DAPTtqD7.js'
import { E as I } from './el-progress-DFZnJTI7.js'
import { f as C } from './frame-DtWR7ZEY.js'
import { l as L } from './loadingbtn-hNlXO0aY.js'
import { a as S } from './user-D-GNhy1w.js'
import { a as j } from './regx-DPc9GAx6.js'
import { u as z } from './userInfo-D2jyezUc.js'
import {
  _ as N,
  f as l,
  v as R,
  r as g,
  o as u,
  l as f,
  w as e,
  b as o,
  c as V,
  n as F,
  h as M,
  p as P,
  d as D,
  a as h
} from './index-Di44Ub9i.js'
import './isEqual-DcFlOqaD.js'
import './_Uint8Array-c1AvBbBS.js'
import './el-main-C1UQ3kgK.js'
const y = (n) => (P('data-v-3a8d994f'), (n = n()), D(), n),
  O = ['src'],
  $ = y(() => h('br', null, null, -1)),
  q = y(() => h('span', null, '选择图片', -1)),
  G = Object.assign(
    { name: 'changeAvatarIndex' },
    {
      __name: 'changeAvatar',
      setup(n) {
        const i = z(),
          c = l(i.result.user_pic),
          m = l('')
        R(
          i,
          (a) => {
            c.value = a.result.user_pic
          },
          { deep: !0 }
        )
        const p = l(!0),
          r = l(!1),
          _ = l(null)
        async function A() {
          try {
            r.value = !0
            const a = await S(m.value)
            j(a.message, 'success'), (r.value = !1), (p.value = !0), i.changAction()
          } catch {
            r.value = !1
          }
        }
        const k = ['image', 'jpeg', 'png'],
          U = (a) => {
            const { raw: t } = a
            if (k.includes(t.type))
              return v({ message: 'Avatar picture must be JPG format!', type: 'error' }), !1
            if (t.size / 1024 / 1024 > 2)
              return v({ message: 'Avatar picture size can not exceed 2MB!', type: 'error' }), !1
            c.value = URL.createObjectURL(t)
            const s = new FileReader()
            ;(s.onloadend = function () {
              m.value = s.result
            }),
              s.readAsDataURL(t),
              (p.value = !1)
          }
        return (a, t) => {
          const s = g('Plus'),
            d = x,
            b = I,
            w = E,
            B = g('Upload')
          return (
            u(),
            f(
              C,
              { title: '更换头像' },
              {
                main: e(() => [
                  o(
                    b,
                    {
                      ref_key: 'Uplaod',
                      ref: _,
                      class: 'avatar-uploader',
                      action: '#',
                      'show-file-list': !1,
                      'on-change': U,
                      'auto-upload': !1
                    },
                    {
                      default: e(() => [
                        c.value
                          ? (u(), V('img', { key: 0, src: c.value, class: 'avatar' }, null, 8, O))
                          : (u(),
                            f(
                              d,
                              { key: 1, class: 'avatar-uploader-icon' },
                              { default: e(() => [o(s)]), _: 1 }
                            ))
                      ]),
                      _: 1
                    },
                    512
                  ),
                  $,
                  o(
                    w,
                    {
                      type: 'primary',
                      size: 'large',
                      onClick: t[0] || (t[0] = (H) => _.value.$el.querySelector('input').click())
                    },
                    {
                      default: e(() => [
                        o(d, null, { default: e(() => [o(s, { color: '#fff' })]), _: 1 }),
                        q
                      ]),
                      _: 1
                    }
                  ),
                  o(
                    L,
                    {
                      type: 'success',
                      size: 'large',
                      isLoading: r.value,
                      onClick: A,
                      disabled: p.value
                    },
                    {
                      'loading-icon': e(() => [
                        r.value
                          ? F('', !0)
                          : (u(),
                            f(d, { key: 0 }, { default: e(() => [o(B, { color: '#fff' })]), _: 1 }))
                      ]),
                      default: e(() => [M(' 上传图片 ')]),
                      _: 1
                    },
                    8,
                    ['isLoading', 'disabled']
                  )
                ]),
                _: 1
              }
            )
          )
        }
      }
    }
  ),
  oe = N(G, [['__scopeId', 'data-v-3a8d994f']])
export { oe as default }
