个人领券网页，支持淘宝、京东、唯品会、拼多多、美团。页面很简洁，仅供个人使用，代码仅供参考。

另外：<br>
如果你会 Java，[这里还有一个 Java 版本](https://github.com/leeyoshinari/coupon)，欢迎使用。<br>
如果你喜欢微信小程序，并愿意花钱购买微信的服务，这里还有一个 微信小程序 版本，欢迎使用。

## 本地部署
进入项目所在文件夹，执行
```bash
npm run build
npm run dev
```

在浏览器中打开 [http://localhost:3000](http://localhost:3000) 即可看到网页.


## 在 Vercel 上部署
有很多静态/动态代码托管网站，这里推荐使用 Vercel，它在国内访问速度还可以，唯一就是自动生成的域名国内无法访问，因此需要绑定一个域名。
[点我立即开始部署](https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2Fleeyoshinari%2Fshopping&project-name=shopping&repository-name=shopping)

也可在其他代码托管网站部署，可自行探索。

## 设置自己的账号
在 `main.js` 文件的前十几行修改成自己的账号
### 淘宝
所有值全部使用的是淘宝联盟官方的值

### 京东
由于京东联盟的限制，全部使用[第三方平台提供的api](http://www.haojingke.com/open/index.html)，在 `个人中心->开发管理->三方授权` 中授权京东联盟

### 拼多多
所有值全部使用的是多多进宝官方的值

### 唯品会
由于唯品会联盟的限制，全部使用[第三方平台提供的api](http://www.haojingke.com/open/index.html)，在 `个人中心->开发管理->三方授权` 中授权唯品会

### 美团
在美团外卖联盟微信公众号上获取推广链接，直接配置即可

### 所有平台的活动
所有平台的活动的推广链接需要手动获取，然后在 `activity.ts` 文件中按照规范配置即可，并配置好每个链接的过期时间（单位：毫秒）


## 最后
本项目已支持 PWA，可安装在手机上像APP一样使用，但是安装后，无法唤起其他 APP（官方不支持），所以项目里已经禁用安装提醒了。

已在 Android 手机上完成调试，简单测试使用 华为、小米、oppo、vivo 的默认浏览器打开网站，可以唤起对应的 APP；苹果手机未充分测试，只可以唤起部分 APP。 如果不能唤起 APP，可尝试安装第三方浏览器，支持力度最好的浏览器是 Chrome 浏览器。
