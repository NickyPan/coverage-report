<template>
  <section class="section section-components pb-0" id="section-components">
    <div class="container">
      <div class="row justify-content-center">
        <div class="col-lg-12">
          <!-- Basic elements -->
          <b-jumbotron header="Coverage Search" lead="functional multiple search">
            <div class="row" style="align-items: center;">
              <div class="col-lg-4 col-sm-6">
                <b-form-input
                  v-model="inputText"
                  placeholder="Enter your String"
                  class="search-input"
                  :state="isValid"
                ></b-form-input>
              </div>
              <div class="col-lg-6 col-sm-6">
                <div class="row" style="align-items: center;">
                  <b-dropdown
                    id="dropdown-coverage"
                    :text="btnText"
                    class="dropdown"
                    v-model="btnText"
                  >
                    <b-dropdown-item
                      v-for="option in cSites"
                      :key="option.name"
                      :value="option.name"
                      @click="changeBtn(option)"
                    >{{option.name}}</b-dropdown-item>
                    <b-dropdown-item key="wechat" value="微信" @click="changeBtn({'name': '微信'})">微信</b-dropdown-item>
                    <b-dropdown-item key="weibo" value="微博" @click="changeBtn({'name': '微博'})">微博</b-dropdown-item>
                  </b-dropdown>
                  <base-button class="btn-1" type="primary" @click="googleSearch">Google</base-button>
                  <base-button class="btn-1" outline type="primary" @click="batchSearch">I WANT ALL</base-button>
                </div>
              </div>
            </div>
          </b-jumbotron>

          <!-- Buttons -->
          <h3 class="font-weight-bold mb-4">Sites List</h3>
          <div class="row">
            <div class="col-md-2" v-for="site in cSites" :key="site.name" >
              <button type="button" class="btn btn-outline-default btn-lg no-border" @click="linkTo(site.domain)">
                {{site.name}}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
export default {
  name: "starter",
  data() {
    return {
      btnText: "Select Site",
      baseUrl: "",
      inputText: "",
      isValid: null,
      google_url: "https://www.google.com/search",
      weibo_url: "http://s.weibo.com/weibo/",
      weixin_url: "https://weixin.sogou.com/weixin?type=2&query=",
      cSites: [
        { name: "中国科学报", domain: "sciencenet.cn" },
        { name: "人民日报", domain: "people.com.cn" },
        { name: "科技日报", domain: "stdaily.com" },
        { name: "光明日报", domain: "gmw.cn" },
        { name: "参考消息", domain: "cankaoxiaoxi.com" },
        { name: "环球时报", domain: "huanqiu.com" },
        { name: "凤凰", domain: "ifeng.com" },
        { name: "新浪", domain: "sina.com.cn" },
        { name: "腾讯", domain: "qq.com" },
        { name: "网易", domain: "163.com" },
        { name: "果壳", domain: "guokr.com" },
        { name: "搜狐", domain: "sohu.com" },
        { name: "澎湃", domain: "thepaper.cn" },
        { name: "科学网", domain: "blog.sciencenet.cn" },
        { name: "新华网", domain: "xinhuanet.com" },
        { name: "财经网", domain: "caijing.com.cn" },
        { name: "财新网", domain: "caixin.com" },
        { name: "中国新闻社", domain: "chinanews.com" },
        { name: "央视网", domain: "cntv.cn" },
        { name: "中央电视台CCTV", domain: "cctv.com" }
      ]
    };
  },
  mounted() {},
  methods: {
    changeBtn(item) {
      if ( !this.inputText ) {
        this.isValid = false
        return
      }
      this.btnText = item.name;
      let searchUrl =
        this.google_url + "?lr=lang_zh-CN&filter=0&as_sitesearch=" + item.domain + "&as_q=" + this.inputText;
      if (this.btnText == "微博") {
        searchUrl = this.weibo_url + this.inputText;
      } else if (this.btnText == "微信") {
        searchUrl = this.weixin_url + this.inputText;
      }
      this.isValid = null
      window.open(searchUrl, "_blank");
    },
    googleSearch() {
      if ( !this.inputText ) {
        this.isValid = false
        return
      }
      let searchUrl = this.google_url + "?lr=lang_zh-CN&filter=0&as_q=" + this.inputText;
      this.isValid = null
      window.open(searchUrl, "_blank");
    },
    batchSearch(item) {
      if ( !this.inputText ) {
        this.isValid = false
        return
      }
      this.isValid = null
      for (let i = 0; i < this.cSites.length;i++){
        let searchUrl = this.google_url + "?lr=lang_zh-CN&filter=0&as_sitesearch=" + this.cSites[i].domain + "&as_q=" + this.inputText;
        window.open(searchUrl, "_blank");
      }
      window.open(this.weibo_url + this.inputText, "_blank");
      window.open(this.weixin_url + this.inputText, "_blank");
    },
    linkTo(toUrl) {
      window.open('http://' + toUrl, "_blank");
    }
  },
};
</script>
<style>
#dropdown-coverage .btn-secondary {
  min-width: 100px;
  background: #172b4d;
  color: #fff;
}
#dropdown-coverage .btn-secondary:hover {
  -webkit-box-shadow: 0 7px 14px rgba(50, 50, 93, 0.1),
    0 3px 6px rgba(0, 0, 0, 0.08);
  box-shadow: 0 7px 14px rgba(50, 50, 93, 0.1), 0 3px 6px rgba(0, 0, 0, 0.08);
  -webkit-transform: translateY(-1px);
  transform: translateY(-1px);
}
.form-control:focus {
  color: #000 !important;
}
.btn-1 {
  min-width: 100px;
  margin: 0 8px;
}
.no-border {
  /* border-width: 0px !important; */
  min-width: 105px;
}
</style>
