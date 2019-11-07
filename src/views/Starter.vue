<template>
    <section class="section section-components pb-0" id="section-components">
        <div class="container">
            <div class="row justify-content-center">
                <div class="col-lg-12">
                    <!-- Basic elements -->
                    <b-jumbotron header="Coverage Search" lead="functional multiple search">
                      <div class="row" style="align-items: center;">
                        <div class="col-lg-4 col-sm-6">
                          <b-form-input v-model="inputText" placeholder="Enter your String" class="search-input"></b-form-input>
                        </div>
                        <div class="col-lg-6 col-sm-6">
                          <div class="row" style="align-items: center;">
                            <b-dropdown id="dropdown-coverage" :text="btnText" class="dropdown" v-model="btnText">
                              <b-dropdown-item v-for="option in cSites"
                                                :key="option.name"
                                                :value="option.name"
                                                @click="changeBtn(option)">
                                {{option.name}}
                              </b-dropdown-item>
                              <b-dropdown-item  key="wechat"
                                                value="微信"
                                                @click="changeBtn({'name': '微信'})">
                                微信
                              </b-dropdown-item>
                              <b-dropdown-item  key="weibo"
                                                value="微博"
                                                @click="changeBtn({'name': '微博'})">
                                微博
                              </b-dropdown-item>
                            </b-dropdown>
                            <base-button class="btn-1" type="primary">Google</base-button>
                            <base-button class="btn-1" outline type="primary">I WANT ALL</base-button>
                          </div>
                        </div>
                      </div>
                    </b-jumbotron>

                    <!-- Buttons -->
                    <h3 class="h4 text-success font-weight-bold mb-4">Buttons</h3>
                    <!-- Button styles -->
                    <div>
                        <base-button type="primary">Button</base-button>
                        <base-button class="btn-3" type="primary" icon="ni ni-bag-17">Button</base-button>
                        <base-button class="btn-2" type="primary" icon="ni ni-bag-17"></base-button>

                        <!-- Button wizes -->
                        <div class="mb-3 mt-5">
                            <small class="text-uppercase font-weight-bold">Pick your size</small>
                        </div>

                        <base-button type="primary" size="sm">Small</base-button>
                        <base-button type="primary">Regular</base-button>
                        <base-button type="primary" size="lg">Large Button</base-button>

                    </div>
                    <!-- Button colors -->
                    <div class="mb-3 mt-5">
                        <small class="text-uppercase font-weight-bold">Pick your color</small>
                    </div>
                    <base-button class="btn-1" type="primary">Primary</base-button>
                    <base-button class="btn-1" type="info">Info</base-button>
                    <base-button class="btn-1" type="success">Success</base-button>
                    <base-button class="btn-1" type="warning">Warning</base-button>
                    <base-button class="btn-1" type="danger">Danger</base-button>
                    <base-button class="btn-1" type="neutral">Neutral</base-button>

                    <div class="mb-3 mt-5">
                        <small class="text-uppercase font-weight-bold">Outline</small>
                    </div>

                    <base-button class="btn-1" outline type="primary">Outline Primary</base-button>
                    <base-button class="btn-1" outline type="info">Outline Info</base-button>
                    <base-button class="btn-1" outline type="success">Outline Success</base-button>
                    <base-button class="btn-1" outline type="warning">Outline Warning</base-button>
                    <base-button class="btn-1" outline type="danger">Outline Danger</base-button>
                    <base-button class="btn-1" outline type="neutral">Outline Neutral</base-button>
                    <!-- Button links -->
                    <div class="mb-3 mt-5">
                        <small class="text-uppercase font-weight-bold">Links</small>
                    </div>
                    <a href="#" class="btn btn-link text-default">Default</a>
                    <a href="#" class="btn btn-link text-primary">Primary</a>
                    <a href="#" class="btn btn-link text-info">Info</a>
                    <a href="#" class="btn btn-link text-success">Success</a>
                    <a href="#" class="btn btn-link text-warning">Warning</a>
                    <a href="#" class="btn btn-link text-danger">Danger</a>
                </div>
            </div>
        </div>
        <div class="container mb-5">
            <!-- Inputs -->
            <h3 class="h4 text-success font-weight-bold mb-4">Inputs</h3>
            <div class="mb-3">
                <small class="text-uppercase font-weight-bold">Form controls</small>
            </div>
            <div class="row">
                <div class="col-lg-4 col-sm-6">
                    <base-input placeholder="Regular">

                    </base-input>
                    <base-input placeholder="Search"
                                addon-left-icon="ni ni-zoom-split-in">
                    </base-input>
                </div>
                <div class="col-lg-4 col-sm-6">
                    <base-input placeholder="Regular" disabled>
                    </base-input>
                    <base-input placeholder="Birthday"
                                addon-right-icon="ni ni-zoom-split-in">
                    </base-input>
                </div>
                <div class="col-lg-4 col-sm-6">
                    <base-input placeholder="Success" :valid="true">
                    </base-input>

                    <base-input placeholder="Success" :valid="false">
                    </base-input>
                </div>
            </div>
        </div>
    </section>

