<template>
  <article>
    <div class="mdl-grid">
      <div class="mdl-cell mdl-cell--12-col">
        <h1>Api Smaple</h1>
      </div>
      <div class="mdl-cell mdl-cell--12-col">
        <p>Qiitaの新着投稿20件を取得するサンプル</p>
      </div>
      <div class="mdl-cell mdl-cell--12-col mdl-grid">

        <div v-for="(item, index) in listItem" v-bind:key="index" class="qiita-card mdl-cell mdl-cell--6-col mdl-card mdl-shadow--2dp">
          <div class="mdl-card__title mdl-card--expand">
            <h4>{{item.title}}</h4>
            <div class="qiita-card__sub-info">
              <img v-bind:src="item.user.profile_image_url" alt="">
              <strong>{{item.user.id}}</strong>
            </div>
          </div>
          <div class="mdl-card__supporting-text mdl-card--expand">
            {{item.rendered_body}}
          </div>
          <div class="qiita-card__tags">
            <span v-for="(tag, index) in item.tags" v-bind:key="index" class="mdl-chip">
              <span class="mdl-chip__text">{{tag.name}}</span>
            </span>
          </div>
          <div class="mdl-card__actions mdl-card--border">
            <a v-bind:href="item.url" class="mdl-button mdl-button--colored mdl-js-button mdl-js-ripple-effect" target="_blank">
              View On Qiita
            </a>
          </div>
        </div>

      </div>
    </div>
  </article>
</template>
<script>
/* eslint-disable */
export default {
  data () {
    return {
      listItem: []
    };
  },
  mounted () {
    const _this = this;

    const REQUEST_URL = 'https://qiita.com/api/v2/items?per_page=20';

    // リクエスト投げる
    this.$axios.get(REQUEST_URL)　
    .then(
      (response) => {
        // 成功時
        let listItem = response.data
        for (let i = listItem.length - 1; i >= 0; --i) {
          listItem[i].rendered_body = listItem[i].rendered_body.replace(/<\/?[^>]+>/g, '').substring(0, 120) + '...'
        }

        // モデルに入れる
        _this.listItem = listItem
      },
      (errResponse) => {
        // 失敗時
        console.log(errResponse)
      }
    );
  }
};
</script>
<style>
body {
	font-family: 'helvetica', "游ゴシック", "Yu Gothic", "游ゴシック体", "YuGothic", YuGothic, "ヒラギノ角ゴ ProN W3", "Hiragino Kaku Gothic ProN", "メイリオ", Meiryo, sans-serif;
	backface-visibility: hidden;
  font-size: 16px;
	background-color: #FAFAFA;
}

/* 基本的なスタイル */

.page-content {
  width: 100%;
  max-width: 960px;
  margin: 0 auto;
  position: relative;

  h1 {
    margin: 30px 0 20px;
    font-size: 32px;
    line-height: 35px;
  }
  h2 {
    margin: 21px 0 14px;
    font-size: 28px;
    line-height: 31px;
  }
  h3 {
    margin: 18px 0 12px;
    font-size: 24px;
    line-height: 27px;
  }
}

.mdl-navigation__link {
  font-size: 16px;
}

.mdl-list__item-avatar.material-icons {
  padding: 2px;
  color: #757575;
  background-color: transparent;
  font-size: 36px;
  &[data-type="cloud"] {
    padding: 5px;
    font-size: 30px;
  }
}

.mdl-list__item {
  .mdl-list__item-secondary-content {
    align-items: center;
  }
}

.qiita-card {
  .mdl-card__title {
    align-items: flex-start;
    flex-direction: column;
    h4 {
      margin-top: 0;
    }
  }
  .qiita-card__sub-info {
    width: 100%;
    img {
      width: 40px;
      height: 40px;
    }
  }
  .qiita-card__tags {
    padding: 16px;
    .mdl-chip {
      margin-right: 8px;
    }
  }
/* メディアクエリーを使うスタイル */

@media (min-width: 840px) {
  .my-mdl-tabs {
    .mdl-cell {
      margin: 0;
    }
  }
}

@media (max-width: 839px) and (min-width: 480px) {
  .my-mdl-tabs {
    .mdl-cell {
      margin: 0;
    }
  }
}

@media (max-width: 479px) {
  .my-mdl-tabs {
    .mdl-cell {
      margin: 0;
    }
  }
}

}
</style>