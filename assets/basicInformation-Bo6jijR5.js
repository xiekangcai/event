import './request-DAPTtqD7.js'
import { E as b, a as k } from './el-form-item-DYlfqxFr.js'
import { E as I } from './el-input-7Wwwmoe3.js'
import { f as y } from './frame-DtWR7ZEY.js'
import { a as F, i as d, e as U, u as c } from './regx-DPc9GAx6.js'
import { u as z } from './user-D-GNhy1w.js'
import { l as R } from './loadingbtn-hNlXO0aY.js'
import { u as P } from './userInfo-D2jyezUc.js'
import { f, v as h, o as A, l as B, w as t, b as l, h as N } from './index-Di44Ub9i.js'
import './castArray-b_mohRYT.js'
import './index-Ctvra8ZN.js'
import './_Uint8Array-c1AvBbBS.js'
import './el-main-C1UQ3kgK.js'
const Y = Object.assign(
  { name: 'basicinformationIndex' },
  {
    __name: 'basicInformation',
    setup(q) {
      const m = P(),
        {
          result: { id: v, username: g, nickname: _, email: w }
        } = m,
        i = f(!1),
        r = f({ id: v, username: g, nickname: _, email: w })
      h(
        m,
        (o) => {
          const {
            result: { id: e, username: a, nickname: s, email: u }
          } = o
          ;(r.value.id = e), (r.value.username = a), (r.value.nickname = s), (r.value.email = u)
        },
        { deep: !0 }
      )
      const p = f(),
        E = {
          username: [
            {
              validator: (o, e, a) => {
                if (e === '') a(new Error('请输入用户名'))
                else if (d(e, c)) a()
                else return a(new Error('用户最少四位'))
              },
              trigger: 'blur'
            }
          ],
          nickname: [
            {
              validator: (o, e, a) => {
                e === ''
                  ? a(new Error('请输入昵称'))
                  : d(e, c)
                    ? a()
                    : a(new Error('用户名最少四位'))
              },
              trigger: 'blur'
            }
          ],
          email: [
            {
              validator: (o, e, a) => {
                if (e)
                  if (d(e, U)) a()
                  else return a(new Error('邮箱格式不对'))
                else return a(new Error('请输入邮箱地址'))
              },
              trigger: 'blur'
            }
          ]
        },
        x = (o) => {
          o &&
            o.validate((e) => {
              e ? (V(), console.log('submit!')) : console.log('error submit!')
            })
        }
      async function V() {
        try {
          i.value = !0
          const o = await z(r.value)
          F(o.message, 'success'), m.changAction(), (i.value = !1)
        } catch {
          i.value = !1
        }
      }
      return (o, e) => {
        const a = I,
          s = b,
          u = k
        return (
          A(),
          B(
            y,
            { title: '基本资料' },
            {
              main: t(() => [
                l(
                  u,
                  {
                    ref_key: 'ruleFormRef',
                    ref: p,
                    style: { 'max-width': '571px' },
                    model: r.value,
                    rules: E,
                    'label-width': '100px',
                    'label-position': 'right',
                    size: 'large'
                  },
                  {
                    default: t(() => [
                      l(
                        s,
                        { label: '登录名称', prop: 'username' },
                        {
                          default: t(() => [
                            l(
                              a,
                              {
                                modelValue: r.value.username,
                                'onUpdate:modelValue':
                                  e[0] || (e[0] = (n) => (r.value.username = n)),
                                disabled: '',
                                size: 'large',
                                autocomplete: 'off'
                              },
                              null,
                              8,
                              ['modelValue']
                            )
                          ]),
                          _: 1
                        }
                      ),
                      l(
                        s,
                        { label: '用户昵称', prop: 'nickname', required: '' },
                        {
                          default: t(() => [
                            l(
                              a,
                              {
                                modelValue: r.value.nickname,
                                'onUpdate:modelValue':
                                  e[1] || (e[1] = (n) => (r.value.nickname = n)),
                                size: 'large',
                                autocomplete: 'off'
                              },
                              null,
                              8,
                              ['modelValue']
                            )
                          ]),
                          _: 1
                        }
                      ),
                      l(
                        s,
                        { label: '用户邮箱', prop: 'email', required: '' },
                        {
                          default: t(() => [
                            l(
                              a,
                              {
                                size: 'large',
                                type: 'email',
                                modelValue: r.value.email,
                                'onUpdate:modelValue': e[2] || (e[2] = (n) => (r.value.email = n))
                              },
                              null,
                              8,
                              ['modelValue']
                            )
                          ]),
                          _: 1
                        }
                      ),
                      l(s, null, {
                        default: t(() => [
                          l(
                            R,
                            {
                              isLoading: i.value,
                              onClick: e[3] || (e[3] = (n) => x(p.value)),
                              size: 'large'
                            },
                            { default: t(() => [N('提交修改')]), _: 1 },
                            8,
                            ['isLoading']
                          )
                        ]),
                        _: 1
                      })
                    ]),
                    _: 1
                  },
                  8,
                  ['model']
                )
              ]),
              _: 1
            }
          )
        )
      }
    }
  }
)
export { Y as default }