</template>
<script>
export default {
  name: 'starter',
  data() {
    return {
      btnText: 'Select Site',
      baseUrl: '',
      inputText: '',
      google_url: 'https://www.google.com/search',
      weibo_url: 'http://s.weibo.com/weibo/',
      weixin_url: 'https://weixin.sogou.com/weixin?type=2&query=',
      cSites: [{name:'中国科学报',domain:'sciencenet.cn'},{name:'人民日报',domain:'people.com.cn'},{name:'科技日报',domain:'stdaily.com'},{name:'光明日报',domain:'gmw.cn'},{name:'参考消息',domain:'cankaoxiaoxi.com'},{name:'环球时报',domain:'huanqiu.com'},{name:'凤凰',domain:'ifeng.com'},{name:'新浪',domain:'sina.com.cn'},{name:'腾讯',domain:'qq.com'},{name:'网易',domain:'163.com'},{name:'果壳',domain:'guokr.com'},{name:'搜狐',domain:'sohu.com'},{name:'澎湃',domain:'thepaper.cn'},{name:'科学网',domain:'blog.sciencenet.cn'},{name:'新华网',domain:'xinhuanet.com'},{name:'财经网',domain:'caijing.com.cn'},{name:'财新网',domain:'caixin.com'},{name:'中国新闻社',domain:'chinanews.com'},{name:'中央电视台电视',domain:'cntv.cn'},{name:'中央电视台网站',domain:'cctv.com'}]
    }
  },
  mounted() {
  },
  methods: {
    changeBtn (item) {
      this.btnText = item.name
      let searchUrl = this.google_url+'?'+'lr=lang_zh-CN&'+'filter=0&'+'as_sitesearch='+item.domain+'&'+'as_q='+this.inputText
      if ( this.btnText == '微博' ) {
        searchUrl = this.weibo_url + this.inputText
      } else if ( this.btnText == '微信' ) {
        searchUrl = this.weixin_url + this.inputText
      }

      if ( this.inputText ) {
        window.open(searchUrl, '_blank');
      }

    }
  },
};
</script>
<style>
#dropdown-coverage .btn-secondary{
  min-width: 100px;
  background: #172b4d;
  color: #fff
}
#dropdown-coverage .btn-secondary:hover{
  -webkit-box-shadow: 0 7px 14px rgba(50, 50, 93, 0.1), 0 3px 6px rgba(0, 0, 0, 0.08);
  box-shadow: 0 7px 14px rgba(50, 50, 93, 0.1), 0 3px 6px rgba(0, 0, 0, 0.08);
  -webkit-transform: translateY(-1px);
  transform: translateY(-1px);
}
.form-control:focus {
  color: #000 !important
}
.btn-1 {
  min-width: 100px;
  margin-left: 8px;
}
</style>
